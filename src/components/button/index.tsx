import baseStyles from './styles';
import theme from '../../styles/theme';

const Button = ({ children, styles = {} }) => {
  //@ts-ignore
  const themeStyles = theme.button ?? {};
  const allStyles = { ...baseStyles._base, ...themeStyles, ...styles }

  return (
    <button style={allStyles}>
      {children}
    </button>
  );
};

export default Button;
