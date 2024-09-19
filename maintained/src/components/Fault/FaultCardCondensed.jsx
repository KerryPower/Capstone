import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function FaultCard({ fault }) {
    return (
        <Card sx={{ maxWidth: 345 }} variant='outlined'>
        <CardContent>
          <Typography gutterBottom variant="h1" component="div">
          {fault.title}
          </Typography>
          <Typography variant="h3" sx={{ color: 'text.secondary' }}>
          {fault.make} {fault.model} {fault.serial_number}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {fault.description}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Severity: {fault.severity}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
        <CardMedia
          sx={{ height: 140 }}
          image={fault.image}
          title="Fault Image"
          alt="fault.image"
        />
      </Card>
       
    );
}
