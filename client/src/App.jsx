import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardRepo from './components/CardRepo'
import { Grid } from '@mui/material';
import SearchBar from './components/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPlanes } from './store/repos/reposSlice';


const BoxWrapper = styled(Box)(({ theme }) => ({
  margin: 'auto',
  marginTop: '10px',
  width: '80%'
  
}));


function App() {

  const dispatch = useDispatch();
  const { repos, isLoading } = useSelector((state) => state.repos);

  useEffect(() => {
    dispatch(getPlanes())
    console.log(repos);
  }, [dispatch]);

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <BoxWrapper>

        <SearchBar />
        
        <Grid container spacing={4}>
          {
          repos && repos.map((repo) => (
          
            <CardRepo 
              name={repo.name}
              stars={repo.stars}
              latestUpdate={repo.update_repo}
              url={repo.url}
            />

            ))}
        </Grid>

     </BoxWrapper>

    </Box>

  
  );
}

export default App;
