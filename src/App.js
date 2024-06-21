
import './App.css';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';

import { Provider, useDispatch } from 'react-redux'
import Store from './Store/store';
import mockdata from "../src/mockdata.json"
import { initialData } from './Store/ProductSlice';

function App() {


  return (
    <Provider store={Store}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
