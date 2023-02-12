import React from 'react';
import styled from '@emotion/styled';
import _ from 'lodash';
import defaultStyles from './styles';
import { useStyles } from '../../Provider';
import { addImportantToStyles } from '../../utilities';

interface Props {
  placeholder?: string;
  type?: string;
  styles?: Record<string, any>;
  error?: string;
}

const Input: React.FC<Props> = ({ type, placeholder, styles={}, error }) => {
  const component = useStyles('input');
  const themeStyles = component?.styles ?? {};

  const baseStyles = {
    ..._.omitBy(defaultStyles.base ?? {}, _.isNil),
    ..._.omitBy(themeStyles.base ?? {}, _.isNil),
    ..._.omitBy(styles.base ?? {}, _.isNil),
  };

  const errorStyles = {
    ..._.omitBy(baseStyles, _.isNil),
    ..._.omitBy(defaultStyles.error ?? {}, _.isNil),
    ..._.omitBy(themeStyles.error ?? {}, _.isNil),
    ..._.omitBy(styles.error ?? {}, _.isNil),
  };

  const Component = styled.input({
    '&::placeholder': addImportantToStyles(baseStyles.placeholder),
    '&:focus-within': addImportantToStyles(baseStyles.focus),
  });

  const ErrorComponent = styled.input({
    '&::placeholder': addImportantToStyles(errorStyles.placeholder),
    '&:focus-within': addImportantToStyles(errorStyles.focus),
  });

  if (error) {
    return (
      <ErrorComponent
        style={errorStyles}
        placeholder={placeholder}
        type={type}
      />
    );
  }

  return (
    <Component
      style={baseStyles}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Input;
