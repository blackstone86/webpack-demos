import React from 'react';
import { createRoot } from 'react-dom/client';
import HelloWebpack from 'hello-webpack5';
import 'hello-webpack5/lib/index.css';

const container = window.document.getElementById('app');
const root = createRoot(container);
// 在 Root 节点上渲染根组件
root.render(<HelloWebpack />);
