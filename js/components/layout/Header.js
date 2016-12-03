import React from 'react';
import Icon from '../Misc/Icon';
import { IndexLink, Link } from 'react-router';


class Header extends React.Component {
    render() {
        return (
        <nav>
        <h3><Icon /><span class='lite-blue-bold'>{this.props.appName.toUpperCase()}</span> Single Page Application</h3>
            <div class="row">
                 <IndexLink to='/' class='button' activeClassName="button-primary">Home</IndexLink>&nbsp;&nbsp;
                  <Link to='/test' class='button' activeClassName="button-primary" >Test</Link>&nbsp;&nbsp;
                 <Link to='/404' class='button' >404</Link>&nbsp;&nbsp;
            </div>
            <hr />
        </nav>
        )
    }
}

export default Header;