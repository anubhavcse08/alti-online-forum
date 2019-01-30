import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../components/navbar';
import ContentManager from '../components/homePage/contentManager';
import ParticularQueAns from '../components/homePage/particularQA/particularQueAns';
import RecentQueContent from '../components/homePage/recentQueContent/recentQueContent';
import Swagger from '../swagger/swagger';

const Router = () => {
    return(
        <Switch>
            <Route path="/swagger" exact component={Swagger} />
            <Route path="/postedQA" exact component={RecentQueContent} />
            <Route path="/particular/que-ans/:id" exact component={ParticularQueAns} />
            <Route path="/login/content-manager" exact component={ContentManager}/>
            <Route path="/signout" exact component={Navbar}/>
            <Route path="/sign-up" exact component={Navbar}/>
            <Route path="/" exact component={Navbar}/>
        </Switch>
    )
    
}
export default Router