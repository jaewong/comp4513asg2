/**
 * This is the favorites component
 * Child function of Default View and Movie Detail View
 * This Includes:
 *      Toggle Favorites function
 *      Outputs favorites Items
 *      Ant Design Components
 */

 /** Imports **/
import React from 'react';
import FavoriteItem from './FavoriteItem.js';
import '../css/favorites.css';
import { Collapse , Empty } from 'antd';

class Favorites extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showContent: true };
    }

    /* Toggles Favorites View */
    toggleContent = () => {
        let curr = this.state.showContent;
        this.setState({ showContent: !curr });
    }

    render() {
        let content = "";

        {/* Displays Favorites */}
        if(this.props.favs.length > 0){
            if (this.state.showContent) {
                content = this.props.favs.map((p, index) => <FavoriteItem key={index} poster={p} favsList={this.props.favs} deleteFav={this.props.delete}></FavoriteItem>);
            }
        }else{ {/* Displays Empty Ant Design Component */}
            content = <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} id="empty"/>;
        }
        
        {/* Ant Design Variable */}
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