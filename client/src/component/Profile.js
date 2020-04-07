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
<<<<<<< HEAD

            let url = "https://comp4513asg2.herokuapp.com/api/users/1";
            console.log("here");
            const options = {
                method: "GET",
                mode: 'cors'
            };

            const resp = await fetch(url, options);
            const data = await resp.json();
            console.log(data);

=======
            const url = `/api/users/1`;
            const response = await fetch(url);
            const jsonData = await response.json();
            this.setState({ userData: jsonData }, console.log(this.state.userData));
>>>>>>> d0d4609f591ccd32d8196376ab7490f5704d5b94
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        if (this.state.userData.length > 0) {
<<<<<<< HEAD
            { console.log(this.state.userData[0]); }
=======
            { console.log(this.state.userData); }
>>>>>>> d0d4609f591ccd32d8196376ab7490f5704d5b94
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