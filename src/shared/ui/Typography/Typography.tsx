import cn from 'classnames';
import type { HTMLAttributes, ReactNode } from 'react';

import styles from './Typography.module.scss';

type THeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type TTypographyVariant = THeadingType | 'body1' | 'body2';

type TTypographyComponent = THeadingType | 'p' | 'span';

type TTypographyElementProps<TComponent extends TTypographyComponent> =
  TComponent extends 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    ? HTMLAttributes<HTMLHeadingElement>
    : TComponent extends 'p'
      ? HTMLAttributes<HTMLParagraphElement>
      : HTMLAttributes<HTMLSpanElement>;

type TTypographyProps<TComponent extends TTypographyComponent> = {
  className?: string;
  children: ReactNode;
  variant?: TTypographyVariant;
  component?: TComponent;
} & TTypographyElementProps<TComponent>;

export const Typography = <TComponent extends TTypographyComponent = 'p'>(
  props: TTypographyProps<TComponent>,
) => {
  const {
    className,
    children,
    variant = 'body1',
    component,
    ...otherProps
  } = props;

  const getComponent = (): TTypographyComponent => {
    if (component) return component;

    if (
      variant === 'h1' ||
      variant === 'h2' ||
      variant === 'h3' ||
      variant === 'h4' ||
      variant === 'h5' ||
      variant === 'h6'
    ) {
      return variant as TTypographyComponent;
    }

    return 'p';
  };

  const Component = getComponent();

  return (
    <Component
      className={cn(styles.wrapper, styles[variant], className)}
      {...otherProps}
    >
      {children}
    </Component>
  );
};
