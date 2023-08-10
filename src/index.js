import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './Context/context';
import App from './App';
import './index.css';
import {SpeechProvider} from '@speechly/react-client'

ReactDOM.render(
  <React.StrictMode>
  <SpeechProvider appId='2c16226c-d1cd-46bb-82b2-2a2e5be10a01' language='en-US'>
    <Provider>        
      <App/>
    </Provider>
  </SpeechProvider>
  </React.StrictMode>
  
 ,
  document.getElementById('root'),
);