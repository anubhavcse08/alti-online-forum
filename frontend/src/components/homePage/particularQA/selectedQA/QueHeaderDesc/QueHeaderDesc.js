import React from 'react';
import { Item } from 'semantic-ui-react';

class QueHeaderDesc extends React.Component {

    render() {
        // console.log('QueHeaderDesc', this.props)
        const que = this.props.que ? this.props.que.data : '';
        return(
            <Item.Group>
                <Item>
                    <Item.Content>
                        <Item.Header as='a'>Q: {que.QAHeading}</Item.Header>
                        <hr></hr>
                        <Item.Meta>Description {(que.dateSent)}</Item.Meta>
                        <Item.Description>{que.QADescription}</Item.Description>
                    </Item.Content>
                </Item>                           
            </Item.Group>
        )
    }
}

export default QueHeaderDesc