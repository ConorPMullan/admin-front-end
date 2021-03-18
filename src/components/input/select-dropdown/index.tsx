import React from 'react';
import { ISelectOption } from '@interfaces';
import {
  MuiFormControl as FormControl,
  MuiInputLabel as InputLabel,
  MuiMenuItem as MenuItem,
  MuiSelect as Select,
} from './styled';

interface SelectDropdownProps {
  id: string;
  disabled?: boolean;
  label: string;
  defaultValue?: string;
  options?: ISelectOption[];
  onChange(event: React.ChangeEvent<{ value: unknown }>): void;
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  id,
  defaultValue = '',
  disabled,
  label,
  options,
  onChange,
}) => {
  return (
    <FormControl variant={disabled ? 'filled' : 'outlined'}>
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select
        id={id}
        defaultValue={defaultValue}
        disabled={disabled}
        labelId={`${id}-label`}
        onChange={onChange}
        label={label}
      >
        {options &&
          options.map((option) => (
            <MenuItem value={option.value}>{option.label}</MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default SelectDropdown;
