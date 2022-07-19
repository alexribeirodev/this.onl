import { configureStore } from '@reduxjs/toolkit'

import loggerMiddleware from './middleware/logger'
import monitoredReducer from './enhancers/monitorReducer'
import endpointsSlice from '../features/endpoints/endpointsSlice'

export const store = configureStore({
    reducer: {
        endpoints: endpointsSlice,
    },
    middleware: [loggerMiddleware,],
    enhancers: [monitoredReducer,]
})