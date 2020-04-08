/**
 * This is the cast view component
 * Child component of Default View
 * This component includes:
 *      Fetching from moviedb API from passed cast ID 
 *      Close button to close Cast View
 *      Displays cast information from fetch JSON
 *      Ant Design Components
 */

 /** Imports **/
import React from 'react';
import '../css/CastView.css';
import { Row, Col, Typography, Button, Descriptions, Space, Divider, Spin } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

class CastView extends React.Component {

    constructor(props) {
        super(props);
        this.state = { castMember: {}, loaded: false }
        this.state.id = this.props.id;
    }

    /* Fetch Cast Information from themoviedb API using passed in cast ID */
    async componentDidMount() {
        try {
            this.setState({ loaded: false });
            console.log(this.state.id + " id in cast view");
            const url = `https://api.themoviedb.org/3/person/${this.state.id}?api_key=667f3dca4968c359e3471957010e6209`; // this.props.cast_id

            const response = await fetch(url);
            const jsonData = await response.json();

            this.setState({ castMember: jsonData, loaded: true });


        } catch (error) {
            console.error(error);
        }
    }

    /* Close Cast View button */
    close = () => {
        this.props.close();
    }

    /* Display Cast Information */
    render() {
        /* Ant Design Variables */
        const { Title } = Typography;

        if (this.state.loaded) {
            console.log(this.state.castMember.id + " cast member in cast view");

            let birthday, biography, placeOfBirth, image = "";
            const imgUrl = `https://image.tmdb.org/t/p/w342${this.state.castMember.profile_path}`;
            const imdbLink = `https://www.imdb.com/name/${this.state.castMember.imdb_id}`;

            if (this.state.castMember.birthday) { birthday = this.state.castMember.birthday } else { birthday = "No birthday information available." }
            if (this.state.castMember.biography) { biography = this.state.castMember.biography } else { biography = "No biography information available." }
            if (this.state.castMember.place_of_birth) { placeOfBirth = this.state.castMember.place_of_birth } else { placeOfBirth = "No place of birth information available." }
            if (this.state.castMember.profile_path) { image = <img id="cast-image" src={imgUrl} /> } else (image = <i className="fas fa-user-times fa-7x"  ></i>)

            console.log(this.state.castMember);

            return (
                <Row id="cast-view">
                    <Col flex="2" id="cast-view-photo">
                        {/* Cast Name */}
                        <Title>{this.state.castMember.name}</Title>
                        {/* Cast Image */}
                        <figure>
                            {image}
                        </figure>
                    </Col>
                    <Col flex="3" id="cast-view-info">
                        <Space direction="vertical">
                            {/* Cast Bio */}
                            <div id="biography">{biography}</div>
                            <Descriptions column={1} bordered>
                                {/* Cast Birthday */}
                                <Descriptions.Item label="Birthday"> {birthday}</Descriptions.Item>
                                {/* Cast Birth Place */}
                                <Descriptions.Item label="Birth Place">{placeOfBirth}</Descriptions.Item>
                            </Descriptions>
                             {/* Cast IMDB Link */}
                            <Divider orientation="left">
                                <Button type="dashed" href={imdbLink}>IMDB</Button>
                            </Divider>
                        </Space>
                    </Col>
                    {/* Close castview button */}
                    <Button onClick={this.close} size="small" shape="circle" type="primary" icon={<CloseOutlined />} danger />
                </Row>
            )
        } else {
            return (
                <Row justify="center" align="middle">
                    {/* Loading logo when loading API */}
                    <Spin size="large" tip="Loading..." />
                </Row>
            );
        }
    }
}
export default CastView;
