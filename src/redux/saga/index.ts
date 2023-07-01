import { fork, all } from "redux-saga/effects";
import { watchSetTopNewStories } from "./news-saga";

function* rootSaga() {
    yield all([
        fork(watchSetTopNewStories)
    ])
}

export default rootSaga