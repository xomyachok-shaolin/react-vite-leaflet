import React, { Suspense, useEffect, useMemo } from "react";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import ru_RU from "antd/lib/locale/ru_RU";
import RenderRouter from "./routes";

import "./App.less";

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const App: React.FC = () => {

  return (
    <ConfigProvider  locale={ru_RU} componentSize="middle">
        <BrowserRouter>
          <RenderRouter />
        </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
