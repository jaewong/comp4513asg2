/**
 * This component is the individual movie thumb divs which is displayed in the movie list component
 * This page prints out the div which includes: 
 *      Movie image
 *      Movie title
 *      Movie year
 *      Movie rating
 *      and a Favorite and View button 
 *      Ant Design Components
 */

 /** Imports **/
import React from "react";
import '../css/MovieThumb.css';
import { Link } from 'react-router-dom';
import { Card, Button, Space, Typography  } from 'antd';
import { HeartTwoTone, EyeOutlined } from '@ant-design/icons';

class MovieThumb extends React.Component {
    /** Function to add movie to favorites **/
    add = () => {
        this.props.addFav(this.props.movie);
    }

    render() {
        {/* Ant Design Variables */}
        const { Title } = Typography;
        {/* Movie Image URL */}
        const imgURL = `https://image.tmdb.org/t/p/w92/${this.props.movie.poster}`;
        return (
            <Card /* Movie Image */
                hoverable
                style={{ width: 200 }}
                id="cardList"
                cover={
                    <Link to={{
                        pathname: '/moviedetails',
                        state: { id: this.props.id, favsList: this.props.favsList }
                    }}><img src={imgURL} /></Link>

                }>
                {/* Movie Title */}
                <Link to={{

                    pathname: '/moviedetails',
                    state: { id: this.props.id, favsList: this.props.favsList }

                }}>
                    <Title level={3}>{this.props.movie.title}</Title>
                </Link>

                {/* Movie year and rating */}
                <p>{this.props.year}</p>
                <p>{this.props.rating}</p>
                {/* View and Favorite Buttons */}
                <Space size={30}>
                    <Button onClick={this.add} shape="circle" size="large" icon={<HeartTwoTone twoToneColor="#eb2f96" />}/>
                    <Link to={{
                        pathname: '/moviedetails',
                        state: { id: this.props.id, favsList: this.props.favsList }
                    }}>
                        <Button shape="circle" size="large" icon={<EyeOutlined />}/>
                    </Link>
                </Space>
            </Card>
        );
    }
}
export default MovieThumb;