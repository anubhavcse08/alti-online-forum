import React from 'react';
import { Container, Segment, Grid, Label, Button, Header, Icon, Modal, Form, Radio} from 'semantic-ui-react';
import './textareaPostAns.css'
class TextareaPostAns extends React.Component {
    constructor() {
        super()
        this.state ={
            value: 'Answer'
        }
    }
    handleChange = (e, { value }) => this.setState({ value: value })
    render() {  
        // console.log('TextareaPostAns', this.props.que.match.params.id)   
        return(
            <div>
                <Container>
                    <Segment className="clearFloat">
                        <Label as='a' color='orange' ribbon>Post Que/Ans Community</Label>
                        <Grid>
                            <Grid.Row >
                                <Grid.Column floated='left' width='1' only='computer tablet'>
                                
                                </Grid.Column>
                                <Grid.Column floated='right' width='9'>
                                    <Modal closeIcon
                                        trigger={
                                        <Button style={{padding: 25}} positive>
                                            Ask Question || Answer<Icon name='chevron right' />
                                        </Button>}>
                                    <Segment>                                        
                                        <Modal.Description>
                                            <Header>Post <b>{this.state.value}</b></Header>
                                            <hr></hr>
                                            <Form>
                                                <Form.Field>
                                                    <Radio toggle
                                                        label='Post Question'
                                                        name='radioGroup'
                                                        value='Question'
                                                        checked={this.state.value === 'Question'}
                                                        onChange={this.handleChange}
                                                    />
                                                </Form.Field>
                                                <Form.Field>
                                                    <Radio toggle
                                                        label='Post Answer for current question'
                                                        name='radioGroup'
                                                        value='Answer'
                                                        checked={this.state.value === 'Answer'}
                                                        onChange={this.handleChange}
                                                    />
                                                </Form.Field>
                                            </Form>
                                            <br></br>
                                            {this.state.value ==='Question' ?
                                                <Form method="POST" action={`http://localhost:5000/post_que_ans`}>
                                                    <Form.Group widths='equal'>
                                                        <Form.Input
                                                            label='Question heading' 
                                                            placeholder='Enter Question Heading...' 
                                                            name="QAHeading" 
                                                            type='text' required
                                                        />
                                                    </Form.Group>
                                                    <Form.TextArea
                                                        label='Description' 
                                                        placeholder='Enter Question Description...' 
                                                        name="QADescription" 
                                                        type='text' 
                                                        autoHeight 
                                                        style={{ minHeight: 200 }} required
                                                    />
                                                    <Form.Field>
                                                        <Button positive type='submit'>
                                                            Submit Question <Icon name='chevron right' />
                                                        </Button>
                                                    </Form.Field>
                                                </Form>
                                            :
                                                <Form method="POST" action={`http://localhost:5000/post_particularQA/${this.props.que.match.params.id}`}>
                                                    <Form.Group widths='equal'>
                                                        <Form.Input
                                                            label='Title'
                                                            placeholder='Enter title...' 
                                                            name="ansTitle" 
                                                            type='text' required
                                                        />
                                                    </Form.Group>
                                                    <Form.TextArea
                                                        label='Description' 
                                                        placeholder='Enter Description...' 
                                                        name="ansDesc" 
                                                        type='text' 
                                                        autoHeight 
                                                        style={{ minHeight: 200 }} required
                                                    />
                                                    <Form.Field>
                                                        <Button positive type='submit'>
                                                            Submit Answer <Icon name='chevron right' />
                                                        </Button>
                                                    </Form.Field>
                                                </Form>
                                            }
                                        </Modal.Description>
                                        </Segment>
                                    </Modal>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Container>
            </div>
        )
    }
}

export default TextareaPostAns