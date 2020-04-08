/**
 * This is the Cast Item component
 * Child Component of Cast Tab
 * This componenet returns the individual cast list items that is displayed within the Cast Tab component
 * This includes:
 *      Cast Character
 *      Cast Name
 *      Button directing to CastView
 *      Ant Design Components
 */

 /** Imports **/
import React from 'react';
import { Row, Col, Button, Divider } from 'antd';

class CastItem extends React.Component {
    /** Onclick function which sends cast id to view function to display CastView **/
    castView = () => {
        console.log(this.props.cast.id + "id in cast item");
        this.props.view(this.props.cast.id);
    }

    render() {
        return (
            <>
                <Row align="middle" key={this.key} className='tab-items'>
                    {/* Cast character */}
                    <Col span='6' offset='2'>{this.props.cast.character}</Col>
                    {/* Cast name */}
                    <Col span='6' offset='2'>{this.props.cast.name}</Col>
                    {/* CastView button with onClick event */}
                    <Col span='6' offset='2'><Button onClick={this.castView}>View</Button></Col>
                </Row>
                <Divider orientation="left" className="divider"/>
            </>
        );
    }
}
export default CastItem