import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { Controller, useFormContext } from "react-hook-form";

const MuiSelect = (props) => {
  const { label, name, options } = props;

  return (
    <FormControl fullWidth={true}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Select id={name} {...props}>
        {options.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const FormSelect = (props) => {
  const { control } = useFormContext();
  const { name, label } = props;
  return (
    <React.Fragment>
      <Controller
        as={MuiSelect}
        control={control}
        name={name}
        label={label}
        defaultValue=""
        {...props}
      />
    </React.Fragment>
  );
};

export default FormSelect;
