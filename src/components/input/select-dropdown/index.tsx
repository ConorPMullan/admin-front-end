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
  options: ISelectOption[];
  selectedOption?: ISelectOption;
  onChange(event: React.ChangeEvent<{ value: unknown }>): void;
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  id,
  disabled,
  label,
  options,
  selectedOption,
  onChange,
}) => {
  return (
    <FormControl variant={disabled ? 'filled' : 'outlined'}>
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select
        id={id}
        disabled={disabled}
        labelId={`${id}-label`}
        value={selectedOption}
        onChange={onChange}
        label={label}
      >
        {options.map((option) => (
          <MenuItem value={option.value}>{option.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectDropdown;
