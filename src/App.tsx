import React from 'react';
import logo from './logo.svg';
import './App.css';
import MuiTypography from './components/MuiTypography';
import MuiButtons from './components/MuiButtons';
import { Divider } from '@mui/material';
import CollapsibleTable from './components/MuiFolderInTable';

function App() {
  return (
    <div className="App">
      {/* <MuiTypography /> <Divider/> */}
      {/* <MuiButtons /> <Divider/> */}
      <CollapsibleTable />

    </div>
  );
}

export default App;
