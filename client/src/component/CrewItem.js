/**
 * This is the Crew Item component
 * Child Component of Crew Tab
 * This componenet returns the individual crew list items that is displayed within the Crew Tab component
 * This includes:
 *      Crew department
 *      Crew job
 *      Crew name
 *      Ant Design Components
 */

 /** Imports **/
import React from 'react';
import { Row, Col, Divider } from 'antd';

class CrewItem extends React.Component {
    render() {
        return (
            <>
                <Row align="middle" key={this.props.key} className='tab-items'>
                    {/* Crew Department */}
                    <Col span='6' offset='2'>{this.props.crew.department}</Col>
                    {/* Crew Job */}
                    <Col span='6' offset='2'>{this.props.crew.job}</Col>
                    {/* Crew Name */}
                    <Col span='6' offset='2'>{this.props.crew.name}</Col>
                </Row>
                <Divider orientation="left" />
            </>
        );
    }
}
export default CrewItem