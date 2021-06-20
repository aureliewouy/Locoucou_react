import React, { Component } from 'react'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import CardMedia from '@material-ui/core/CardMedia';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = {
    card: {
        display:'flex'
    }
}

class Shop extends Component {
    render() {
        const {classes, shop: {shop_name, name, user_id, Email} } = this.props
        return (
            <Card>
                <CardContent>
                    <Typography variant="h5">{shop_name}</Typography>
                    <Typography variant="body1" color="textSecondary">{name}</Typography>
                    <Typography variant="body1" color="textSecondary">{user_id}</Typography>
                    <Typography variant="body2" color="textSecondary">{Email}</Typography>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(Shop);
