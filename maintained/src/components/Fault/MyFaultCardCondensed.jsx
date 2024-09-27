import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; // Correct import

export default function myFaultCard({ fault }) {
  return (
    <Card sx={{ maxWidth: "90%", margin: "none", textAlign: 'center', borderRadius: 7}} variant='outlined'>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6}> {/* Change 'size' to 'item xs' */}
            <Typography gutterBottom variant="h5" component="div">
              {fault.make} {fault.model}
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary' }}>
              {fault.serial_number}
            </Typography>
            <Typography variant='h6'>
              Severity: {fault.severity}
            </Typography>
          </Grid>
          <Grid item xs={6}> {/* Change 'size' to 'item xs' */}
            <Typography variant="h5" >
              {fault.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {fault.description}
            </Typography>
            <CardActions sx={{justifyContent: "center"}}>
              <Button size="small">Open</Button>
              <Button size="small">Remove from my list</Button>
            </CardActions>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
