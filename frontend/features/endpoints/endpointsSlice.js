import { createSlice } from '@reduxjs/toolkit'

const endpointsSlice = createSlice({
    name: 'endpoints',
    initialState: [],
    reducers: {
        endpointAdded(state, action) {
            state.push({
                id: action.payload.id,
                text: action.payload.text,
                completed: false
            })
        },
    }
})

export const { endpointAdded } = endpointsSlice.actions
export default endpointsSlice.reducer