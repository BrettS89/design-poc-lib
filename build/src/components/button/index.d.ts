import React from 'react';
interface Props extends React.PropsWithChildren {
    styles?: Record<string, any>;
    disabled?: boolean;
}
declare const Button: React.FC<Props>;
export default Button;
