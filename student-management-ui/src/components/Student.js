import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';

import Button from '@mui/material/Button';

export default function BasicTextFields() {
  const paperStyle = {
    padding: '10px 20px',
    width: 'auto',
    margin: '20px auto'
  }
  const [name, setName] = React.useState('')
  const [address, setAddress] = React.useState('')
  const handleClick = (e) => {
    e.preventDefault()
    const student = { name, address }
    console.log(student)
    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student)
    }).then(() => {
      console.log("New student added")
    })
  }

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "inherit" }}>Add Student</h1>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '40ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Name" variant="outlined" value={name}
            onChange={(e) => setName(e.target.value)} />
          <br />
          <TextField id="outlined-basic" label="Address" variant="outlined" value={address}
            onChange={(e) => setAddress(e.target.value)} />
          <br />
          <Button variant="contained" style={{ width: "15ch" }} onClick={handleClick}>Submit</Button>
        </Box>
      </Paper>
    </Container>
  );
}
