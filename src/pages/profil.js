import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import {Redirect} from 'react-router-dom';
import {Link} from "react-router-dom";
// MUI
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip"
import MuiLink from "@material-ui/core/Link";
import { Typography } from '@material-ui/core';
import EditIcon from "@material-ui/icons/Edit";
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';
// Redux
import {connect} from "react-redux";
import { logoutUser, uploadImage } from '../redux/actions/userAction';

const styles = {
    imgProf : {
        width : 300
    }
};

class profil extends Component {
    handleImageChange = (event) => {
        const image = event.target.files[0];
        const formData = new FormData();
        formData.append('image', image, image.name);
        this.props.uploadImage(formData);
    };
    handleEditPicture = () => {
        const fileInput = document.getElementById("imageInput");
        fileInput.click();
    };
    handleLogout = () => {
        this.props.logoutUser();
    }
    render() {
        const {classes, user: {
            userCredentials: {nickname, imageUrl},
            loading, 
            authenticated}} = this.props;
        let profilMarkup = !loading ? (authenticated ? (
            <Paper >
                <div>
                    <div>
                        <img className={classes.imgProf} src={imageUrl} alt="profil"/>
                        <input type="file" id="imageInput" onChange={this.handleImageChange} hidden="hidden" />
                        <Tooltip title="Edit profile picture" placement="right">
                        <IconButton onClick={this.handleEditPicture} className="button">
                            <EditIcon color="primary">

                            </EditIcon>
                        </IconButton>
                        </Tooltip>

                    </div>
                    <hr/>
                    <div>
                <MuiLink component={Link} to={`/users/${nickname}`} color="primary" variant="h5">
                    {nickname}
                </MuiLink>
                    </div>
                    <Tooltip title= "Logout" placement="right">
                        <IconButton onClick={this.handleLogout}>
                            <KeyboardReturn color="primary"/>
                        </IconButton>
                    </Tooltip>
                </div>
            </Paper>
        ) : (
            <Redirect to="/" />

        )) : (<p>loading...</p>)
        return profilMarkup;
    }
}
const mapStateToProps = (state) => ({
    user: state.user
});

profil.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    uploadImage: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
}
const mapActionToProps = {logoutUser, uploadImage}


export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(profil));
