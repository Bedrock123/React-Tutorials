import React from 'react';
import { connect } from 'react-redux';
import Banner from './Banner'
import MainView from './MainView';
import agent from '../../agent';


const mapStateToProps = state => ({
    appName: state.appName

});

const mapDispatchToProps = dispatch => ({
    onLoad: payload =>
        dispatch({type: 'HOME_PAGE_LOADED', payload })
});

class Home extends React.Component {
    componentWillMount() {
        this.props.onLoad(agent.Articles.all());
    }
    render() {
        return (
            <div>
                <Banner appName={this.props.appName} />
                <div className='container animated'>
                    <div className='row'>
                        <MainView />

                        <div className='three columns'>
                            <div className='sidebar'>
                                <p>Popular Tags</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);