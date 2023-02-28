import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import reposService from '../services/reposService';

export const getPlanes = createAsyncThunk('GET_REPOS', async (_, thunkAPI) => {
    try {
        return await reposService.getRepos();

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

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