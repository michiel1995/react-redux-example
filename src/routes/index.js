import React from 'react';
import express from 'express';
import StyleContext from 'isomorphic-style-loader/StyleContext';
import { renderToString } from 'react-dom/server';
import StaticRouter from 'react-router-dom/StaticRouter';
import { Provider } from 'react-redux';
import App from '../client/App';
import configureStore from '../client/store/configureStore';
/*eslint-disable*/
const router = express.Router();
/* eslint-enable */

const store = configureStore();

router.get('*', (req, res) => {
  const context = {};
  const css = new Set(); // CSS for all rendered React components
  const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()));

  const content = renderToString(
    <StyleContext.Provider value={{ insertCss }}>
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    </StyleContext.Provider>,
  );
  if (context.action === 'REPLACE') {
    return res.redirect(302, context.url);
  }
  const html = `<!doctype html>
    <html>
      <head>
        <style>${[...css].join('')}</style>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>`;
  res.status(200).send(html);
});

export default router;
