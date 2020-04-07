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
        const { TabPane } = Tabs;
        
        return (
            <Tabs defaultActiveKey="1" id="tabs">
                <TabPane tab="Cast" key="1" className="tab-list">
                    <Cast castData={this.props.movieData.production.cast} view={this.props.toggle} />
                    </TabPane>
                <TabPane tab="Crew" key="2" className="tab-list">
                    <Crew crewData={this.props.movieData.production.crew} />
                    </TabPane>
            </Tabs>
        );
    }
}
export default DetailTabs