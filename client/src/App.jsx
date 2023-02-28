import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardRepo from './components/CardRepo'
import { Grid } from '@mui/material';
import SearchBar from './components/SearchBar';


const BoxWrapper = styled(Box)(({ theme }) => ({
  margin: 'auto',
  marginTop: '10px',
  width: '80%'
  
}));


function App() {

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <BoxWrapper>

        <SearchBar />
        
        <Grid container spacing={4}>
          <CardRepo />
          <CardRepo />
          <CardRepo />
        </Grid>

     </BoxWrapper>

    </Box>

  
  );
}

export default App;
