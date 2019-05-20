import Home from './pages/home';
import Register from './pages/register';
import Shop from './pages/shop';

const routes = [
  { path: '/', exact: true, component: Home },
  { path: '/register', component: Register },
  { path: '/shop', component: Shop },
];

export default routes;
