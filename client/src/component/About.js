import React from 'react';
import { Typography, Space, Button } from 'antd';

class About extends React.Component {
    render() {
        const { Title } = Typography;
        return (
            <div>
                <Space direction="vertical">
                    <div>
                        <Title level={4}>Who are We?</Title>
                        <div>Leris Arandia, Jamie Wong, & Natnael Beshawered </div>
                    </div>
                    <div>
                        <Title level={4}>What is this?</Title>
<<<<<<< HEAD
                        <div>A COMP 4513 Assignment using React, Node.js, Ant Design, and MongoDB. It's essentially a movie database website. Using this, one can browse movies, filter through them, and find out more information about each one. Information for cast and crew can be found as well. Enjoy your stay.</div>
                    </div>
                    <div>
                        <Title level={4}>Github?</Title>
                        <div> Yes. <a href="https://github.com/jaewong/comp4513asg2">https://github.com/jaewong/comp4513asg2</a> (It's public ..)</div>
=======
                        <div>A COMP 4513 Assignment using React, Node and MongoDB. It's essentially a movie database website. Using this, one can browse movies, filter through them, and find out more information about each one. Information for cast and crew can be found as well. Enjoy your stay.</div>
                    </div>
                    <div>
                        <Title level={4}>Github?</Title>
                        <div> Yes. <a href="https://github.com/jaewong/comp4513asg2">https://github.com/jaewong/comp4513asg2</a> (It's private ..)</div>
>>>>>>> e567c881e4e7434c3ac2e59785d76f0010efc219
                    </div>
                    <div>
                        <Title level={4}>What was used?</Title>
                        <div>
<<<<<<< HEAD
                            VS Code, Brackets, GitHub, Git, MongoDB, Node.js, Express, React, Ant Design, Heroku, Netlify
                        </div>
                    </div>
                    <div>
                        <Title level={4}>API's</Title>
                        <Space direction="vertical" id="apiBtn">
                            <Button size="middle" href="https://comp4513asg2.herokuapp.com/api/movies">All Movies</Button>
                            <Button size="middle" href="https://comp4513asg2.herokuapp.com/api/movies/257">Single Movie</Button>
                            <Button size="middle" href="https://comp4513asg2.herokuapp.com/api/brief">Brief Movies</Button>
                            <Button size="middle" ref="https://comp4513asg2.herokuapp.com/api/find/title/dead">All Movies With "dead"</Button>
                            <Button size="middle" href="https://comp4513asg2.herokuapp.com/api/find/year/1990/1997">All Movies Between 1990 and 1997</Button>
                        </Space>
                    </div>
=======
                            VS Code, Brackets, GitHub, MongoDB, Node, Express, React
                        </div>
                    </div>
                    <div><Button href="https://comp4513asg2.herokuapp.com/api/movies">Get All Movies</Button></div>
                    <div><Button href="https://comp4513asg2.herokuapp.com/api/movies/257">Get A Movie</Button></div>
                    <div><Button href="https://comp4513asg2.herokuapp.com/api/brief">Get Brief Movies</Button></div>
                    <div><Button href="https://comp4513asg2.herokuapp.com/api/find/title/dead">Get All Movies With "dead"</Button></div>
                    <div><Button href="https://comp4513asg2.herokuapp.com/api/find/year/1990/1997">Get All Movies Between 1990 and 1997</Button></div>
>>>>>>> e567c881e4e7434c3ac2e59785d76f0010efc219
                </Space>
            </div>
        )
    }
}
export default About;