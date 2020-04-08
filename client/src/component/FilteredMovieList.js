/**
 * This is the Filtered Movie List Component
 * Child component of Default View
 * This Includes:
 *      Displaying the filtered movies using FilterMovieThumb
 *      Ant Design Components
 */

 /** Imports **/
import React from 'react';
import MovieFilter from './MovieFilter.js';
import FilteredMovieThumb from './FilteredMovieThumb.js';
import '../css/MovieList.css';
import { Typography } from 'antd';

class FilteredMovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { filterMovies: [] };
    }

    render() {
        /* Ant Design Components */
        const { Title } = Typography;

        let display = "";
        if (this.props.movies.length > 0) {
            /* Loops through filter movie array and sends to Filtered Movie Thumb to display movie */
            display = this.props.movies.map((m, index) =>
                <FilteredMovieThumb key={index} movie={m} id={m.id} favsList={this.props.favsList} title={m.title} year={m.release_date} rating={m.ratings.average} addFav={this.props.addFav} />)
        } else { /* If there are no movies in filter movie array  */
            display = <div style={{
                textAlign: 'center'
            }}>No matching movies were found!</div>;
        }

        return (
            <article className="FiltersWithMovie">
                {/* Displays Movie Filters */}
                <div className="movieFilter" id="page-wrap">
                    <MovieFilter clearFilter={this.props.clearFilter} filterYear={this.props.filterYear} filterTitle={this.props.filterTitle} filterRating={this.props.filterRating} filterMovie={this.props.filterMovie} />
                </div>

                <div className="MovieList">
                <Title id="movieTitle"> Movies </Title>
                    <div className="listBox">
                        {display}
                    </div>
                </div>
            </article>
        );
    }
}

export default FilteredMovieList;