import { Button, Result } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocale } from '@/locales';

import Leaflet from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const NotFoundPage: React.FC<{}> = () => {
  const navigate = useNavigate();
  const { formatMessage } = useLocale();
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    // <Result
    //   status="404"
    //   title="404"
    //   subTitle={formatMessage({ id: 'gloabal.tips.notfound' })}
    //   extra={
    //     <Button type="primary" onClick={() => navigate('/')}>
    //       {formatMessage({ id: 'gloabal.tips.backHome' })}
    //     </Button>
    //   }
    // ></Result>
  );
};

export default NotFoundPage;
