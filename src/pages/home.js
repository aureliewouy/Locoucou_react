import React, { Component } from 'react'
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import axios from "axios";
import Shop from '../components/shop';
import {connect} from 'react-redux';
import {getShops} from "../redux/actions/dataActions";

class home extends Component {
    // state = {
    //     shops: null
    // }
    componentDidMount() {
        this.props.getShops();
        // axios.get('/shops')
        // .then((res) => {
        //     let products = [];
        //     let promises = [];
        //     // this.setState({shops: res.data});
        //     res.data.forEach(shop => {
        //         promises.push(
        //          axios.get(`/shops/${shop.shop_name}`).then((doc) =>{
        //            products.push(doc.data);
        //          })
        //          )
        //     });
            
        //     Promise.all(promises).then(() => this.setState({shops: products}));
         
        // })
        // .catch(err => console.log(err));
    }

    render() {
        const {shops, loading} = this.props.data;
        console.log(shops);
        let shopsAround = !loading ? (
            
      shops.map((shop) => <Shop key={Math.random()} shop={shop}/>)
        ) : (<p>Loadding...</p>);

        return (
            <Grid container>
                <h1>Shop names</h1>
                <Grid item sm={12} xs={12}>
                    {shopsAround}
                </Grid>
            </Grid>
        );
    }
}

home.propTypes = {
    getShops: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    data: state.data
})

export default connect(mapStateToProps, {getShops})(home);