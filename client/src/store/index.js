import { configureStore } from '@reduxjs/toolkit'
import reposSlice from './repos/reposSlice'


export const store = configureStore(({
    reducer: {
        repos: reposSlice
    }
}))

