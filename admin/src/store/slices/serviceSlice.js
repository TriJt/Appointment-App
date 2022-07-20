import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: []
}

const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        setService(state, action) {
            state.data = action.payload
        }
    }
})


export const { setService } = serviceSlice.actions
export default serviceSlice