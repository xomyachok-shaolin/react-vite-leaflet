import React, { useEffect, useState } from "react";

import {
  ProCard,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
  ProList,
  QueryFilter,
} from "@ant-design/pro-components";
import { PageContainer } from "@ant-design/pro-layout";
import { Tabs } from "antd";
import { UpOutlined, DownOutlined } from "@ant-design/icons";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-side-by-side";
import { MapContainer, FeatureGroup, TileLayer } from "react-leaflet";

import { DraftControl } from "./components/Draft";

const TableList = () => {
  const data = [
    {
      title: "Title_1",
    },
    {
      title: "Title_2",
    },
    {
      title: "Title_3",
    },
    {
      title: "Title_4",
    },
    {
      title: "Title_5",
    },
  ];

  const [isSideBySide, setIsSideBySide] = useState(false);

  const [showFilter, setShowFilter] = useState<boolean>(true);

  const tabsItem = [
    {
      key: "main",
      label: "Основное",
      children: (
        <div style={{ overflowY: "auto", height: "65vh" }}>
          {showFilter ? (
            <QueryFilter split labelWidth="auto" span={30} submitter={false}>
              <ProFormSwitch
                initialValue={isSideBySide}
                onChange={setIsSideBySide}
                label="Сопоставление"
              />
              <ProFormText label="Наименование" name="title" />
              <ProFormDateRangePicker label="Дата съемки" name="date" />
              <ProFormSelect label="Поставщики" name="suppliers" />
            </QueryFilter>
          ) : null}
          <ProList
            ghost
            grid={{ column: 1 }}
            pagination={{
              size: "small",
            }}
            dataSource={data}
            metas={{
              title: {},
            }}
          />
        </div>
      ),
    },
    {
      key: "additive",
      label: "Дополнительное",
      disabled: !isSideBySide,
      children: (
        <div style={{ overflowY: "auto" }}>
          <ProList
            ghost
            grid={{ column: 1 }}
            pagination={{
              size: "small",
            }}
            dataSource={data}
            metas={{
              title: {},
            }}
          />
        </div>
      ),
    },
  ];

  const osmUrl = "https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}.png";
  const stamenUrl = "https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}.png";

  const [osmLayer, setOsmLayer] = useState();
  const [stamenLayer, setStamenLayer] = useState();

  const [sideBySide, setSidebySide] = useState(null);

  const [baseViewCoords, setBaseViewCoords] = useState([37.715, 44.8611]);
  const [map, setMap] = useState();

  useEffect(() => {
    if (map) {
      L.Control.sideBySide(stamenLayer, osmLayer).addTo(map);
      setMap(map);
    }
  }, [osmLayer, stamenLayer]);

  useEffect(() => {
    if (map) {
      map.setView(baseViewCoords);

      setOsmLayer(L.tileLayer(osmUrl).addTo(map))
      setStamenLayer(L.tileLayer(stamenUrl).addTo(map));
    }
  }, [map, baseViewCoords]);

  return (
    <PageContainer style={{ background: "#f0f2f5", flex: "auto" }}>
      <ProCard ghost style={{ position: "relative", marginTop: 16 }}>
        <ProCard
          layout="center"
          style={{ position: "relative", height: "80vh" }}
        >
          <MapContainer
            whenCreated={(map) => setMap(map)}
            attributionControl={false}
            center={baseViewCoords}
            zoom={13}
          >
            <TileLayer url={osmUrl} />
            <TileLayer url={stamenUrl} />

            <FeatureGroup>
            {/* <DraftControl
                draw={{
                  circlemarker: true,
                  marker: true,
                  polygon: true,
                  polyline: true,
                  circle: true,
                  rectangle: true
                }}
                edit={{
                  edit: {}
                }}
                
                onEdited={e => console.log(e)}
                onDeleted={e => console.log(e)}
                onCreated={e => console.log(e)}
              /> */}
            </FeatureGroup>
            {/* <FullscreenControl /> */}
          </MapContainer>
        </ProCard>
        <ProCard colSpan="30%" style={{ height: "80vh" }}>
          <Tabs
            defaultActiveKey="main"
            // onChange={onTypeChange}
            className="sticky"
            tabBarExtraContent={
              <a
                style={{
                  display: "flex",
                  gap: 4,
                }}
                onClick={(e) => {
                  // e.preventDefault();
                  setShowFilter(!showFilter);
                }}
              >
                {showFilter ? (
                  <>
                    Свернуть
                    <UpOutlined />
                  </>
                ) : (
                  <>
                    Развернуть
                    <DownOutlined />
                  </>
                )}
              </a>
            }
            items={tabsItem}
          />
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default TableList;

{
  /* <ProFormRadio.Group
name="radio"
radioType="button"
options={[
  {
    value: 'weekly',
    label: '每周',
  },
  {
    value: 'quarterly',
    label: '每季度',
  },
  {
    value: 'monthly',
    label: '每月',
  },
  {
    value: 'yearly',
    label: '每年',
  },
]}
/> */
}

// useRecoilValueLoadable  позволяет компоненту
//  попытаться получить доступ к RecoilValue,
//  которое, возможно, все еще загружается.
