import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'

export default function CompanyCardCondensed({ company, onClick }) {
    return (
        <Card onClick={onClick} sx={{ cursor: 'pointer', maxWidth: "90%", margin: "none", textAlign: 'center', borderRadius: 7}} variant='outlined'>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={3}> 
              <Typography gutterBottom variant="h5" component="div">
                {company.company_name}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography gutterBottom variant="h5" component="div">
              Phone: {company.phone}
              </Typography>
            </Grid>
            <Grid item xs={3}> 
              <Typography gutterBottom variant="h5" component="div">
              Email: {company.email}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h5" >
                 Contact: {company.contact_name}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

    );
}
