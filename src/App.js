import React from 'react';
import './App.css';
import NavigationBar from './components/shared/NavigationBar';
import HomeScreen from './components/home/HomeScreen';
import AppScreen from './components/app/AppScreen';
import AboutUsScreen from './components/aboutus/AboutUsScreen';
import ErrorScreen from './components/error/ErrorScreen';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {

  function bookChooser({ match }) {
    // const book = sth.filter((bookName) =>
    //   bookName.name.toLowerCase() === match.params.book)[0];

    return(
      // !book ? <Route component={ErrorScreen} /> : 
      <AppScreen />
    )
  }

  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/app" component={bookChooser} />
        <Route exact path="/aboutus" component={AboutUsScreen} />
        <Route component={ErrorScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
