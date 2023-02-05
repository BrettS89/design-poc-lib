import styled from '@emotion/styled'
import baseStyles from './styles';
import theme from '../../styles/theme';

const Button = ({ children, styles = {}, disabled }) => {
  //@ts-ignore
  const themeStyles = theme.button ?? {};
  const allStyles = { ...baseStyles._base, ...themeStyles, ...styles };
  //@ts-ignore
  const disabledStyles = { ...baseStyles.disabled, ...(themeStyles.disabled || {}), ...(styles.disabled || {}) }

  const Component = styled.button({
    '&:disabled': disabledStyles,
  });

  return (
    <Component style={allStyles} disabled={disabled}>
      {children}
    </Component>
  );
};

export default Button;
