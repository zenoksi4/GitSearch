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

const card = (
    <>
    <CardContent >
      <Typography sx={{overflow: 'hidden', textOverflow: 'ellipsis'}}  variant="h5" component="div">
        Name12312312312312312312312312313123
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Stars: 1233
      </Typography>
      <Typography variant="body2">
        latest updates: 1212312312
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </>
)

const CardRepo = () => {
    return (
        <Grid item xs={12} sm={6} md={4} sx={{ minWidth: 200 }}>
        <StyledCard variant="outlined">{card}</StyledCard>
       </Grid>
      
    )
}

export default CardRepo;