import React from 'react'
import {Form, Message, Icon, Button, Grid, Segment} from 'semantic-ui-react'
import './loginPopup.css'

class SignupPopup extends React.Component {
   
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <Message attached header='SignUp Page'/>
                    <Form className='attached fluid segment' method="POST" action="http://localhost:5000/user_register">
                        <Form.Group widths='equal'>
                            <Form.Input fluid label='First Name' placeholder='First Name' type='text' name='firstName' required/>
                            <Form.Input fluid label='Last Name' placeholder='Last Name' type='text' name="lastName" />
                        </Form.Group>
                        <Form.Input label='Username' placeholder='Username' name="userName" type='text' required />
                        <Form.Input label='EmailID' placeholder='Email id' ref="email_id" type='email' name="email" required />
                        <Form.Input label='Password' type='password' name="password" required />
                        {/* <Form.Checkbox inline label='I agree to the terms and conditions' /> */}
                        <div className="bottonRight">
                            <Button inverted type="button" color='red' onClick={this.props.closePopup}>Cancel</Button>
                            <Button inverted type="submit" color='green' >Submit</Button>
                        </div>
                    </Form>
                    <Message attached='bottom' warning>
                        <Grid columns='equal'>
                            <Grid.Row>
                                <Grid.Column>
                                    <Segment className='gridRowColor'>
                                        <a href="http://localhost:5000/auth/google/user"><Icon className='size' name='google plus circle' /></a>
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment className='gridRowColor'>
                                        <Icon className='size' name='facebook' disabled/>
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment className='gridRowColor'>
                                        <Icon className='size' name='globe' disabled/>
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Message>
                </div>
            </div>
        )
    }
}

export default SignupPopup