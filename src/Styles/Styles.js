const Styles = () => ({
    fullBody: {
        height: 'calc(100vh - 10px)',
        padding: 5,
        // margin: 5,
        backgroundColor: '#FFE1D4',
        overflow: "auto"
    },

    /** search box **/
    searchBoxRoot: {
        padding: 5,
        marginTop: 5,
        display: 'flex',
        alignItems: 'center',
        width: 400,
        backgroundColor: '#f2847c'
    },
    input: {
        flex: 1,
    },
    iconButton: {
        padding: 5,
    },
    /** search box **/

    /** Article box **/
    articleRoot: {
        display: 'flex'
    },
    content: {
        position: 'absolute',
        left: 85,
        color: 'grey',
        flex: '1 0 auto'
    },
    cover: {
        height: 62,
        width: 80
    },
    /** Article box **/

    /** ArticleDetails box **/
    articleDetailsRoot: {
        maxWidth: 'auto',
    },
    articleDetailsRootMedia: {
        height: 615,
    }
    /** ArticleDetails box **/
});

export default Styles;