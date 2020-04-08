import React from 'react';
// import MovieList from './MovieList.js';
import FavoriteItem from './FavoriteItem.js';
// import { findByLabelText } from '@testing-library/react';
import '../css/favorites.css';

import { Collapse , Empty } from 'antd';

class Favorites extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showContent: true };
    }

    toggleContent = () => {
        let curr = this.state.showContent;
        this.setState({ showContent: !curr });
    }

    render() {
        let content = <div></div>;

        if(this.props.favs.length > 0){
            if (this.state.showContent) {
                content = this.props.favs.map((p, index) => <FavoriteItem key={index} poster={p} favsList={this.props.favs} deleteFav={this.props.delete}></FavoriteItem>);
            }
        }else{
            content = <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} id="empty"/>;
        }
        

        const { Panel } = Collapse;

        return (
            
            <Collapse >
                <Panel header="Favorites" key="1">
                    <div id="favList">
                        {content}
                    </div >
                </Panel>
            </Collapse>
        )
    }
}

export default Favorites;