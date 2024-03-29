/**
 * This is the Home component 
 * Child component of App 
 * This Includes:
 *      Search Bar function
 *      Displays Home page
 *      Ant Design Components
 */

 /** Imports **/
import imgUrl from '../img/cinema.jpg'; /** https://unsplash.com/photos/atsUqIm3wxo **/
import '../css/Home.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Space, Input, Button, Row, Col, Typography } from 'antd';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '' };
    }

    /* Search Bar Function */
    searchClick = (e) => {
        e.preventDefault();
        this.setState({ title: e.target.value })
        console.log(this.state.title);
    }


    render() {
        const { Title } = Typography;
        const { Search } = Input;


        console.log("home");
        return (
            <Row id="banner"
                style={{
                    backgroundImage: `url(${imgUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                }}>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <div className='home-browse'>
                        <Title>Movie Browser</Title>
                        {/* Search bar */}
                        <Search
                            name="title"
                            ref={this.title}
                            placeholder="Search Movie Title..."
                            onChange={this.searchClick}
                            id="homeSearch"
                        />
                        <br />
                        <br/>
                        <Space id="homeBtn">
                            {/* Using Search Bar */}
                            <Link to={{
                                pathname: '/default',
                                state: { homeSearch: this.state.title }
                            }}>
                                <Button type="primary" size="medium">Search Movies</Button>
                            </Link>
                            {/* Goes Default View which displays all movies */}
                            <Link to='/default'>
                                <Button type="primary" size="medium">All Movies</Button>
                            </Link>
                        </Space>
                    </div>
                    <a id="imgURL" href="https://unsplash.com/photos/atsUqIm3wxo">https://unsplash.com/photos/atsUqIm3wxo</a>
                </Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
            </Row>
        );
    }
}
export default Home