import React from 'react';
import {Item, Segment, Divider, Container, Icon, Label} from 'semantic-ui-react';
import {Link} from 'react-router-dom'
import './recentQueContent.css'
import * as action from '../../../actions';
import {connect} from 'react-redux';

class RecentQueContent extends React.Component {
    componentDidMount() {
        this.props.postQA();
    }

    onReloadPage = () => {
        window.parent.location = window.parent.location.href;
    }   
    render() {
        // const timestamp = Date.now(); // timestamp use for date format

        // console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(timestamp));
        console.log('Recent que: ', this.props)
        return (
            <div>
                <Container>
                    <Segment className="filterbar">
                        <Label as='a' color='teal' ribbon>Review</Label>
                        <span>Recent Questions</span>
                    </Segment>
                    <Container>
                        <Segment>
                            {this.props.postedQA ? this.props.postedQA.data
                                .sort((a, b) => ((new Date(b.dateSent) - new Date(a.dateSent))))
                                .filter(t => t.QAHeading.includes(this.props.filter))
                                .map((que, index) => {
                                return(
                                    <Item.Group key={index}>
                                        <Item>
                                            {/* <Item.Image size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' /> */}
                                            <Item.Content>
                                                <Link to={{
                                                    pathname: `/particular/que-ans/${que._id}`,
                                                    // state: { que : que }
                                                }}>
                                                    <Item.Header key={index}>Q: {que.QAHeading}</Item.Header>
                                                </Link>
                                                <Item.Extra>
                                                    <Icon color='green' name='check' /> 5 Votes &nbsp;&nbsp;
                                                    <Icon color='red' name='close' /> 3 Dislike &nbsp;&nbsp;
                                                    <Icon color='grey' name='time' /> {que.dateSent}
                                                    {/* {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(item.dateSent)} */}
                                                </Item.Extra>                    
                                            </Item.Content>
                                        </Item>
                                        <Divider section />
                                    </Item.Group>
                                )
                            }) : ''}
                        </Segment>
                    </Container>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        postedQA: state.postedQA
    }
}

export default connect(mapStateToProps,action)(RecentQueContent)