import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import { App } from './app/ui/components/app.component';
import { store } from './store/app.store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
