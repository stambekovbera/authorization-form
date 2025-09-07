import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { forwardRef, memo, useState } from 'react';

import { IconButton } from 'shared/ui';

import { type ITextFieldProps, TextField } from './TextField';

interface IPasswordTextFieldProps
  extends Omit<ITextFieldProps, 'endAdornment' | 'type'> {
  className?: string;
}

const PasswordTextFieldComponent = forwardRef<
  HTMLInputElement,
  IPasswordTextFieldProps
>((props, ref) => {
  const [
    showPassword,
    setShowPassword,
  ] = useState(false);

  return (
    <TextField
      {...props}
      type={showPassword ? 'text' : 'password'}
      ref={ref}
      endAdornment={
        <IconButton onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? (
            <FontAwesomeIcon icon={faEyeSlash} />
          ) : (
            <FontAwesomeIcon icon={faEye} />
          )}
        </IconButton>
      }
    />
  );
});

export const PasswordTextField = memo(PasswordTextFieldComponent);
