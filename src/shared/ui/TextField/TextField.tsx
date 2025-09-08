import cn from 'classnames';
import {
  forwardRef,
  type InputHTMLAttributes,
  memo,
  type ReactNode,
  useId,
  useRef,
  type MouseEvent as ReactMouseEvent,
} from 'react';

import { Typography } from 'shared/ui';

import styles from './TextField.module.scss';

export interface ITextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  endAdornment?: ReactNode;
  inputClassName?: string;
  error?: boolean;
  helperText?: string;
}

const TextFieldComponent = forwardRef<HTMLInputElement, ITextFieldProps>(
  (props, ref) => {
    const {
      label,
      className,
      endAdornment = undefined,
      inputClassName,
      value,
      placeholder,
      error,
      helperText,
      disabled,
      ...otherInputProps
    } = props;

    const id = useId();
    const inputRef = useRef<HTMLInputElement>(null);

    const inputId = `input-${id}`;
    const labelId = `${inputId}-label`;

    const handleClickWrapper = (
      event: ReactMouseEvent<HTMLDivElement, MouseEvent>,
    ) => {
      const target = event.target as HTMLElement;
      const isEndAdornmentClick = target.closest('.text-field-end-adornment');

      if (!isEndAdornmentClick && inputRef.current) {
        inputRef.current.focus();
      }
    };

    return (
      <div className={cn(styles.wrapper, {}, [className])}>
        <div
          className={cn(
            styles.inputWrapper,
            {
              [`${styles.error}`]: error,
              [`${styles.disabled}`]: disabled,
            },
            [],
          )}
          onClick={handleClickWrapper}
        >
          <input
            {...otherInputProps}
            className={cn(styles.input, {}, [inputClassName])}
            id={inputId}
            value={value}
            placeholder={placeholder ? `${placeholder}` : ' '}
            ref={(instance) => {
              inputRef.current = instance;

              if (typeof ref === 'function') {
                ref(instance);
              } else if (ref) {
                ref.current = instance;
              }
            }}
            disabled={disabled}
          />
          <label
            className={cn(styles.label)}
            htmlFor={inputId}
            id={labelId}
          >
            {label}
          </label>
          {endAdornment && (
            <div className="text-field-end-adornment">{endAdornment}</div>
          )}
        </div>

        {helperText && (
          <Typography className={styles.helperText}>{helperText}</Typography>
        )}
      </div>
    );
  },
);

export const TextField = memo(TextFieldComponent);
