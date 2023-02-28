import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import reposService from '../services/reposService';

export const getRepos = createAsyncThunk('GET_REPOS', async (search = '', thunkAPI) => {
    try {
        return await reposService.getRepos(search);

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
    },
    extraReducers: (builder) => {
        builder.addCase(getRepos.pending, (state) => {
            state.isLoading = true
        });

        builder.addCase(getRepos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.repos = action.payload.items
        });

        builder.addCase(getRepos.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.repos = null;
        });
    }
});

export default reposSlice.reducer;