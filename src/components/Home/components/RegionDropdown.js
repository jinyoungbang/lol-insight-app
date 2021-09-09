
import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const RegionDropdown = () => {
  const classes = useStyles();
  const [region, setRegion] = useState("NA");
  const handleChange = (event) => {
    setRegion(event.target.value);
  };

  return (
    <FormControl className={classes.margin}>
      <InputLabel id="demo-simple-select-outlined-label">Region</InputLabel>
      <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={region}
          onChange={handleChange}
      >
        <MenuItem value={'NA'}>NA</MenuItem>
        <MenuItem value={'KR'}>KR</MenuItem>
        <MenuItem value={'EU'}>EU</MenuItem>
      </Select>
    </FormControl>
  );
};

export default RegionDropdown;
