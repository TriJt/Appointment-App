import { configureStore } from '@reduxjs/toolkit';
import { editboxSlice, serviceSlice, sidebarSlice } from './slices';
import createSagaMiddleWare from 'redux-saga';
import mySaga from './saga'


const sagaMiddleWare = createSagaMiddleWare()

const store = configureStore({
    reducer: {
        sidebar: sidebarSlice.reducer,
        editbox: editboxSlice.reducer,
        service: serviceSlice.reducer
    },
    middleware: [sagaMiddleWare]
})

sagaMiddleWare.run(mySaga)

store.dispatch({
    type: 'GET_SERVICE'
})

export default store;