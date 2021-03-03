import React, { useState } from 'react';
import { ISelectOption } from '@interfaces';
import {
  MuiAutocomplete as Autocomplete,
  MuiTextField as TextField,
} from './styled';

interface SelectFieldProps {
  id?: string;
  disabled?: boolean;
  initialValue: ISelectOption | null;
  label: string;
  options: ISelectOption[];
  onChangeValue(value: ISelectOption | null): void;
}

const SelectAutocomplete: React.FC<SelectFieldProps> = ({
  id = 'select-autocomplete',
  disabled,
  initialValue,
  label,
  options,
  onChangeValue,
}) => {
  const [value, setValue] = useState<ISelectOption | null>(initialValue);

  const handleChange = (
    _event: React.ChangeEvent<unknown>,
    changeValue: unknown
  ) => {
    const newValue = changeValue as ISelectOption | null;
    onChangeValue(newValue);
    setValue(newValue);
  };

  return (
    <Autocomplete
      id={id}
      disabled={disabled}
      value={value}
      onChange={handleChange}
      options={options}
      getOptionLabel={(data) => (data as ISelectOption).label}
      getOptionSelected={(option) =>
        (option as ISelectOption).label === value?.label
      }
      renderInput={(params) => {
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <TextField {...params} label={label} />;
      }}
    />
  );
};

export default SelectAutocomplete;
