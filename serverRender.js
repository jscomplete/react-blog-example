import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import config from './config';
import axios from 'axios';

const getApiUrl = () => {
  return `${config.serverUrl}/api/items`;
};

const getInitialData = (apiData) => {
  return apiData;
};

const serverRender = () =>
  axios.get(getApiUrl())
    .then(resp => {
      const initialData = getInitialData(resp.data);
      return {
        initialMarkup: ReactDOMServer.renderToString(
          <App initialData={initialData} />
        ),
        initialData
      };
    });

export default serverRender;
