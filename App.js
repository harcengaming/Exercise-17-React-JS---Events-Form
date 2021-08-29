import {  Switch, Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Home from './components/Home';
import Daftar from './components/Daftar';
import Masuk from './components/Masuk/Masuk';
import Blog from './components/Blog';
import ListBlog from './components/ListBlog';

function App() {
  const [muncul] = useState(true);

  return (
    <div className="App">

      <div className="navigasi">
        <div className="utama">
          <Link to="/">Utama</Link>
        </div>

        <div className="pisahlink">
          <Link to="/daftar" id="link">Daftar</Link>
          <Link to="/masuk" id="link">Masuk</Link>
          <Link to="/blog" id="link">Blog</Link>
        </div>
      </div>
      
      <Switch>
        <Route exact path="/">
          { muncul ? <Home utama="Ayo"/> : <Redirect to="/masuk" /> }
        </Route>

        <Route path="/daftar">
          <Daftar />
        </Route>

        <Route exact path="/blog">
          <ListBlog />
        </Route>

        <Route path="/blog/:title">
          <Blog />
        </Route>

        <Route path="/masuk">
          <Masuk />
        </Route>
      </Switch>

      <footer>
          &copy; { new Date().getFullYear() } Copyright  <a href="https://id.reactjs.org/" rel='noreferrer' target='_blank'> React JS </a> <br/>
          Created with Visual Studio Code by <a href="https://www.instagram.com/harcengaming" rel='noreferrer' target='_blank'> Harcen Gaming </a>
      </footer>
    </div>
  );
}

export default App;
