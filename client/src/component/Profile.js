import React from 'react';

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

            fetch("https://comp4513asg2.herokuapp.com/api/users/1", {
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(async response => {
                    if (response.ok) {
                        this.apiError = false;
                        this.result = await response.json();
                    } else {
                        this.apiError = true;
                    }
                })
                .catch(() => (this.apiError = true))


        } catch (error) {
            console.error(error);
        }
    }

    render() {
        if (this.state.userData.length > 0) {
            { console.log(this.state.userData); }
            { console.log(this.state.userData.email) }
            return (
                <div>
                    <div>{this.state.userData[0].details.firstname} {this.state.userData[0].details.lastname}</div>
                    <div>{this.state.userData[0].details.city}, {this.state.userData[0].details.country}</div>
                    <img src={this.state.userData[0].picture.thumbnail} />
                    <div>{this.state.userData[0].membership.date_joined}</div>
                </div>
            )
        }
        else {
            return (
                <div>hi</div>
            )
        }
    }

}

export default Profile;