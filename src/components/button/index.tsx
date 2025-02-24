import React from 'react';
import clsx from 'clsx';

import styles from './button.module.scss';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button = ({ children, variant = 'primary', className }: ButtonProps) => {
  return (
    <button className={clsx(styles.button, styles[variant], className)}>{children}</button>
  );
}

export default Button;
