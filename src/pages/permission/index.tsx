import React, { useEffect, useState } from "react";

import { ProCard, ProFormDateRangePicker, ProFormSelect, ProFormSwitch, 
  ProFormText, ProList, QueryFilter } from "@ant-design/pro-components";
import { PageContainer } from "@ant-design/pro-layout";
import { Tabs } from "antd";
import { UpOutlined, DownOutlined } from "@ant-design/icons";

import "leaflet/dist/leaflet.css";
import L, {Map} from "leaflet";
// import "leaflet-side-by-side";
import { MapContainer, FeatureGroup, TileLayer } from "react-leaflet";
import { DraftControl } from "./components/Draft";
import { FullscreenControl } from "react-leaflet-fullscreen";
import "react-leaflet-fullscreen/styles.css";

const TableList = () => {


  const data = [
    {
      title: 'Title_1',
    },
    {
      title: 'Title_2',
    },
    {
      title: 'Title_3',
    },
    {
      title: 'Title_4',
    },
    {
      title: 'Title_5',
    },
  ];

  const position = [51.505, -0.09];

  const [map, setMap] = useState<Map|null>(null);

  const [isSideBySide, setIsSideBySide] = useState(false);  

  const [showFilter, setShowFilter] = useState<boolean>(true);

  const tabsItem = [
    {
      key: 'main',
      label: 'Основное',
      children: <div style={{overflowY: 'auto', height: '65vh'}}>
        {showFilter ? (
          <QueryFilter split labelWidth="auto" span={30} submitter={false}>
            <ProFormSwitch initialValue={isSideBySide}
              onChange={setIsSideBySide}
              label="Сопоставление" />
            <ProFormText label="Наименование" name="title" />
            <ProFormDateRangePicker label="Дата съемки" name="date" />
            <ProFormSelect label="Поставщики" name="suppliers" />
          </QueryFilter>) : null}
        <ProList
          ghost
          grid={{ column: 1 }}
          pagination={{
            size: 'small'
          }}
          dataSource={data}
          metas={{
            title: {},
          }}
        />
      </div>
    },
    { key: 'additive', 
    label: 'Дополнительное', 
    disabled: !isSideBySide ,
    children:  <div style={{overflowY: 'auto'}}>
      <ProList
          ghost
          grid={{ column: 1 }}
          pagination={{
            size: 'small'
          }}
          dataSource={data}
          metas={{
            title: {},
          }}
        />
    </div>}
    
  ];

  const [sideBySide, setSidebySide] = useState(null);

  useEffect(() => {
    if (map){

    var map = L.map("map", {
      center: [23.14, -101.887],
      zoom: 5
    });
    //   const osmLayer = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    //   attribution:
    //     '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);

    // const stamenLayer = L.tileLayer(
    //   "https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png",
    //   {
    //     attribution:
    //       'Map tiles by <a href="http://stamen.com">Stamen Design</a>, ' +
    //       '<a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; ' +
    //       "Map data {attribution.OpenStreetMap}",
    //     minZoom: 1,
    //     maxZoom: 16
    //   }
    // ).onAdd(map);
      
    //   const sbs = L.control.sideBySide(osmLayer, blankLayer);
    //   window.sbs = sbs;

      
      
      // L.control.sideBySide(stamenLayer, osmLayer).addTo(map);
      setMap(map)
    }
  }, [map])

  return (
    <PageContainer style={{ background: "#f0f2f5", flex: 'auto' }}>

      {/* <ProCard style={{ flex: 'none', marginBottom: 16 }}>
        <QueryFilter labelWidth="auto" style={{ paddingBlock: 0 }}>
          <ProFormText name="title" label="Наименование" />
          <ProFormDateRangePicker name="date" label="Дата съемки" />
          <ProFormSelect label="Поставщики" />
        </QueryFilter>
      </ProCard> */}
      <ProCard ghost style={{ position: "relative", marginTop: 16 }}>
        <ProCard layout="center" style={{ position: 'relative', height: "80vh"}}>
          <MapContainer
          whenCreated={setMap}
            attributionControl={false}
            center={position}
            zoom={13}
          >

<TileLayer 
         url={"http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg"}
       />
       <TileLayer 
         url={"https://placekitten.com/g/1200/1080"}
       />

            <FeatureGroup>
              <DraftControl
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
              />
            </FeatureGroup>
            <FullscreenControl />
          </MapContainer>
        </ProCard>
        <ProCard colSpan="30%" style={{ height: '80vh' }}>
          <Tabs
            defaultActiveKey="main"
            // onChange={onTypeChange}
            className="sticky"
            tabBarExtraContent={
              <a
                style={{
                  display: 'flex',
                  gap: 4,
                }}
                onClick={(e) => {
                  // e.preventDefault();
                  setShowFilter(!showFilter);
                }}
              >
                {showFilter ? <>Свернуть<UpOutlined /></> : <>Развернуть<DownOutlined /></>}
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



{/* <ProFormRadio.Group
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
/> */}


// useRecoilValueLoadable  позволяет компоненту 
//  попытаться получить доступ к RecoilValue,
//  которое, возможно, все еще загружается.