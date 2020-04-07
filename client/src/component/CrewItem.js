import React from 'react';
import { Row, Col, Divider } from 'antd';

class CrewItem extends React.Component {
    render() {
        return (
            <>
                <Row align="middle" key={this.props.key} className='tab-items'>
                    <Col span='6' offset='2'>{this.props.crew.department}</Col>
                    <Col span='6' offset='2'>{this.props.crew.job}</Col>
                    <Col span='6' offset='2'>{this.props.crew.name}</Col>
                </Row>
                <Divider orientation="left" />
            </>
        );
    }
}
export default CrewItem