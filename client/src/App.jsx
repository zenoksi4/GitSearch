import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardRepo from './components/CardRepo'
import { Grid } from '@mui/material';
import SearchBar from './components/SearchBar';
import CircularProgress from '@mui/material/CircularProgress';
import NotFound from './components/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getRepos } from './store/repos/reposSlice';


const BoxWrapper = styled(Box)(({ theme }) => ({
  margin: 'auto',
  marginTop: '10px',
  width: '80%'
  
}));

function App() {

  const dispatch = useDispatch();
  const { repos, isLoading } = useSelector((state) => state.repos);
  const [search, setSearch] = useState("");
  useEffect(() => {
    dispatch(getRepos(search))
  }, [dispatch, search]);

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <BoxWrapper>

        <SearchBar setSearch={setSearch}/>

        {
          isLoading ?
          <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <CircularProgress />
          </Box>:

          <Grid container spacing={4}>
            {
            repos && repos.length > 0 ?
              repos.map((repo, index) => (
              
              <CardRepo 
                key={index}
                name={repo.name}
                stars={repo.stars}
                latestUpdate={repo.update_repo}
                url={repo.url}
              />

              )):
              <NotFound />
            
            }

          </Grid>
        }
     </BoxWrapper>
    </Box>

  );
}

export default App;
