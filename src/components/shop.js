import React, { Component } from 'react'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography";

import withStyles from '@material-ui/core/styles/withStyles';


const styles = {
    card: {
        display:'flex'
    }
}

class Shop extends Component {
    render() {
        const {classes, shop: {shop_name} } = this.props;
        
        return (
            <Card>
                <CardContent>
                    <Typography variant="h5">{shop_name}</Typography>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(Shop);
