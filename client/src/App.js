import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
import Home from './views/home.js';
import Login from './views/login.js';
import Profile from './views/profile.js';
import Plan from './views/plan.js';
import Card from './views/card.js';
import IreportView from './views/ireportView.js';
import Dashboard from './views/dashboard.js';
import UploadFil from './views/upload.js';
import FinishSetup from './views/finshSetup.js';
import ChannelList from './views/channelList';
import Movies from './views/movie';
import MoviesDetail from './views/movieDetail.js';
import MyList from './views/myList.js';


function App() {
    return (
      <Router>
        <div className="App">
        <Routes>
          <Route exact path="/" element = {<Home />} />
          <Route exact path="/login" element = {<Login />} />
          <Route exact path="/profile" element = {<Profile />} />
          <Route exact path="/plan" element = {<Plan />} />
          <Route exact path="/card" element = {<Card />} />
          <Route exact path="/ireport_channel" element = {<IreportView />} />
          <Route exact path="/dashboard" element = {<Dashboard />} />
          <Route exact path="/upload" element = {<UploadFil />} />
          <Route exact path="/finish_setup" element = {<FinishSetup />} />
          <Route exact path="/channel_list" element = {<ChannelList />} />
          <Route exact path="/movie_list" element = {<Movies />} />
          <Route exact path="/movie_detail" element = {<MoviesDetail />} />
          <Route exact path="/my_list" element = {<MyList />} />
        </Routes>
        </div>
      </Router>
    );
  }
  export default App;