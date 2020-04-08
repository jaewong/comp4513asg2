import React from 'react';
import { Link } from 'react-router-dom';
import DefaultView from './component/DefaultView.js';
import './App.css';
import Home from "./component/Home.js";
import MovieDetailsView from "./component/MovieDetailsView.js";
import { Route, Switch } from 'react-router-dom';
import { Spin, Row } from 'antd';
// import CastView from "./component/CastView.js";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group'; // Used this Tutorial https://www.youtube.com/watch?v=NUQkajBdnmQ , https://github.com/Ihatetomatoes/react-router-page-transition-css
import Modal from 'react-modal';

Modal.setAppElement('#root');
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
    this.state.jwt = "";
    this.state.favorites = [];
    this.state.loaded = false;
    this.state.loggedin = false;
  }

  async componentDidMount() {
    try {
      this.authCheck();
      const url = "https://comp4513asg2.herokuapp.com/api/movies";

      //const url = "/api/brief";
      const options = {
        "Content-Type": "application/json",
        "mode": "cors"
      }

      const response = await fetch(url, options);
      const jsonData = await response.json({});
      console.log(jsonData);
      this.setState({ movies: jsonData, loaded: true });

    } catch (error) {
      console.error(error);
    }
  }

  loggedin = () => {
    //Login conition
    return false; 
  }

  authCheck = () => {
    console.log("goign to heroku");
    // if(!this.loggedin()){
    //   window.location.replace('https://comp4513asg2.herokuapp.com/');
    // }
  }

  addToFavorite = (poster) => {
    let value = false;
    console.log(poster);
    for (let c of this.state.favorites) {
      if (c.poster === poster.poster) {
        value = true;
      }
    }
    
    if (value === false) {
      const data = this.state.favorites;
      data.push(poster);
      this.setState({ favorites: data });
    }
  }

  deleteFromFavorite = (poster) => {
    console.log("To be delated: " + poster);
    const fav = this.state.favorites;
    for (let c = 0; c < fav.length; c++) {
      if (fav[c].poster === poster.poster) {
        fav.splice(c, 1);
      }
    }
    this.setState({ favorites: fav });
  }

  render() {
    if (this.state.loaded) {
      return (
        <main>
          {/* Used this Tutorial https://www.youtube.com/watch?v=NUQkajBdnmQ , https://github.com/Ihatetomatoes/react-router-page-transition-css */}
          <Route  render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={{ enter: '300', exit: '300' }}
                classNames="fade"
              >
                <Switch location={location}>
                  <Route path="/" exact component={Home}/>
                  <Route path="/default" exact render={() =>
                    <DefaultView loaded={this.state.loaded} movies={this.state.movies} favsList={this.state.favorites} addsFav={this.addToFavorite} deletesFav={this.deleteFromFavorite} />
                  }/>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} onEnter={this.authCheck} />
          <Route path="/moviedetails" exact component={MovieDetailsView}/>
          {/* <Route path="/castview" exact component={CastView} /> */}
          {/* <DefaultView movies={this.state.movies} addsFav={this.addToFavorite} /> */}
        </main>
      );
    }
    else {
      return (
        <Row justify="center" align="middle" className="load">
          <Spin size="large" tip="Loading..." />
        </Row>
      );
    }
  }

}
export default App;
