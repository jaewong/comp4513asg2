/**
 * This is the details tab component
 * Child component of the MovieDetailsView
 * This includes:
 *      Toggle CastTab and CrewTab functions
 *      Displays the cast or crew tabs
 *      Close button to exit out of Movie Details View
 *      Ant Design Components
 */

 /** Imports **/
import React from 'react';
import Crew from './CrewTab';
import Cast from './CastTab';
import { Tabs } from 'antd';

class DetailTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieData: []
        };
    }

    render() {
        /* Ant Design Variables */
        const { TabPane } = Tabs;

        return (
            <Tabs defaultActiveKey="1" id="tabs">
                {/* Cast View Tab */}
                <TabPane tab="Cast" key="1" className="tab-list">
                    <Cast castData={this.props.movieData.production.cast} view={this.props.toggle} />
                </TabPane>
                {/* Crew View Tab */}
                <TabPane tab="Crew" key="2" className="tab-list">
                    <Crew crewData={this.props.movieData.production.crew} />
                </TabPane>
            </Tabs>
        );
    }
}
export default DetailTabs