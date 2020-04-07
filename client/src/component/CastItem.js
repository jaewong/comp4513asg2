import React from 'react';
import { Row, Col, Button, Divider } from 'antd';

class CastItem extends React.Component {
    castView = () => {
        console.log(this.props.cast.id + "id in cast item");
        this.props.view(this.props.cast.id);
    }

    render() {
        return (
            <>
                <Row align="middle" key={this.key} className='tab-items'>
                    <Col span='6' offset='2'>{this.props.cast.character}</Col>
                    <Col span='6' offset='2'>{this.props.cast.name}</Col>
                    <Col span='6' offset='2'><Button onClick={this.castView}>View</Button></Col>
                </Row>
                <Divider orientation="left" className="divider"/>
            </>
        );
    }
}
export default CastItem