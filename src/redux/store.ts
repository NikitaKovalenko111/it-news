import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import News from './reducers/news-reducer'
import rootSaga from './saga'
import { RootState } from '../types'

const reducer = {
    news: News
}

const preloadedState = {}

const reduxSaga = createSagaMiddleware()
const middleware = [reduxSaga]

export const store = configureStore({
    reducer,
    middleware,
    preloadedState
})

export const state: RootState = store.getState()

reduxSaga.run(rootSaga)