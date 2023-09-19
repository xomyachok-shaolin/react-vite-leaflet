import React, { FC } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { LoginParams } from "@/models/login";
// import { loginAsync } from '@/stores/user.store';
// import { useAppDispatch } from '@/stores';
import { Location } from "history";
import { useLogin } from "@/api";

import styles from "./index.module.less";
import { ReactComponent as LogoSvg } from "@/assets/logo/logo.svg";
import { AttributionControl, Circle, FeatureGroup, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css"
import { EditControl } from "react-leaflet-draw";
window.type = ''

import drawLocales from 'leaflet-draw-locales'
drawLocales('ru')

const initialValues: LoginParams = {
  username: "guest",
  password: "guest",
  // remember: true
};

const LoginForm: FC = () => {
  const loginMutation = useLogin();
  const navigate = useNavigate();
  const location = useLocation() as Location<{ from: string }>;

  // const dispatch = useAppDispatch();

  const onFinished = async (form: LoginParams) => {
    const result = await loginMutation.mutateAsync(form);
    console.log("result: ", result);

    if (result) {
      localStorage.setItem("token", result.token);
      localStorage.setItem("username", result.username);

      const from = location.state?.from || { pathname: "/dashboard" };
      navigate(from);
    }
  };

  return (
    <div>
      <MapContainer attributionControl={false} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
        
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <AttributionControl position="bottomright" prefix={false} />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <FeatureGroup>
    <EditControl
      position='topright'
      // onEdited={this._onEditPath}
      // onCreated={this._onCreate}
      // onDeleted={this._onDeleted}
      // draw={{
      //   rectangle: false
      // }}
    />
    <Circle center={[51.51, -0.06]} radius={200} />
  </FeatureGroup>
      </MapContainer>
    </div>
    // <div className={styles.container}>
    //   <div className={styles.top}>
    //     <div className={styles.header}>
    //       <Link to="/">
    //         <LogoSvg className={styles.logo} />
    //         <span className={styles.title}>项目管理</span>
    //       </Link>
    //     </div>
    //     <div className={styles.desc}>全新技术栈(React\Recoil\React Query\React Hooks\Vite)的后台管理系统</div>
    //   </div>
    //   <div className={styles.main}>
    //     <Form<LoginParams> onFinish={onFinished} initialValues={initialValues}>
    //       <Form.Item
    //         name="username"
    //         rules={[{ required: true, message: "请输入用户名！" }]}
    //       >
    //         <Input size="large" placeholder="用户名" />
    //       </Form.Item>
    //       <Form.Item
    //         name="password"
    //         rules={[{ required: true, message: "请输入密码！" }]}
    //       >
    //         <Input type="password" size="large" placeholder="密码" />
    //       </Form.Item>
    //       <Form.Item name="remember" valuePropName="checked">
    //         <Checkbox>记住用户</Checkbox>
    //       </Form.Item>
    //       <Form.Item>
    //         <Button
    //           size="large"
    //           className={styles.mainLoginBtn}
    //           htmlType="submit"
    //           type="primary"
    //         >
    //           登录
    //         </Button>
    //       </Form.Item>
    //     </Form>
    //   </div>
    // </div>
  );
};

export default LoginForm;
