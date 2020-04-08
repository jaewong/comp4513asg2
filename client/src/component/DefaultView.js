import React from 'react';
import MovieList from './MovieList.js';
import Header from './HeaderApp.js';
import FilteredMovieList from './FilteredMovieList.js';
import Favorites from './Favorites.js';

import { Layout, Spin, Row } from 'antd';

class DefaultView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movies: this.filterTitle(this.props.movies), loaded: false };

        this.state.title = '';
        this.state.minYear = '';
        this.state.maxYear = '';
        this.state.minRating = '';
        this.state.maxRating = '';


        this.state.filteredMovies = {};
        this.state.showFiltered = false;
        this.state.homeSearch = '';
    }

    addFav = (poster) => { // takes a whole movie object
        this.props.addsFav(poster);
    }

    deleteFav = (movie) => {
        this.props.deletesFav(movie);
    }


    filterMovie = (values) => {

        let title = values.title;
        let minYear = values.yearBefore;
        let maxYear = values.yearAfter;
        let minRating = values.rateBefore;
        let maxRating = values.rateAfter;

        if (title) {
            console.log("******   " + title);


            this.setState({ title: title }, function () { console.log(this.state.title) });

            const url = `https://comp4513asg2.herokuapp.com/api/find/title/${title}`;
            console.log("IN mount");

            const options = {
                "Content-Type": "application/json",
                "mode": "cors"
            }

            fetch(url, options)
                .then(function (response) {
                    return response.json();
                })
                .then(data => {
                    let sortedMovies = data.sort((a, b) => {
                        return a.title < b.title ? -1 : 1;
                    })
                    console.log(sortedMovies);
                    this.setState({ filteredMovies: sortedMovies, showFiltered: true });
                })
        } else if (minYear && maxYear) {

            const url = `https://comp4513asg2.herokuapp.com/api/find/year/${minYear}/${maxYear}`;
            const options = {
                "Content-Type": "application/json",
                "mode": "cors"
            }

            fetch(url, options)
                .then(function (response) {
                    return response.json();
                })
                .then(data => {
                    if (!data.message) {
                        data.sort((a, b) => {
                            var x = a.release_date.substring(0, 4);
                            var y = b.release_date.substring(0, 4);
                            if (x < y) { return -1; }
                            if (x > y) { return 1; }
                            return 0;
                        })
                    } else {
                        data = [];
                    }

                    this.setState({ filteredMovies: data, showFiltered: true });
                })
        } else if (minRating && maxRating) {

            const url = `https://comp4513asg2.herokuapp.com/api/find/rating/${minRating}/${maxRating}`;
            const options = {
                "Content-Type": "application/json",
                "mode": "cors"
            }

            fetch(url, options)
                .then(function (response) {
                    return response.json();
                })
                .then(data => {
                    if (!data.message) {
                        data.sort((a, b) => {
                            var x = a.ratings.average;
                            var y = b.ratings.average;
                            if (x < y) { return -1; }
                            if (x > y) { return 1; }
                            return 0;
                        })
                    } else {
                        data = [];
                    }

                    console.log(data);
                    this.setState({ filteredMovies: data, showFiltered: true });
                })
        }
    }


    clearFilter = () => {
        this.setState({ filteredMovies: {}, showFiltered: false });
    }

    filterTitle = (movieArray) => {
        movieArray.sort((a, b) => {
            var x = a.title.toLowerCase();
            var y = b.title.toLowerCase();
            if (x < y) { return -1; }
            if (x > y) { return 1; }
            return 0;
        })
        this.setState({ filteredMovies: movieArray });
    }

    filterYear = (movieArray) => {
        movieArray.sort((a, b) => {
            var x = a.release_date.substring(0, 4);
            var y = b.release_date.substring(0, 4);
            if (x < y) { return -1; }
            if (x > y) { return 1; }
            return 0;
        })
        this.setState({ filteredMovies: movieArray });
    }

    filterRating = (movieArray) => {
        movieArray.sort((a, b) => {
            var x = a.ratings.average;
            var y = b.ratings.average;
            if (x < y) { return -1; }
            if (x > y) { return 1; }
            return 0;
        })
        this.setState({ filteredMovies: movieArray });
    }

    render() {

        const { Content , Footer } = Layout;

        if (this.props.loaded) {
            if (!this.state.showFiltered) {
                return (
                    <Layout className="layout">
                        <Header />
                        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                            <Favorites favs={this.props.favsList} delete={this.deleteFav} />
                            <MovieList loaded={this.props.loaded} filterRating={this.filterRating} filterYear={this.filterYear} filterTitle={this.filterTitle} favsList={this.props.favsList} movies={this.props.movies} addFav={this.addFav} filterMovie={this.filterMovie} clearFilter={this.clearFilter} />
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>COMP 4513 Assignment 2 ©2020 Created by Leris Arandia, Jamie Wong, Natnael Beshawered</Footer>
                    </Layout>
                );
            }
            else {
                return (
                    <Layout className="layout">
                        <Header />
                        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                            <Favorites favs={this.props.favsList} delete={this.deleteFav} />
                            <FilteredMovieList loaded={this.props.loaded} filterRating={this.filterRating} filterYear={this.filterYear} filterTitle={this.filterTitle} favsList={this.props.favsList} movies={this.state.filteredMovies} addFav={this.addFav} filterMovie={this.filterMovie} clearFilter={this.clearFilter} />
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>COMP 4513 Assignment 2 ©2020 Created by Leris Arandia, Jamie Wong, Natnael Beshawered</Footer>
                    </Layout>
                );
            }
        } else {
            return (
                <Layout className="layout">
                    <Header />
                    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                        <Favorites favs={this.props.favs} />
                        <Row justify="center" align="middle" className="load">
                            <Spin size="large" tip="Loading..." />
                        </Row>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>COMP 4513 Assignment 2 ©2020 Created by Leris Arandia, Jamie Wong, Natnael Beshawered</Footer>
                </Layout>
            );

        }
    }


}

export default DefaultView;