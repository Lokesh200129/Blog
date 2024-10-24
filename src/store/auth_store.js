import {configureStore} from '@reduxjs/toolkit'
import {authreducer} from '../feature/auth_slice'
const store = configureStore({
    reducer:{
        authreducer
    }
})

export default store;