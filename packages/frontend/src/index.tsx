import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import { AppComponent } from './app/app.component';
import { store } from './store/app.store';

render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById('root'),
);
