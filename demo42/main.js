import React, {PureComponent, createElement} from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import PageHome from './pages/home';
// import PageAbout from './pages/about';
// import PageLogin from './pages/login';
const PageAbout = React.lazy(() => import("./pages/about"));
const PageLogin = React.lazy(() => import("./pages/login"));
// 异步加载过程显示的提示
const Spinner = () => <div>loading...</div>;

// 根组件
function App() {
  return (
    <HashRouter>
      <div>
        <nav>
          <Link to='/'>Home</Link> | <Link to='/about'>About</Link> | <Link to='/login'>Login</Link>
        </nav>
        <hr/>
        <Routes>
          <Route path='/' element={<PageHome />}/>
          {/* <Route path='/about' element={<PageAbout />}/>
          <Route path='/login' element={<PageLogin />}/> */}
          <Route
            path="/about"
            element={
              <React.Suspense fallback={<Spinner />}>
                <PageAbout />
              </React.Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <React.Suspense fallback={<Spinner />}>
                <PageLogin />
              </React.Suspense>
            }
          />
        </Routes>
      </div>
    </HashRouter>
  )
}

const container = window.document.getElementById('app');
const root = createRoot(container);
// 在 Root 节点上渲染根组件
root.render(<App />);
