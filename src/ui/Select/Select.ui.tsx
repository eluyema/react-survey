import React, { useRef, useState } from "react";
import { SelectComponent, SelectOptionComponent } from "./Select.styles";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  name?: string;
  disabled?: boolean;
  value: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function Select({ options, value, name, placeholder, disabled, onChange }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectOpen = () => {
    console.log(true);
    setIsOpen(true);
  };

  const handleSelectClose = () => {
    console.log(false);
    setIsOpen(false);
  };

  return (
    <SelectComponent
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={onChange}
      name={name}
      onFocus={handleSelectOpen}
      onBlur={handleSelectClose}
      opened={isOpen}
    >
      {placeholder && (
        <SelectOptionComponent value="" disabled>
          {placeholder}
        </SelectOptionComponent>
      )}
      {options.map((option) => (
        <SelectOptionComponent key={option.value} value={option.value}>
          {option.label}
        </SelectOptionComponent>
      ))}
    </SelectComponent>
  );
}

export default Select;
