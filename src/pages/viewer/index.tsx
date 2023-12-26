import React, { useCallback, useEffect, useRef, useState } from "react";

import {
  ProCard,
  ProForm,
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
import "leaflet.fullscreen/Control.FullScreen.css";
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import L from "leaflet";
import "leaflet-side-by-side";
import MarkerClusterGroup from "react-leaflet-cluster";
import {
  MapContainer,
  FeatureGroup,
  TileLayer,
  Marker,
  Rectangle,
} from "react-leaflet";
import { FullscreenControl } from 'react-leaflet-fullscreen';
import { EditControl } from "react-leaflet-draw"
import drawLocales from 'leaflet-draw-locales'
drawLocales('ru')
// Настройка дополнительных текстов подсказок
L.drawLocal.edit.toolbar.buttons.remove = 'Удалить (Del)';
L.drawLocal.draw.toolbar.buttons.polyline = 'Нарисовать полилинию (L)';
L.drawLocal.draw.toolbar.buttons.rectangle = 'Нарисовать прямоугольник (R)';

import useLeafletMapTools from './useLeafletMapTools';
import './custom-leaflet-draw.css';

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

  const [form] = ProForm.useForm();

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
                name="isSideBySide"
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

  const osmUrl =
    "https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}.png";
  const stamenUrl =
    "https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}.png";

  const [osmLayer, setOsmLayer] = useState();
  const [stamenLayer, setStamenLayer] = useState();

  // const [sideBySide, setSidebySide] = useState(null);

  const [baseViewCoords, setBaseViewCoords] = useState([37.715, 44.8611]);
  const [map, setMap] = useState();

  useEffect(() => {
    console.log(map);
    if (map) {
      L.Control.sideBySide(stamenLayer, osmLayer).addTo(map);
      setMap(map);
    }
  }, [osmLayer, stamenLayer]);

  useEffect(() => {
    console.log(map);

    if (map) {
      map.setView(baseViewCoords);

      setOsmLayer(L.tileLayer(osmUrl).addTo(map));
      setStamenLayer(L.tileLayer(stamenUrl).addTo(map));
    }
  }, [map, baseViewCoords]);

  const mapRef = useRef(null);
  const featureGroupRef = useRef();
  useLeafletMapTools(map, mapRef);

  const onCreated = (e) => {
    // Обработка созданного слоя
    const layer = e.layer;
    featureGroupRef.current.addLayer(layer); // Добавить слой в FeatureGroup
  };


  useEffect(() => {
    const handleResize = () => {
      if (mapRef.current) {
        mapRef.current.invalidateSize();
      }
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <PageContainer
      title={false}
      breadcrumbRender={false}
      style={{ background: "#f0f2f5", flex: "auto" }}
    >
      <ProCard ghost style={{ position: "relative", marginTop: 16 }}>
        <ProCard
          layout="center"
          style={{ position: "relative", height: "80vh" }}
        >
          <MapContainer
            maxZoom={20}
            ref={mapRef}
            whenReady={(mapEvent) => {
              setMap(mapEvent.target); 
              mapRef.current = mapEvent.target;
            }}
            attributionControl={false}
            center={baseViewCoords}
            zoom={13}
          >
            <MarkerClusterGroup chunkedLoading>
              <Marker position={[37.715, 44.8611]} />
              <Marker position={[37.8, 44.9]} />
              <Marker position={[37.2, 44.4]} />
              <Marker position={[37.6, 45.1]} />
              <Marker position={[37.9, 45]} />
              <Marker position={[36.9, 44.1]} />
              <Rectangle
                bounds={[
                  [36.9, 44.1],
                  [37, 44.5],
                ]}
              />
            </MarkerClusterGroup>

            {/* <MarkerMuster>
                <Marker position={[-21.210309, -47.647063]}/>
                <Marker position={[-21.210309, -47.647063]}/>
            </MarkerMuster> */}

            <TileLayer url={osmUrl} />
            <TileLayer url={stamenUrl} />


            <FeatureGroup ref={featureGroupRef}>
              <EditControl
                position='topright'
                draw={{
                  rectangle: {
                    tooltip: '',
                    repeatMode: true,
                  },
                }}
                onEdited={(e) => console.log(e)}
                onCreated={onCreated}
                onDeleted={(e) => console.log(e)}
                edit={{
                  featureGroup: featureGroupRef.current,
                  remove: true,
                }}
              />
            </FeatureGroup>
            <FullscreenControl position="topleft" />

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