import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import CEPCtrl from './components/CEPCtrl';

function App() {
  return (
    <div className="App">
      <Tabs defaultActiveKey="cep" id="trabalhos-tf">
        <Tab eventKey="cep" title="CEPs">
          <CEPCtrl />
        </Tab>
        <Tab eventKey="?" title="?" disabled />
      </Tabs>
    </div>
  );
}

export default App;
