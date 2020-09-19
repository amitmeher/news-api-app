import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import styles from '../../Styles/Styles';

import { useSelector, useDispatch } from 'react-redux';
import { setQueries } from '../../Store/reducers/Queries';

const SearchBox = props => {
    const { classes } = props;

    const dispatch = useDispatch();
    const { queries } = useSelector(state => state);

    const [search, setSearch] = useState('');

    const handleSearch = value => dispatch(setQueries({ q: value }));

    return (
        <>
            <Paper className={classes.searchBoxRoot}>
                <InputBase
                    className={classes.input}
                    value={search || queries?.q}
                    placeholder="Search"
                    onChange={event => setSearch(event.target.value)}
                />
                <IconButton className={classes.iconButton} aria-label="search">
                    <SearchIcon onClick={() => handleSearch(search)} />
                </IconButton>
            </Paper>
        </>
    );
}

export default withStyles(styles)(SearchBox);