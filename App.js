import React from 'react';
import Navigators from './navigators/Navigators';
import {MainProvider} from './contexts/MainContext';

const App = () => {
  return (
    <MainProvider>
        <Navigators></Navigators>
    </MainProvider>
  )
};

export default App;
