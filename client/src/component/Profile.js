/**
 * This component is the user profile page
 * This page includes:
 *      User Name (First and Last)
 *      User Location
 *      User Date Joined 
 *      User Profile Picture
 *      Ant Design
 */

 /** Imports **/
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
            const options = {
                "Content-Type": "application/json",
                "mode": "cors"
            }
            const response = await fetch(url);
            const jsonData = await response.json();
            this.setState({ userData: jsonData }, console.log(this.state.userData));
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        /* Ant Design Variables */
        const { Text } = Typography;

        if (this.state.userData.length > 0) {
            return (
                <Space direction="vertical">
                    {/* User Image */}
                    <div id="profileImg">
                        <Avatar size={100} src={this.state.userData[0].picture.thumbnail} alt="profile picture" />
                    </div>
                    {/* Users Full Name */}
                    <div>
                        <Space>
                            <Text level={4} strong>Full Name:</Text>
                            <Text type="secondary">{this.state.userData[0].details.firstname} {this.state.userData[0].details.lastname}</Text>
                        </Space>
                    </div>
                    {/* Users Location */}
                    <div>
                        <Space>
                            <Text level={4} strong>Location:</Text>
                            <Text type="secondary">{this.state.userData[0].details.city}, {this.state.userData[0].details.country}</Text>
                        </Space>
                    </div>
                    {/* Users Date Joined */}
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
                    {/* Load Symbol */}
                    <Spin size="large" tip="Loading..." />
                </Row>
            )
        }
    }
}

export default Profile;