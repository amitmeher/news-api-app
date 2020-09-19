import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ReactPaginate from 'react-paginate';
import styles from '../../Styles/Styles';
import Article from './Article';
import SearchBox from './SearchBox';

import { useSelector, useDispatch } from 'react-redux';
import { setQueries } from '../../Store/reducers/Queries';
import { fetchAtricles } from '../../Store/reducers/Atricles';

const ArticleList = props => {
    const { classes } = props;

    const dispatch = useDispatch();
    const { queries, article } = useSelector(state => state);

    // loading display and error display part has not been taken care but configured with redux
    const { loading, articleDetails, error } = article;
    const { articles, pageCount } = articleDetails;

    const fetchData = () => dispatch(fetchAtricles(queries));

    const handlePageChange = ({ selected }) => dispatch(setQueries({ page: selected + 1 }));

    useEffect(fetchData, [queries]);

    return (
        <>
            <div className={classes.fullBody}>
                <Grid container direction='column' spacing={1}>
                    {articles?.map((article, idx) =>
                        <Grid item>
                            <Article article={article} idx={idx} />
                        </Grid>
                    )}
                </Grid>
                <Grid container direction='row' justify='space-between' >
                    <Grid item>
                        <SearchBox />
                    </Grid>
                    <Grid item>
                        <ReactPaginate
                            previousLabel={"prev"}
                            nextLabel={"next"}
                            initialPage={queries?.page - 1}
                            pageCount={pageCount}
                            onPageChange={handlePageChange}
                            containerClassName={"pagination"}
                            subContainerClassName={"pages pagination"}
                            activeClassName={"active"} />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default withStyles(styles)(ArticleList);