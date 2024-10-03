
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function UnitCardCondensed({ unit, onClick }) {
    return (
      <Card onClick={onClick} sx={{cursor: 'pointer', maxWidth: "100%", margin: "none", textAlign: 'center', borderRadius: 7}} variant='outlined'>
        <CardContent>
          <Grid container spacing={2} columns={15}>
          <Grid item xs={3}> 
              <Typography gutterBottom variant="h5" component="div">
              {unit.serial_number}
              </Typography>
            </Grid>
            <Grid item xs={2}> 
              <Typography gutterBottom variant="h5" component="div">
                {unit.make}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography gutterBottom variant="h5" component="div">
                {unit.model}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h5" >
                 Faults:{unit.fault_count}
              </Typography>
            </Grid>
            <Grid item xs={3}>  
              <Typography variant="h5" >
                {unit.owner}
              </Typography>
            </Grid>
            <Grid item xs={2}> 
              <Typography variant="h5" >
                {unit.unit_type}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
  