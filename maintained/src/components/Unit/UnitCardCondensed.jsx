import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function UnitCardCondensed({ unit }) {
    return (
      <Card sx={{ maxWidth: "90%", margin: "none", textAlign: 'center', borderRadius: 7}} variant='outlined'>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={2}> {/* Change 'size' to 'item xs' */}
              <Typography gutterBottom variant="h5" component="div">
                {unit.make}
              </Typography>
            </Grid>
            <Grid item xs={2}> {/* Change 'size' to 'item xs' */}
              <Typography gutterBottom variant="h5" component="div">
                {unit.model}
              </Typography>
            </Grid>
            <Grid item xs={3}> {/* Change 'size' to 'item xs' */}
              <Typography gutterBottom variant="h5" component="div">
              {unit.serial_number}
              </Typography>
            </Grid>
            <Grid item xs={2}> {/* Change 'size' to 'item xs' */}
              <Typography variant="h5" >
                 Faults:{unit.number_of_faults}
              </Typography>
            </Grid>
            <Grid item xs={3}> {/* Change 'size' to 'item xs' */}
              <Typography variant="h5" >
                {unit.owner}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
  