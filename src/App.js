import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App(props) {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Navbar />
        <div class='wrapper-content'>
          <Routes>
            <Route path="/profile/*" element={<Profile
              postData={props.state.profilePage.postData}
              dispatch={props.dispatch}/>} />

            <Route path="/dialogs/*" element={<Dialogs
              store={props.store} dispatch={props.dispatch}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
