import React from 'react';
import './navbar.css'
import LoginPopup from './popup/loginPopup';
import logo from '../images/AltiForumLogoBlack.PNG';
import { Menu, Icon, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import SignupPopup from './popup/signupPopup';

class Navbar extends React.Component {
    constructor() {
        super();
        this.state ={
            signPopup: false,
            loginPopup: false,
            activeItem: ''
        }
    }

    signHandlePopup = () => {
        this.setState({
            signPopup : !this.state.signPopup
        })
    }
    loginHandlePopup = () => {
        this.setState({
            loginPopup : !this.state.loginPopup
        })
    }
    render() {
        // console.log('Navbar: ', this.props)
        return (
            <div>
                <Link to={{pathname: '/'}}>
                    <Menu inverted stackable>
                        <Menu.Item>
                            <img src={logo} alt='AltiLogo'/>
                            <span className="altiOnlineForum"><b>&nbsp;Altimetrik Online Forum</b></span>
                        </Menu.Item>
                        <Menu.Menu position='right'>
                        <Menu.Item>
                            <Button type="button" onClick={this.signHandlePopup} icon><Icon name='signup'/>&nbsp;Sign up</Button>
                        </Menu.Item>
                        <Menu.Item>
                            <Button type="button" onClick={this.loginHandlePopup}><Icon name='sign in'/>Login</Button>
                        </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </Link>
                
                {this.state.signPopup ? <SignupPopup text='Close Me' closePopup={this.signHandlePopup} /> : null}
                {this.state.loginPopup ? <LoginPopup text='Close Me' closePopup={this.loginHandlePopup} /> : null}
            </div>
        )
    }
}

export default Navbar