import React from 'react';
import { Avatar, Typography, Space, Spin, Row } from 'antd';


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            userData: {}
        }
    }

    async componentDidMount() {
        try {

            const url = "https://comp4513asg2.herokuapp.com/api/users/1";

            //const url = "/api/brief";
            const options = {
                "Content-Type": "application/json",
                "mode": "cors"
            }

            const response = await fetch(url, options);
            const jsonData = await response.json({});
            console.log(jsonData);
            // localStorage.setItem("movies", JSON.stringify(jsonData));
            this.setState({ userData: jsonData });

        } catch (error) {
            console.error(error);
        }
    }

    render() {

        const { Text } = Typography;

        if (this.state.userData.length > 0) {
            { console.log(this.state.userData[0]); }
            { console.log(this.state.userData.email) }
            return (
                <Space direction="vertical">
                    <div id="profileImg">
                        <Avatar size={100} src={this.state.userData[0].picture.thumbnail} alt="profile picture" />
                    </div>
                    <div>
                        <Space>
                            <Text level={4} strong>Full Name:</Text>
                            <Text type="secondary">{this.state.userData[0].details.firstname} {this.state.userData[0].details.lastname}</Text>
                        </Space>
                    </div>
                    <div>
                        <Space>
                            <Text level={4} strong>Location:</Text>
                            <Text type="secondary">{this.state.userData[0].details.city}, {this.state.userData[0].details.country}</Text>
                        </Space>
                    </div>
                    <div>
                        <Space>
                            <Text level={4} strong>Date Joined:</Text>
                            <Text type="secondary">{this.state.userData[0].membership.date_joined}</Text>
                        </Space>
                    </div>
                </Space>
            )
        }
        else {
            return (
                <Row justify="center" align="middle" className="load">
                    <Spin size="large" tip="Loading..." />
                </Row>
            )
        }
    }

}

export default Profile;