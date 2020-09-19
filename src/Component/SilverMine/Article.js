import React from 'react';
import { useHistory } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styles from '../../Styles/Styles';

const Article = props => {
    const { push } = useHistory();
    const { classes, article, idx } = props;
    return (
        <Card className={classes.articleRoot}>
            <CardActionArea onClick={() => push(`/details/${idx}`)}>
                <CardContent className={classes.content}>
                    <Typography variant="subtitle2" noWrap={true}>{article.title}</Typography>
                </CardContent>
                <CardMedia
                    className={classes.cover}
                    image={article.urlToImage}
                />
            </CardActionArea>
        </Card>
    )
}

export default withStyles(styles)(Article);