import baseStyles from './styles';
import theme from '../../styles/theme';

const Button = ({ styles = {} }) => {
  //@ts-ignore
  const themeStyles = theme.button ?? {};
  const allStyles = { ...baseStyles._base, ...themeStyles, ...styles }

  return (
    <button style={allStyles}>
      Click meee
    </button>
  );
};

export default Button;
