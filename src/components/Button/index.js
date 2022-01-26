import { Button } from "@material-ui/core";
import Box from '@mui/material/Box';


export function ButtonLogin({label,placeholder}) {
    return (
      <Box
        component="div"
        sx={{
          '& > :not(style)': { marginLeft: '26%', marginTop: 8, width: 165 },
        }} 
        >
          <Button variant="contained" color="primary">Log In</Button>
      </Box>
    );
  }
