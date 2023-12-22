import React, { FC } from 'react';
import { Atom } from "./components/Spinner/atom";

const SuspendFallbackLoading: FC = () => {
  return (
<div style={{margin: 'auto'}}><Atom size="200" color="#54a8f1" animationDuration="700" /></div>
    // <div><AtomSpinner color="#1890ff" style={{margin: 'auto', width: '100%', padding: '150px'}}/></div>
  );
};

export default SuspendFallbackLoading;
