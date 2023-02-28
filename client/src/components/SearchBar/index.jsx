import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRepos } from '../../store/repos/reposSlice';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2),
      width: '100%',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',

    },
  }));



const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch()

  useEffect(() => {
    const timeOutId = setTimeout(() => dispatch(getRepos(search)), 1000);
    return () => clearTimeout(timeOutId);
  }, [search]);

    return (
        <AppBar sx={{ borderRadius: '10px', marginBottom: 3 }} position="static">
        <Toolbar >
          <Search >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              onChange={(e) => {setSearch(e.target.value)}}
              placeholder="Search repo..."
              inputProps= {{ 'aria-label': 'search' }}
            />
          </Search>

        </Toolbar>
      </AppBar>
      
    )
}

export default SearchBar;