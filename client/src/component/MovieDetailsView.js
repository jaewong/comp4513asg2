import React from 'react';
import MovieDetails from './MovieDetails';
import HeaderApp from './HeaderApp.js';
import DetailTabs from './DetailTabs.js';
import Favorites from './Favorites.js';
import CastView from './CastView.js';
import "../css/MovieDetails.css";
import { Link } from 'react-router-dom';
import { Row, Col, Layout, Button, Spin } from 'antd';

class MovieDetailsView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.location.state.id,
            loaded: false,
            showCast: false
        };
        this.state.favs = this.props.location.state.favsList;
        this.state.addFavs = this.props.location.state.addToFavs;
        this.state.movieData = [];
        this.state.castMember = "";
    }

    async componentDidMount() {
        try {
            const url = `https://comp4513asg2.herokuapp.com/api/movies/${this.props.location.state.id}`;

            //const url = "/api/brief";
            const options = {
                "Content-Type": "application/json",
                "mode": "cors"
            }

            const response = await fetch(url, options);
            const jsonData = await response.json({});
            console.log(jsonData);
            this.setState({ movieData: jsonData[0], loaded: true }, console.log(this.state.movieData));

        } catch (error) {
            console.error(error);
        }
    }

    addToFav = (link) => {
        let value = false;
        console.log(link);
        for (let c of this.state.favs) {
            if (c.poster === link.poster) {
                value = true;
            }
        }

        if (value === false) {
            const data = this.state.favs;
            data.push(link);
            this.setState({ favorites: data });
        }
    }

    deleteFav = (link) => {
        const fav = this.state.favs;
        for (let c = 0; c < fav.length; c++) {
            if (fav[c].poster === link.poster) {
                fav.splice(c, 1);
            }
        }

        this.setState({ favs: fav });
    }

    castViewOn = (cast) => {
        this.setState({ showCast: false });
        console.log("in details view castview on");
        console.log(cast);
        this.setState({ castMember: cast, showCast: true });
    }

    castViewOff = () => {
        if (this.state.showCast) {
            this.setState({ showCast: false });
        }
    }

    render() {
        let component = "";
        console.log(this.state.movies)

        const { Content, Footer } = Layout;

        if (!this.state.showCast) {
            component = <MovieDetails movieData={this.state.movieData} addFav={this.addToFav} />;
        } else { component = <CastView id={this.state.castMember} close={this.castViewOff} />; }


        if (this.state.loaded) {
            return (
                <Layout className="layout">
                    <HeaderApp />
                    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                        <Favorites favs={this.state.favs} delete={this.deleteFav} />
                        <div id="close" style={{ textAlign: 'right' }}>
                            <Link to='./default'>
                                <Button type="primary" danger>Close</Button>
                            </Link>
                        </div>
                        <Row id="movie-details">
                            <Col flex="3">{component}</Col>
                            <Col flex="2"><DetailTabs movieData={this.state.movieData} toggle={this.castViewOn} /></Col>
                        </Row>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>COMP 4513 Assignment 2 ©2020 Created by Leris Arandia, Jamie Wong, Natnael Beshawered</Footer>
                </Layout>
            );
        }
        else {
            return (
                <Layout className="layout">
                    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                        <HeaderApp />
                        <Favorites favs={this.state.favs} delete={this.deleteFav} />
                        <div id="close" style={{ textAlign: 'right' }}>
                            <Link to='./default'>
                                <Button type="primary" danger>Close</Button>
                            </Link>
                        </div>
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
export default MovieDetailsView;
