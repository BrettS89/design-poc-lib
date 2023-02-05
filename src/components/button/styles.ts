import styles from '../../styles';

export default {
  _base: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    // end of remove default styles
    backgroundColor: styles.lightGray,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: styles.borderRadius,
    fontSize: styles.fontSize,
  },
  disabled: {
    color: 'red!important',
  },
}
