import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import About from './About.js';
import Profile from './Profile.js';
import { Layout, Menu, Modal, Drawer } from 'antd';


class HeaderApp extends React.Component {

    /**Code From Ant Design Website: https://ant.design/components/modal/ & https://codesandbox.io/s/c6jbr**/
    state = { 
        visible: false,
        vis: false
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    hideModal = () => {
        this.setState({
            visible: false,
        });
    };

    /**Code From Ant Design Website: https://ant.design/components/drawer/**/
    showDrawer = () => {
        this.setState({
            vis: true,
        });
    };

    onClose = () => {
        this.setState({
            vis: false,
        });
    };

    render() {
        const { Header } = Layout;
        return (
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <Menu theme='light' mode="horizontal">
                    <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
                    <Menu.Item key="1" onClick={this.showDrawer}>Profile</Menu.Item>
                    
                    <Menu.Item key="2" onClick={this.showModal}>About</Menu.Item>
                    <Modal
                        title="About Us"
                        visible={this.state.visible}
                        onCancel={this.hideModal}
                        closable
                        footer={null}
                    >
                        <About />
                    </Modal>
                    <Menu.Item key="3">Logout</Menu.Item>
                </Menu>
                <Drawer
                        title="User Profile"
                        placement="right"
                        onClose={this.onClose}
                        visible={this.state.vis}
                        width="medium"
                        closable
                    >
                        <Profile />
                    </Drawer>
            </Header>
        );
    }
}
export default HeaderApp;