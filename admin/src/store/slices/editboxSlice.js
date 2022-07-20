import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isShow: false,
    mode: 'create', // create add update delete
    currentData: {}
}

const editboxSlice = createSlice({
    name: 'editbox',
    initialState,
    reducers: {
        openEditbox: (state, action) => {
            state.isShow = true;
            state.mode = action.payload.mode
            state.currentData = action.payload.currentData || {}
        },
        closeEditbox: (state, action) => {
            state.isShow = false;
            state.currentData = {}
        }
    }
})

export const { openEditbox, closeEditbox } = editboxSlice.actions;
export default editboxSlice