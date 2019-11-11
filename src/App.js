import React from 'react';
import Slider2 from './Components/Slider';
import Form from './Components/Form';
import Summary from './Components/Summary';
import ProfileContextProvider from './Components/context/ProfileContext';
import Home from './Components/Home'
import './style/style.css'
 

function App() {
  return (
    <div className="App">
        <ProfileContextProvider>
        <Home />
        </ProfileContextProvider>
      
    </div>
  );
}

export default App;
