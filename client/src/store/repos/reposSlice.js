import { createSlice } from '@reduxjs/toolkit';


const reposSlice = createSlice({
    name: 'repos',
    initialState: {
        repos: null,
        isError: false,
        isLoading: false,
        message: ''
    }
});

export default reposSlice.reducer;