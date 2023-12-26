
import { FooterToolbar, PageContainer } from "@ant-design/pro-layout";
import type { ProColumns, ActionType } from "@ant-design/pro-table";
import ProTable from "@ant-design/pro-table";
import { Button, Card, Dropdown, List, Menu, message, Modal, PaginationProps, Progress, Space, Tag, Typography } from "antd";
import { PlusOutlined, EllipsisOutlined, SmileOutlined, EyeInvisibleOutlined, SecurityScanOutlined, RobotFilled, RobotOutlined, UserOutlined, MehFilled } from "@ant-design/icons";

import React, { useEffect, useRef, useState } from "react";
import { findDOMNode } from "react-dom";
import OperationModal from "./components/OperationModal";
import { useAddProject, useBatchDeleteProject, useGetProjects, useUpdateProject } from "@/api";
import { ProCard, ProList } from "@ant-design/pro-components";
const { Text, Title } = Typography;


const TableList = () => {

  const addBtn = useRef(null);

  const [done, setDone] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [projects, setProjects] = useState<API.Project[]>();
  const [filters, setFilters] = useState<API.Project[]>();
  const [current, setCurrent] = useState<Partial<API.Project> | undefined>(
    undefined
  );

  const [showDetail, setShowDetail] = useState<boolean>(false);

  const [pagination, setPagination] = useState<Partial<PaginationProps>>({
    current: 1,
    pageSize: 10,
    total: 0,
  });
  const actionRef = useRef<ActionType>();
  const [selectedRowsState, setSelectedRows] = useState<API.Project[]>([]);

  // const { data, error, isLoading, refetch } = useGetProjects(pagination, filters);

  const { mutateAsync } = useAddProject();
  const { mutateAsync: update } = useUpdateProject();
  const { mutateAsync: batchDelete } = useBatchDeleteProject();

  const showModal = () => {
    setVisible(true);
    setCurrent(undefined);
  };

  const showEditModal = (item: API.Project) => {
    setVisible(true);
    setCurrent(item);
  };

  const setAddBtnblur = () => {
    if (addBtn.current) {
      // eslint-disable-next-line react/no-find-dom-node
      const addBtnDom = findDOMNode(addBtn.current) as HTMLButtonElement;
      setTimeout(() => addBtnDom.blur(), 0);
    }
  };

  const handleDone = () => {
    setAddBtnblur();

    setVisible(false);
  };

  const handleCancel = () => {
    setAddBtnblur();
    setVisible(false);
  };

  const addProject = async (data: API.Project) => {
    await mutateAsync(data);
  };
  const updateProject = async (data: API.Project) => {
    await update(data);
  };
  const handleSubmit = async (values: API.Project) => {
    values.id = current && current.id ? current.id : 0;

    setAddBtnblur();
    setVisible(false);

    const hide = message.loading("正在添加/更新");
    try {
      if (values.id === 0) {
        await addProject(values);
      } else {
        await updateProject(values);
      }

      hide();

      message.success("操作成功");
      refetch();

      return true;
    } catch (error) {
      hide();
      message.error("操作失败请重试！");
      return false;
    }
  };
  /**
   * 删除节点
   *
   * @param selectedRows
   */
  const handleRemove = async (selectedRows: API.Project[]) => {
    const hide = message.loading("正在删除");
    if (!selectedRows) return true;
    try {
      await batchDelete(selectedRows.map((row) => row.id));
      setPagination({ ...pagination, current: 1 });
      hide();
      message.success("删除成功，即将刷新");
      return true;
    } catch (error) {
      hide();
      message.error("删除失败，请重试");
      return false;
    }
  };


  const data = [
    'TechUI',
    'TechUI 2.0',
    'Bigfish',
    'Umi',
    'Ant Design Pro',
  ].map((item) => ({
    title: item,
    subTitle: <Tag color="#5BD8A6">语雀专栏</Tag>,
    actions: [<a key="run">邀请</a>, <a key="delete">删除</a>],
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg',
    content: (
      <div
        style={{
          flex: 1,
        }}
      >
        <div
          style={{
            width: 200,
          }}
        >
          <div>发布中</div>
          <Progress percent={80} />
        </div>
      </div>
    ),
  }));

  // title, description, updatedAt, evaluated, predicted, action
  const listData = [
    { id: 1, title: 'item 1', updatedAt: '1-1-2023', description: 'https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg' },
    { id: 2, title: 'item 2' },
    { id: 3, title: 'item 3' },
  ];

  return (
    <PageContainer>
      <Button style={{ marginBottom: '10px' }} type="primary" key="primary" onClick={showModal}>
        <PlusOutlined /> Создать
      </Button>
      <ProList<any>
        ghost
        // itemCardProps={{
        //   ghost: true,
        //   style: { backgroundColor: "#FA8072ff", border: 0, },
        //   bodyStyle: { backgroundColor: '#FA807280', border: 0, borderRadius: "3px" }
        // }}
        renderItem={(item) => (
          <List.Item>
            <Card
              style={{
                borderRadius: "7px",
                overflow: "hidden",
                border: 0,
              }}
              hoverable

              headStyle={{ backgroundColor: '#8A2BE2', color: "#ffffff" }}
              // 30=4D, 35=59, 40=66, 50=80, 55=8C, 60=99, 65=A6, 70=B3, 75=BF, 80=CC, 85=D9
              bodyStyle={{
                backgroundColor: '#8A2BE2' + '4D',
                color: "#646676",
                wordWrap: "break-word"
              }}
              title={
              <div>
              <Title style={{color:"#fff"}} level={5}>{item.title}</Title>
              <Text type="secondary" style={{color:"#fff", fontSize: "70%"}}>26.12.2023</Text>
              </div>
              }
              extra={
                <Space>
                  <Space>
                    <RobotFilled style={{ color: "#ffffff" }} />
                    <RobotOutlined style={{ color: "#ffffff" }} />
                    <UserOutlined style={{ color: "#ffffff" }} />
                  </Space>
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item key="1" items={[
                          <a target="_blank" rel="noopener noreferrer" href="">
                            редактировать
                          </a>
                        ]}>
                          редактировать
                        </Menu.Item>
                        <Menu.Item key="2" danger items={['удалить']}>
                          удалить
                        </Menu.Item>
                      </Menu>
                    }
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <EllipsisOutlined style={{ float: "right", color: "#ffffff" }} />
                    </a>
                  </Dropdown>
                  
                </Space>
              }>

              <div>{item.description}</div>
              <div style={{ paddingTop: '24px' }}>{item.updatedAt}</div>
            </Card>
          </List.Item>
        )}
        pagination={{
          defaultPageSize: 8,
          showSizeChanger: false,
        }}
        //showActions="hover"
        rowSelection={{}}
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        onItem={(record: any) => {
          return {
            onMouseEnter: () => {
              console.log(record);
            },
            onClick: () => {
              console.log(record);
            },
          };
        }}
        metas={{
          title: {},
          subTitle: {},
          type: {},
          avatar: {},
          content: {},
          actions: {
            cardActionProps: "extra",
          },
        }}
        // headerTitle="卡片列表展示"
        dataSource={listData}
      />

      <OperationModal
        done={done}
        current={current}
        open={visible}
        onDone={handleDone}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
    </PageContainer>
  );
};

export default TableList;
