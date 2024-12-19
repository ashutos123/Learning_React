import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'
export const store =configureStore({
    reducer:todoReducer
})//ye ek object leta hai apne andar


















