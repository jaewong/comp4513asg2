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

    close = () => {
        this.props.close();
    }

    render() {
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
                        <Title>{this.state.castMember.name}</Title>
                        <figure>
                            {image}
                        </figure>
                    </Col>
                    <Col flex="3" id="cast-view-info">
                        <Space direction="vertical">
                            <div id="biography">{biography}</div>
                            <Descriptions column={1} bordered>
                                <Descriptions.Item label="Birthday"> {birthday}</Descriptions.Item>
                                <Descriptions.Item label="Birth Place">{placeOfBirth}</Descriptions.Item>
                            </Descriptions>
                            <Divider orientation="left">
                                <Button type="dashed" href={imdbLink}>IMDB</Button>
                            </Divider>
                        </Space>
                    </Col>
                    <Button onClick={this.close} size="small" shape="circle" type="primary" icon={<CloseOutlined />} danger />
                </Row>
            )
        } else {
            return (
                <Row justify="center" align="middle">
                    <Spin size="large" tip="Loading..." />
                </Row>
            );
        }
    }
}
export default CastView;
