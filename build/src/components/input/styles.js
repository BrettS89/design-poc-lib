import styles from '../../styles';
export default {
    base: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 8,
        border: 'none',
        // outline: '2px solid lightgray',
        outlineStyle: 'solid',
        outlineColor: 'lightgray',
        outlineWidth: 2,
        fontSize: 16,
        placeholder: {
            fontSize: 16,
        },
        focus: {
            outline: "2px solid ".concat(styles.main, "!important"),
        },
    },
    error: {
        outline: '2px solid red',
        focus: {
            outline: "2px solid ".concat(styles.error, "!important"),
        },
    },
};
