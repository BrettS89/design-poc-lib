import styled from '@emotion/styled'
import baseStyles from './styles';
import theme from '../../styles/theme';
import defaultStyles from '../../styles';

const Input = ({ placeholder, type, styles={} }) => {
  //@ts-ignore
  const themeStyles = theme.input ?? {};
  const allStyles = { ...baseStyles._base, ...themeStyles, ...styles };

  const Component = styled.input({
    '&::placeholder': allStyles.placeholder,
    '&:focus-within': allStyles.focus,
  });

  return (
    <Component
      style={allStyles}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Input;
