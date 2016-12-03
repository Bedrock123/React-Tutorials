import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6
import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  appName: state.appName
});

class Layout extends React.Component {
    render() {
        const containerStyle = {
            marginTop: "5%"
        };
        var path = this.props.location.pathname;
        var segment = path.split('/')[1] || 'root';
        return (
        <div class="container  animated fadeIn" style={containerStyle}>
            <div class="row">
                <div class="twelve  columns">
                    <Header appName={this.props.appName}/> 
                       <ReactCSSTransitionGroup transitionName="pageSlider"
                        transitionEnterTimeout={600} transitionLeaveTimeout={600}>
                         {React.cloneElement(this.props.children, { key: segment})}
                        </ReactCSSTransitionGroup>
                            
                </div>
                </div>
            <hr />
            <Footer />
        </div>
        )
    }
};

export default connect(mapStateToProps, () => ({}))(Layout);