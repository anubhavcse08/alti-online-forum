import React from 'react';
import { Container, Segment, Grid, Label} from 'semantic-ui-react';
import './selectedQueAns.css'
import LikeDislikeFvrt from './likeDislikeFvrt/likeDislikeFvrt';
import QueHeaderDesc from './QueHeaderDesc/QueHeaderDesc';
import IframeCodeReview from './iframeCodeReview/iframeCodeReview';
import UserCode from './userCard/UserCard';

class SelectedQueAns extends React.Component {
    
    render() {
        // console.log('SelectedQueAns', this.props)
        return(
            <div>
                <Container>
                    <Segment>
                        <Label as='a' color='orange' ribbon>Question Community</Label>
                        <Grid>
                            <Grid.Row >
                                <Grid.Column floated='left' width='1' >
                                    <LikeDislikeFvrt />
                                </Grid.Column>
                                <Grid.Column floated='right' width='15'>
                                    <QueHeaderDesc que={this.props.que}/>
                                    <IframeCodeReview />
                                    <UserCode />
                                    {/* <hr className="clearFloat"/> */}
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Container>
            </div>
        )
    }
}


export default SelectedQueAns