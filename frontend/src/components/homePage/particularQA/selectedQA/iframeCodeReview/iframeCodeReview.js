import React from 'react';
import { Segment } from 'semantic-ui-react';

const IframeCodeReview = () =>{
    return(
        <Segment inverted stacked>
            <p> One of the common ways to use the Mock Function is by passing it directly as an argument to the function you are testing. 
                This allows you to run your test subject, then assert how the mock was called and with what arguments:
                One of the common ways to use the Mock Function is by passing it directly as an argument to 
                the function you are testing. This allows you to run your test subject, 
                then assert how the mock was called and with what arguments:
            </p>
            <br/>
            <p> As the name suggests getting the derived state from props is used when 
                the state is dependent on props, hence whenever the props are changed the state has to be kept in sync.
                This method is invoked after the constructor and is expected to return an object to update 
                the state of the component. If null is returned then, nothing is changed in the state.
                The method getDerivedStateFromProps is static, hence it has no access to this. 
                This method has access to the current state and props. 
                Hence, if the state is dependent on props then the state can be updated here. 
            </p>
        </Segment>
    )
}

export default IframeCodeReview