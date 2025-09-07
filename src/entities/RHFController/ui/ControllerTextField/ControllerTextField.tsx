import {
  type FieldPath,
  type FieldValues,
  useController,
  type UseControllerProps,
} from 'react-hook-form';

import { type ITextFieldProps, PasswordTextField, TextField } from 'shared/ui';

type TOmitTextFieldProps = Omit<
  ITextFieldProps,
  'name' | 'disabled' | 'value' | 'ref' | 'onChange' | 'onBlur'
>;

interface IControllerTextFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TTransformedValues = TFieldValues,
> extends UseControllerProps<TFieldValues, TName, TTransformedValues> {
  textFieldProps: TOmitTextFieldProps;
  passwordField?: boolean;
}

export const ControllerTextField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TTransformedValues = TFieldValues,
>(
  props: IControllerTextFieldProps<TFieldValues, TName, TTransformedValues>,
) => {
  const {
    control,
    name,
    rules,
    defaultValue,
    shouldUnregister,
    disabled,
    textFieldProps,
    passwordField,
  } = props;

  const {
    field,
    fieldState: { error },
    formState: { disabled: formStateDisabled },
  } = useController({
    control,
    name,
    rules,
    disabled,
    defaultValue,
    shouldUnregister,
  });

  if (passwordField) {
    return (
      <PasswordTextField
        {...textFieldProps}
        name={name}
        value={field.value}
        disabled={formStateDisabled}
        ref={field.ref}
        error={!!error}
        helperText={error?.message}
        onChange={field.onChange}
        onBlur={field.onBlur}
      />
    );
  }

  return (
    <TextField
      {...textFieldProps}
      name={name}
      value={field.value}
      disabled={formStateDisabled}
      ref={field.ref}
      error={!!error}
      helperText={error?.message}
      onChange={field.onChange}
      onBlur={field.onBlur}
    />
  );
};
