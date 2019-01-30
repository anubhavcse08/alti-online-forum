import React,{ Component } from 'react';
import NavHeader from '../header/navHeader';
import {Grid, Container, Segment} from 'semantic-ui-react';
import {connect} from 'react-redux';
import * as action from '../../../actions';
import './particularQueAns.css'
import RecentQueContent from '../recentQueContent/recentQueContent';
import SelectedQueAns from './selectedQA/selectedQueAns';
import PostAnswer from './postAnswer/PostAnswer';
import TextareaPostAns from './textareaPostAns/textareaPostAns';

class ParticularQueAns extends Component {
    constructor() {
        super()
        this.state={
            filterQue:''
        }
    }

    componentDidMount() {
        this.props.particularQA(this.props.match.params.id);
    }

    onChangeHandle = (e) => {
        this.setState({
            filterQue : e.target.value
        })
    }
    onReloadPage = () => {
        window.parent.location = window.parent.location.href;
    } 
    
    render() {
        console.log('particular : ', this.props.parQA)
        return (
            <div>
                <NavHeader handler={this.onChangeHandle}/>
                <Container as="con">
                    <Segment >
                        <Grid>
                            <Grid.Row >
                                <Grid.Column floated='left' computer={11} tablet={10} mobile={16}>
                                    <SelectedQueAns que={this.props.parQA}/>
                                    <PostAnswer ans={this.props.parQA}/>
                                    <TextareaPostAns que={this.props}/>
                                </Grid.Column>
                                <Grid.Column floated='right' computer={5} tablet={6} only="computer tablet">
                                    <div onClick={this.onReloadPage}>
                                        <RecentQueContent filter={this.state.filterQue} />
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Container>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        parQA: state.partiQueAns
    }
}

// export default ParticularQueAns
export default connect(mapStateToProps, action)(ParticularQueAns)