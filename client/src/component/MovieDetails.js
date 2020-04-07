import React from "react";
import Ratings from './Ratings.js';
import { Row, Col, Button, Typography, Modal, Card, Space, Descriptions, Tag, Divider} from 'antd';

class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movieData: [], loaded: false, showModal: false };
    }

    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    hideModal = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const { Title } = Typography;
        const { Meta } = Card;

        console.log(this.props.movieData.id);
        const imgUrl = `https://image.tmdb.org/t/p/w185/${this.props.movieData.poster}`;
        let companies, countries, keywords, genres = "";
        if (this.props.movieData.production.companies) {
            companies = this.props.movieData.production.companies.map((company, key) => {
                return <Tag color="magenta" key={key} id="company">{company.name}</Tag>;
            })
        } else { companies = <div>No company information available!</div>; }

        if (this.props.movieData.production.countries) {
            countries = this.props.movieData.production.countries.map((country, key) => {
                return <Tag color="magenta" key={key} id="country">{country.name}</Tag>;
            })
        } else { countries = <div>No country information available!</div>; }

        if (this.props.movieData.details.keywords) {
            keywords = this.props.movieData.details.keywords.map((keyword, key) => {
                return < Tag color="magenta" key={key} id="keyword">#{keyword.name}</Tag>;
            })
        } else { keywords = <div>No keywords available!</div> }

        if (this.props.movieData.details.genres) {
            genres = this.props.movieData.details.genres.map((genre, key) => {
                return <Tag color="magenta" key={key} id="genre">{genre.name}</Tag>;
            })
        } else { genres = <div>No genre information available!</div> }

        return (
            <Row id="details">
                <Modal 
                    title="Poster"
                    visible={this.state.visible}
                    onCancel={this.hideModal}
                    closable
                    footer={null}
                >
                    <img src={imgUrl} id="modalPoster"/>
                </Modal>

                <Col flex="2" className="detailsCol" id="poster">
                    <Title>{this.props.movieData.title}</Title>
                    <Card 
                        id="poster"
                        hoverable
                        cover={<img src={imgUrl} />}
                        onClick={this.showModal}
                        style={{width: 400}}
                    >
                        <Meta title={this.props.movieData.tagline} />
                        <div>{this.props.movieData.runtime} mins</div>
                    </Card>
                </Col>
                <Col flex="3" id="detailsD">
                    <Button onClick={this.addFav} type="primary">Add To Favorites</Button>
                    <Space id="details-details" direction="vertical">
                        <div>
                            It was released in {this.props.movieData.release_date} and had a revenue of ${this.props.movieData.revenue}.
                            <Divider orientation="left">
                                <Space>
                                    <Button type="dashed" href={"https://www.themoviedb.org/movie/" + this.props.movieData.tmdb_id}>TMDB</Button> 
                                    <Button type="dashed" href={"https://www.imdb.com/title" + this.props.movieData.imdb_id}>IMDB</Button>
                                </Space>
                            </Divider>
                        </div>
                        <div id='details-overview'>
                            {this.props.movieData.details.overview}
                        </div>
                        
                        <Descriptions column={1} bordered>
                            <Descriptions.Item label="Popularity">{this.props.movieData.ratings.popularity}</Descriptions.Item>
                            <Descriptions.Item label="Average Rating"><Ratings rating={this.props.movieData.ratings.average} /> </Descriptions.Item>
                            <Descriptions.Item label="Rating Count">{this.props.movieData.ratings.count}</Descriptions.Item>
                        </Descriptions>
                    </Space>

                    <Space id="tags" direction="vertical">
                        <Title level={4}>Companies</Title>
                        <div id="details-companies">
                            {companies}
                        </div>

                        <Title level={4}>Countries</Title>
                        <div id="details-countries">
                            {countries}
                        </div>

                        <Title level={4}>Keywords</Title>
                        <div id="details-keywords">
                            {keywords}
                        </div>

                        <Title level={4}>Genre</Title>
                        <div id="details-genres">
                            {genres}
                        </div>
                    </Space>
                </Col>
            </Row >
        );
    }

    addFav = () => {
        this.props.addFav(this.props.movieData); // change BACK
    }

}
export default MovieDetails;