import React from 'react';
import styled from '@emotion/styled'
import baseStyles from './styles';
import theme from '../../styles/theme';

interface Props {
  placeholder?: string;
  type?: string;
  styles?: Record<string, any>;
  error?: string;
}

const Input: React.FC<Props> = ({ type, placeholder, styles={}, error }) => {
  //@ts-ignore
  const themeStyles = theme.input ?? {};
  const allStyles = { ...baseStyles._base, ...themeStyles, ...styles };
  const errorStyles = {
    ...allStyles,
    //@ts-ignore
    ...baseStyles.error,
    ...(themeStyles.error || {}),
    ...(styles.error || {}),
  }

  const Component = styled.input({
    '&::placeholder': allStyles.placeholder,
    '&:focus-within': allStyles.focus,
  });

  const ErrorComponent = styled.input({
    '&::placeholder': errorStyles.placeholder,
    '&:focus-within': errorStyles.focus,
  });

  if (error) {
    return (
      <ErrorComponent
        style={errorStyles}
        placeholder={placeholder}
        type={type}
      />
    )
  }

  return (
    <Component
      style={allStyles}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Input;
