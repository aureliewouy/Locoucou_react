import React, { Component } from 'react'
import {connect} from "react-redux";

class Createshop extends Component {
    render() {
        const {classes, user: {
            userCredentials: {nickname, imageUrl},
            loading, 
            authenticated}} = this.props;
        return (
          <h2>
              Create a shop
          </h2>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(Createshop);