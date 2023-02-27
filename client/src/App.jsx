import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
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



     </BoxWrapper>

    </Box>

  
  );
}

export default App;
