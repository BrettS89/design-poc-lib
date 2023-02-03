import styles from '../../styles';

export default {
  _base: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
    border: 'none',
    outline: '2px solid lightgray',
    fontSize: 16,

    placeholder: {
      fontSize: 16,
    },
    focus: {
      outline: `2px solid ${styles.main}!important`,
    },
  },
};
