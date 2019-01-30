import React from 'react';
import userLogo from '../../../../../images/usermanIcon.png';
import { Card, Image, Icon } from 'semantic-ui-react';

class UserCode extends React.Component {
    render() {
        return(
            <Card>
                <Card.Content>
                    <Image floated='right' size='mini' src={userLogo} />
                    <Card.Header>Anubhav kumar</Card.Header>
                    <Card.Meta>akumar102@altimetrik.com</Card.Meta>
                    <Card.Description>
                        <Icon name='thumbs up' color="green" />5 Likes &nbsp;
                        <Icon name='thumbs down' color="red" />1 Dislikes &nbsp;
                        <Icon name='star' color="yellow" />2 Faves
                    </Card.Description>
                </Card.Content>
            </Card>
        )
    }
}

export default UserCode