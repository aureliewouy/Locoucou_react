import React, { Component } from 'react'
import Createshop from '../components/createshop';
import {connect} from "react-redux";
import {Provider} from "react-redux";
import store from "../redux/store";
import { PropTypes } from 'prop-types';

class myshop extends Component {
    render() {
        return (
            <Provider store={store}>
            <div>
                <h1>My shop</h1>
                <Createshop/>
            </div>
            </Provider>

        )
    }
}
const mapStateToProps = (state) => ({
    user: state.user
});
myshop.propTypes = {
    user: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(myshop);