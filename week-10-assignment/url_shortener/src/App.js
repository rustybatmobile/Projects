import React from 'react';
import Header from './Components/Header/Header';
import LayoutContainer from './Containers/AppLayout/AppLayout';

const App = (props) => {
  return (
    <div>
      <Header/>
      <LayoutContainer/>
    </div>
  )
}

export default App;