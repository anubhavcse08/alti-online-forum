import React from 'react';
import { Container, Segment, Grid, Label} from 'semantic-ui-react';
import '../selectedQA/selectedQueAns.css';
import IframeCodeReview from '../selectedQA/iframeCodeReview/iframeCodeReview';
import UserCode from '../selectedQA/userCard/UserCard';
import AnswerHeaderDesc from './ansHeaderDesc/AnswerHeaderDesc';
import AnswerLikeDislikeFvrt from './ansLikeDislike/AnswerLikeDislikeFvrt';


class PostAnswer extends React.Component {
    render() {
        return(
            
            <div>
                {this.props.ans ? this.props.ans.data.ans.map((ans, index)=>{
                return  <Container key={index}>
                            <Segment>
                                {index === 0 ? <Label as='a' color='orange' ribbon>Answer Community</Label> : ''}
                                <p></p>
                                <Label as='a' color='teal' ribbon>Answer {index+1} :</Label>
                                <Grid>
                                    <Grid.Row >
                                        <Grid.Column floated='left' width='1'>
                                            <AnswerLikeDislikeFvrt />
                                        </Grid.Column>
                                        <Grid.Column floated='right' width='15'>
                                            <AnswerHeaderDesc  ans={ans}/>
                                            <IframeCodeReview />
                                            <UserCode />
                                            <hr className="clearFloat"/>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Segment>
                        </Container>
                }):''}
            </div>
        )
    }
}


export default PostAnswer