import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import {Link} from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

//Redux
import {connect} from "react-redux";
import {signupUser} from "../redux/actions/userAction";

const styles = {
    form: {
        textAlign: 'center'
    },
    button : {
        marginTop : 20,
        position: 'relative'
    },
    progress : {
        position: 'absolute'
    }
};


class signup extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            nickname:'',
            errors: {}
        }
    };
    componentWillReceiveProps(nextProps){
        if (nextProps.UI.errors){
            this.setState({errors: nextProps.UI.errors})
        }
        
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const newUserData = {
            email: this.state.email,
            password: this.state.password,
            nickname: this.state.nickname,
            shop: 'true'
        }
        this.props.signupUser(newUserData, this.props.history)
    };
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    render() {
        const {classes, UI: {loading}} = this.props;
        const {errors} = this.state;
        return (
            <Grid container className={classes.form}>
                <Grid item sm/>
                <Grid item sm>
                   <Typography variant="h2">
                    Sign up
                   </Typography>
                   <form noValidate onSubmit={this.handleSubmit}>
                        <TextField id="email" name="email" type="email" 
                        label="Email" helperText={errors.email}
                        error={errors.email ? true : false} value={this.state.email} 
                        onChange={this.handleChange} fullWidth/>
                        <TextField id="password" name="password" type="password" 
                        label="Password" helperText={errors.password}
                        error={errors.password ? true : false} value={this.state.password} 
                        onChange={this.handleChange} fullWidth/>
                        <TextField id="nickname" name="nickname" type="text" 
                        label="Username" helperText={errors.nickname}
                        error={errors.nickname ? true : false} value={this.state.nickname} 
                        onChange={this.handleChange} fullWidth/>     
                        {errors.error && (
                            <Typography variant="body2">{errors.error}</Typography>
                        )}
                        <Button type="submit" variant="contained"
                        color="primary" className={classes.button}
                        disabled={loading}>
                            Sign up
                            {loading && (
                                <CircularProgress size={30} className={classes.progress}/>
                            )}
                        </Button>
                        <br/>
                        <small>Already have an account ? Login <Link to="/login">here</Link></small>
                   </form>
                </Grid>
                <Grid item sm/>
            </Grid>
        )
    }
}
signup.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired,
    signupUser: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
});
const mapActionToProps = {
    signupUser
}
export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(signup));

