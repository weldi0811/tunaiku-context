import React from 'react';
import Slider2 from './Components/Slider';
import Form from './Components/Form';
import Summary from './Components/Summary';
import ProfileContextProvider from './Components/context/ProfileContext';
import Home from './Components/Home'
import './style/style.css'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProfileContextProvider>
          <Route path ='/' exact component={Home} />
          <Route path ='/summary' component={Summary} />
        </ProfileContextProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
