import { takeEvery, call, put, select } from "redux-saga/effects"
import { ActionTypesNews, setPreloader, setTopNewStories } from "../reducers/news-reducer"
import { getTopNewStoriesAPI } from "../../api/newsApi"
import { hitsPerPageSelector, pageSelector, querySelector } from "../../selectors/news-selectors"

export function* watchSetTopNewStories() {
    yield takeEvery(ActionTypesNews.GET_TOP_NEW_STORIES, workerSetTopNewStories)
}

export function* workerSetTopNewStories() {
    yield put(setPreloader(true))

    const query: string = yield select(querySelector)
    const page: number = yield select(pageSelector)
    const pageSize: number = yield select(hitsPerPageSelector)

    const { hits, hitsPerPage, nbHits, nbPages } = yield call(getTopNewStoriesAPI, query, page, pageSize) 
    yield put(setTopNewStories(hits, nbHits, hitsPerPage, nbPages))
    yield put(setPreloader(false))
}