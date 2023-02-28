import { Typography } from "@mui/material";

const NotFound = () => {
    return (
        <Typography 
            sx={{
            width: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            paddingTop: 5,
            textAlign: 'center',
            
            }}
            variant="h3" 
            gutterBottom
            
       >    
        REPOS IS NOT FOUND
      </Typography>
      
    )
}

export default NotFound;