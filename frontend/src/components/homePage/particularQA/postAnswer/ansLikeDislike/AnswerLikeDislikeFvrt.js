import React from 'react';
import { Container, Divider, List } from 'semantic-ui-react';
import '../../selectedQA/likeDislikeFvrt/likeDislikeFvrt.css'

class AnswerLikeDislikeFvrt extends React.Component {
    constructor() {
        super();
        this.state={
            like : false,
            likeCount: 0,
            likeIconColor : '',
            dislike : false,
            dislikeCount:0,
            dislikeIconColor:'',
            fvrt : false,
            fvrtIconColor:''
        }
    }

    onHandleLike =() => {
        if(!this.state.dislike) {
            this.setState({
                like : !this.state.like,
                likeIconColor: this.state.like ? '':'green',
                likeCount: this.state.likeIconColor==='green'? this.state.likeCount-1 : this.state.likeCount+1
            })
        }
    }
    onHandleDislike = () => {
        if(!this.state.like) {
            this.setState({
                dislike: !this.state.dislike,
                dislikeIconColor: this.state.dislike? '':'red',
                dislikeCount : this.state.dislikeIconColor==='red'? this.state.dislikeCount-1 : this.state.dislikeCount+1
            })
        }
    }
    onHandleFvrt = () => {
        this.setState({
            fvrt: !this.state.fvrt,
            fvrtIconColor: this.state.fvrt ? '' : 'yellow'
        })
    }
    render() {
        return(
            <Container>
                <List>
                    <List.Item onClick={this.onHandleLike} icon={`thumbs up outline ${this.state.likeIconColor}`} />
                    <List.Item content={this.state.likeCount} />
                    <Divider />
                    <List.Item onClick={this.onHandleDislike} icon={`thumbs down outline ${this.state.dislikeIconColor}`} />
                    <List.Item content={this.state.dislikeCount} />
                    <Divider />
                    <List.Item onClick={this.onHandleFvrt} icon={`favorite outline ${this.state.fvrtIconColor}`} />
                </List>
            </Container>
        )
    }
}

export default AnswerLikeDislikeFvrt