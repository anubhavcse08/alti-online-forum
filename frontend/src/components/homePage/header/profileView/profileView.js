import React from 'react'
import { Header, Image } from 'semantic-ui-react';

class ProfileView extends React.Component {
    render() {
        // console.log(this.props)
        return(
            <div>
                <Header>{this.props.userFullName}</Header>
                <p>{this.props.userEmail}</p>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </div>
        )
    }
}

export default ProfileView