import * as React from 'react';
import { TextField } from "@material-ui/core";
import Box from '@mui/material/Box';
  

export function InputField({label,placeholder}) {
    return (
      <Box
        component="div"
        sx={{
          '& > :not(style)': { m: 1, width: '363px'},
        }}
        noValidate
        autoComplete="off"
      >
        <TextField fullWidth id="fullWidth" placeholder={placeholder} variant="outlined" />
      </Box>
    );
  }

  export function InputAnotherField({label,placeholder}) {
    return (
      <Box
        component="div"
        sx={{
          '& > :not(style)': { m: 1, width: '363px' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField fullWidth id="fullWidth" placeholder={placeholder} variant="outlined" />
      </Box>
    );
  }
  
