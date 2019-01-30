import React from 'react'
import './loginPopup.css'
import { Form, Message, Icon, Button,Grid, Segment } from 'semantic-ui-react';

class LoginPopup extends React.Component {

    render() {
        // console.log('Login',this.props)
      return (
            <div className='popup'>
                <div className='popup_inner'>
                    <Message attached header='Login Page' />
                    <Form className='attached fluid segment'  method="POST" action="http://localhost:5000/user_login">
                        <Form.Input label='Useremail Id' placeholder='Email Id' type='email' name="userEmail" required/>
                        <Form.Input label='Password' type='password' name="password" placeholder="Password" required/>
                        {/* <Form.Checkbox inline label='I agree to the terms and conditions' /> */}
                        <div className="bottonRight">
                            <Button inverted type="button" color='red' onClick={this.props.closePopup}>Cancel</Button>
                            <Button inverted type="submit" color='green'>Submit</Button>
                        </div>
                    </Form>
                    <Message attached='bottom' warning>
                        <Grid columns='equal'>
                            <Grid.Row >
                                <Grid.Column>
                                    <Segment className='gridRowColor'>
                                    <a href="http://localhost:5000/auth/google/user"><Icon className='size' name='google plus circle' /></a>
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment className='gridRowColor'>
                                        <Icon className='size' name='facebook' disabled />
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment className='gridRowColor'>
                                        <Icon className='size' name='globe' disabled />
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Message>
                </div>
            </div>
      );
    }
  }

export default LoginPopup