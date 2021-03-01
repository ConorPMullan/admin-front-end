import React, { useState } from 'react';
import {
  MuiCloseIcon as CloseIcon,
  MuiIconButton as IconButton,
  MuiInputAdornment as InputAdornment,
  MuiInputBase as InputBase,
  MuiPaper as Paper,
  MuiSearchIcon as SearchIcon,
} from './styled';

interface InputProps {
  onChangeValue(value?: string): void;
  initialValue?: string;
}

const TextSearch: React.FC<InputProps> = ({ onChangeValue, initialValue }) => {
  const [value, setValue] = useState<string>(initialValue || '');

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);

    const returnValue = newValue === '' ? undefined : newValue;
    onChangeValue(returnValue);
  };

  const handleClearClick = () => {
    setValue('');
    onChangeValue(undefined);
  };

  return (
    <Paper>
      <InputBase
        placeholder="Search Products"
        inputProps={{
          'aria-label': 'search products',
          'data-testid': 'text-search-input',
          maxLength: 100,
        }}
        value={value}
        onChange={handleValueChange}
        autoFocus
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
      <IconButton
        data-testid="text-search-clear"
        aria-label="clear-text"
        onClick={handleClearClick}
      >
        <CloseIcon />
      </IconButton>
    </Paper>
  );
};

export default TextSearch;
