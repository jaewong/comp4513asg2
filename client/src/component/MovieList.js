/**
 * This component holds the movie list (list of movie thumbs)
 * Child component of Default View
 * This Includes:
 *      unfiltered movie list (all movies)
 *      Ant Design Components
 * This component is passed the movie array and loops through the array and sends a movie to the movie list child component
 */

 /** Imports **/
import React from 'react';
import MovieThumb from './MovieThumb.js';
import MovieFilter from './MovieFilter.js';
import '../css/MovieList.css';
import { Typography, Spin, Row } from 'antd';

class MovieList extends React.Component {
    /* Output all movies and filters */
    render() {
        /* Ant Design Variable */
        const { Title } = Typography;

        if (this.props.loaded) {
            return (
                <article className="FiltersWithMovie">
                    {/* Filters */}
                    <div className="movieFilter" id="page-wrap">
                        <MovieFilter filterYear={this.props.filterYear} filterRating={this.props.filterRating} filterTitle={this.props.filterTitle} movieList={this.props.movies} filterMovie={this.props.filterMovie} clearFilter={this.props.clearFilter} />
                    </div>
                    <div className="MovieList">
                        <Title id="movieTitle"> Movies </Title>
                        <div className="listBox">
                            {/* Loops through movie array and sends movie to Movie Thumb*/}
                            {this.props.movies.map((m, index) =>
                                <MovieThumb key={index} favsList={this.props.favsList} movie={m} id={m.id} title={m.title} year={m.release_date} rating={m.ratings.average} addFav={this.props.addFav} changeView={this.props.changeView} />)
                            }
                        </div>
                    </div>
                </article>
            );
        }
        else {
            return (
            <Row justify="center" align="middle" className="load">
                {/* Loading */}
                <Spin size="large" tip="Loading..." />
            </Row>);
        }
    }
}

export default MovieList;