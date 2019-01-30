import React from 'react';
import NavHeader from './header/navHeader';
import RecentQueContent from './recentQueContent/recentQueContent';

class ContentManager extends React.Component {
    constructor() {
        super()
        this.state={
            filterQue:''
        }
    }
    onChangeHandle = (e) => {
        this.setState({
            filterQue : e.target.value
        })
    }
    render() {
        // console.log('contentManger', this.props)
        // console.log('content ', this.state.filterQue)
        return(
            <div>
                <NavHeader handler={this.onChangeHandle} />
                <RecentQueContent filter={this.state.filterQue}/>
            </div>
        )
    }
}

export default ContentManager