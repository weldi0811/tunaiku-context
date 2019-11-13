import React from 'react';
import Summary from './Components/Summary';
import ProfileContextProvider from './Components/context/ProfileContext';
import Home from './Components/Home'
import './style/style.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProfileContextProvider>
          
          <Header />
          <Route path ='/' exact component={Home} />
          <Route path ='/summary' component={Summary} />
          
        </ProfileContextProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
