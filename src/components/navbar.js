import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { PropTypes } from 'prop-types';
import {connect} from "react-redux";


class Navbar extends Component {
    render() {
        const {authenticated} = this.props;
        return (
            <AppBar>
                <Toolbar>
                    {authenticated ? (
                        <Fragment>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit"component={Link} to='/profil'>Profil</Button>
                    <Button color="inherit"component={Link} to='/myshop'>My shop</Button>
                        </Fragment>
                    ) : (
                    <Fragment>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit"component={Link} to='/login'>Login</Button>
                    <Button color="inherit"component={Link} to='/signup_shop'>Signup</Button>
                    </Fragment>
                    )}
                </Toolbar>
            </AppBar>
        )
    }
}
Navbar.propTypes = {
    authenticated: PropTypes.bool.isRequired
}
const mapStateToProps = state => ({
    authenticated: state.user.authenticated
});
export default connect(mapStateToProps)(Navbar)
