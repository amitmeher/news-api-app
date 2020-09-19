import React from 'react';
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../Styles/Styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const ArticleDetails = ({ classes }) => {
    const { push } = useHistory();
    const { idx } = useParams();
    const { article = {} } = useSelector(state => state);
    const details = article?.articleDetails?.articles[idx];

    return (
        <Card className={classes.articleDetailsRoot}>
            <CardActionArea>
                <CardMedia
                    className={classes.articleDetailsRootMedia}
                    image={details?.urlToImage}
                    title={details?.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {details?.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {details?.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" onClick={() => push('/')} style={{ color: '#FF6666' }} >
                    Close
                </Button>
            </CardActions>
        </Card>
    );
}

export default withStyles(styles)(ArticleDetails);
