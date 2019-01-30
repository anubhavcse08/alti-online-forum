import React from 'react';
import {Menu, Dropdown, Input, Modal, Image} from 'semantic-ui-react';
import usermanIcon from '../../../images/usermanIcon.png'
import logo from '../../../images/AltiForumLogo.png';
import {connect} from 'react-redux';
import * as actions from '../../../actions'
import '../../navbar.css';
import './navHeader.css'
import ProfileView from './profileView/profileView';

class NavHeader extends React.Component {
    
    componentDidMount() {
        this.props.fetchUser();
        this.props.loginResponce();
    }

    render() {
        // console.log(this.state.filterQue)
        var user;
        if(this.props.auth) {
            if(this.props.auth.data !== "") {
                user = this.props.auth.data
            }
            else {
                if(this.props.mannual) {
                    user = this.props.mannual.data[0]
                }                
            }
        }
        
        let userFullName, userImage, userFullImage;
        if(user){
                userFullName = user.userFullName;
                userImage = user.userImage ? user.userImage : usermanIcon;
                userFullImage = usermanIcon;
        }
        else {
            userFullImage = usermanIcon;
            userImage = usermanIcon;
        }
        
        // console.log('NavHeader', user)
        return(
            <div>
                <Menu stackable attached='top'>
                    <Menu.Item>
                        <img src={logo} alt='AltiLogo'/>
                        <span className="altiOnlineForum"><b>&nbsp;Altimetrik Online Forum</b></span>
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search...' onChange={this.props.handler}/>
                        </Menu.Item>
                        <Menu.Item >
                            <Dropdown icon='angle down' simple>
                                <Dropdown.Menu>
                                    <Modal closeIcon trigger={
                                        <Dropdown.Item>View Profile</Dropdown.Item>
                                    }>
                                    <Modal.Content image>
                                        <Image wrapped size='medium' src={userFullImage} />                                       
                                        <Modal.Description>
                                            <ProfileView {...user} />
                                        </Modal.Description>
                                    </Modal.Content>
                                    </Modal>
                                    <Dropdown.Item>{userFullName}</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <a href="http://localhost:5000/api/logout"><Dropdown.Item >Sign Out</Dropdown.Item></a>
                                </Dropdown.Menu>
                            </Dropdown>
                            <img src={userImage} alt="user logo" />
                            {/* <img src='https://lh5.googleusercontent.com/-oyhFdCupj6o/AAAAAAAAAAI/AAAAAAAAADQ/T5X3KGT09Lc/photo.jpg?sz=50' /> */}
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        mannual: state.mannual,
    }
}

// export default NavHeader
export default connect(mapStateToProps, actions)(NavHeader)