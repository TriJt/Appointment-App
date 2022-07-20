import { call, put, takeLatest } from 'redux-saga/effects';
import {
    addSmallService,
    createService as createServiceFunction,
    deleteService as deleteServiceFunction,
    deleteSmallService as deleteSmallServiceFunction,
    getService
} from '../../model/Service';
import { setService } from '../slices/serviceSlice';


// service
function* fetchService() {
    try {
        const services = yield call(getService);
        yield put(setService(services.list));

    } catch (err) {
        console.log(err)
    }
}

function* createService(action) {
    try {
        const res = yield call(createServiceFunction, action.payload);
        if (res.success) {
            yield put({
                type: 'GET_SERVICE'
            });
        }
    } catch (err) {
        console.log(err)
    }
}

function* addService(action) {
    try {
        const res = yield call(addSmallService, action.payload);
        if (res.success) {
            yield put({
                type: 'GET_SERVICE'
            });
        }
    } catch (err) {
        console.log(err)
    }
}

function* deleteSmallService(action) {
    try {
        const res = yield call(deleteSmallServiceFunction, action.payload);
        if (res.success)
            yield put({ type: 'GET_SERVICE' })


    } catch (err) {
        console.log(err)
    }
}

function* deleteService(action) {
    try {
        const res = yield call(deleteServiceFunction, action.payload);
        if (res.success)
            yield put({ type: 'GET_SERVICE' })


    } catch (err) {
        console.log(err)
    }
}


function* rootSaga() {
    yield takeLatest('GET_SERVICE', fetchService)
    yield takeLatest('DELETE_SMALL_SERVICE', deleteSmallService)
    yield takeLatest('CREATE_SERVICE', createService)
    yield takeLatest('ADD_SERVICE', addService)
    yield takeLatest('DELETE_SERVICE', deleteService)
}

export default rootSaga;