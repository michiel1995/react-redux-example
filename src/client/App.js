import { renderRoutes } from 'react-router-config';
import withStyles from 'isomorphic-style-loader/withStyles';
import globalStyles from './scss/main.scss';

import routes from './routes';

function App() {
  return renderRoutes(routes);
}

export default withStyles(globalStyles)(App);
