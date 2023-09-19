import React, { Suspense, useMemo } from "react";
import { createRoot } from "react-dom/client";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import axios, { AxiosContext } from "./api/request";

import "./index.css";
import App from "./App";
import { ErrorBoundary } from "react-error-boundary";
import SuspendFallbackLoading from "./pages/layout/suspendFallbackLoading";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      refetchInterval: false,
    },
  },
});

const AxiosProvider = ({ children }: React.PropsWithChildren<unknown>) => {
  const axiosValue = useMemo(() => {
    return axios;
  }, []);

  return (
    <AxiosContext.Provider value={axiosValue}>{children}</AxiosContext.Provider>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  // <React.StrictMode>
  <AxiosProvider>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        {/* <ErrorBoundary
          fallbackRender={({ error, resetErrorBoundary }) => (
            <div>
              There was an error!{" "}
              <button onClick={() => resetErrorBoundary()}>Try again</button>
              <pre style={{ whiteSpace: "normal" }}>{error.message}</pre>
            </div>
          )}
        > */}
          <Suspense fallback={<SuspendFallbackLoading />}>
            <App />
          </Suspense>
        {/* </ErrorBoundary> */}
      </RecoilRoot>
    </QueryClientProvider>
  </AxiosProvider>,
  // </React.StrictMode>,
);
