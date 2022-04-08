import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppComponent } from './AppComponent';

const container = window.document.getElementById('app');
const root = createRoot(container);
// 在 Root 节点上渲染根组件
root.render(<AppComponent />);
