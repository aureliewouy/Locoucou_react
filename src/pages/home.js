import React, { Component } from 'react'
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import Shop from '../components/shop';

class home extends Component {
    state = {
        shops: null
    }
    componentDidMount() {
        axios.get('/shops')
        .then((res) => {
            console.log(res.data);
            this.setState({shops: res.data});
        })
        .catch(err => console.log(err));
    }
    render() {
        let shopsAround = this.state.shops ? (
            this.state.shops.map((shop) => <Shop key={shop.shop_name} shop={shop}/>)
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

export default home
