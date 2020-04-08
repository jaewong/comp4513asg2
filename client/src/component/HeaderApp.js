/**
 * This is the Header App component
 * This outputs the header for Default View and Movie Details View
 * This header includes:
 *      Link to Home (with logo)
 *      About Modal
 *      Profile Drawer
 *      Logout Button
 *      Ant Design Component
 */

 /** Imports **/
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import About from './About.js';
import Profile from './Profile.js';
import { Layout, Menu, Modal, Drawer } from 'antd';


class HeaderApp extends React.Component {
    state = { 
        visible: false,
        vis: false
    };

    /**Code From Ant Design Website: https://ant.design/components/modal/ & https://codesandbox.io/s/c6jbr**/
    /* For Ant Desgin Modal */
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

    /* For Ant Desgin Drawer */
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
        /* Ant Design Variable */
        const { Header } = Layout;
        return (
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <Menu theme='light' mode="horizontal">
                    {/* Logo */}
                    <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
                    {/* Profile Drawer Nav Button*/}
                    <Menu.Item key="1" onClick={this.showDrawer}>Profile</Menu.Item>
                    {/* About modal Nav Button*/}
                    <Menu.Item key="2" onClick={this.showModal}>About</Menu.Item>
                    {/* About modal */}
                    <Modal
                        title="About Us"
                        visible={this.state.visible}
                        onCancel={this.hideModal}
                        closable
                        footer={null}
                    >
                        <About />
                    </Modal>
                    {/* Logout Nav Button */}
                    <Menu.Item key="3">Logout</Menu.Item>
                </Menu>
                {/* Profile Drawer */}
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