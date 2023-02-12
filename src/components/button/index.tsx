import React from 'react';
import styled from '@emotion/styled'
import _ from 'lodash';
import defaultStyles from './styles';
import { addImportantToStyles } from '../../utilities';
import { useStyles } from '../../Provider';

interface Props extends React.PropsWithChildren {
  variant?: string;
  styles?: Record<string, any>;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ children, styles = {}, disabled, variant='base' }) => {
  const component = useStyles('button');
  const themeStyles = component?.styles ?? {};

  const variantDefaultStyles = defaultStyles[variant] ?? defaultStyles.base;
  const variantThemeStyles = themeStyles[variant] ?? {};
  const variantPropsStyles = styles[variant] ?? {};

  const allStyles = _.omitBy({
    ...variantDefaultStyles,
    ...variantThemeStyles,
    ...variantPropsStyles
  }, _.isNil);

  const disabledStyles = allStyles.disabled ?? {};

  const Component = styled.button({
    '&:disabled': addImportantToStyles(disabledStyles),
  });

  return (
    <Component style={allStyles} disabled={disabled}>
      {children}
    </Component>
  );
};

export default Button;
