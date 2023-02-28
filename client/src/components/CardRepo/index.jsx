import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import {     Grid } from '@mui/material';

const StyledCard = styled(Card)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[5]
    
  }));



const CardRepo = ({name, stars, latestUpdate, url}) => {
    const card = (
      <>
      <CardContent >
        <Typography sx={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}  variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant='div' sx={{ mb: 1.5 }} color="text.secondary">
          Stars: {stars}
        </Typography>
        <Typography sx={{ paddingTop: 2}} variant="body2">
          latest update: {`${new Date(latestUpdate).toUTCString()}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" target={"_blank"} href={url} >Learn More</Button>
      </CardActions>
      </>
    ) 

    return (
        <Grid item xs={12} sm={6} md={4} sx={{ minWidth: 200 }}>
        <StyledCard variant="outlined">{card}</StyledCard>
       </Grid>
      
    )
}

export default CardRepo;