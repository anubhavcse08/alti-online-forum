import React from 'react';
import { Item } from 'semantic-ui-react';

class AnswerHeaderDesc extends React.Component {
    render() {
        console.log('Answerquestion header ',this.props)
        return(
            <Item.Group>
                <Item>
                    <Item.Content>
                        <Item.Header as='a'>{this.props.ans.ansTitle}</Item.Header>
                        <hr></hr>
                        <Item.Meta>Description</Item.Meta>
                        <Item.Description>
                            {/* <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' /> */}
                            {this.props.ans.ansDesc}
                        </Item.Description>
                    </Item.Content>
                </Item>                                    
            </Item.Group>
        )
    }
}

export default AnswerHeaderDesc