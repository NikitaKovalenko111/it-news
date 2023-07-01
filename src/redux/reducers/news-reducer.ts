import { AnyAction, Reducer } from "redux"
import { StoryType } from "../../types"

export enum ActionTypesNews {
    GET_TOP_NEW_STORIES = 'news/GET_TOP_NEW_STORIES',
    SET_TOP_NEW_STORIES = 'news/SET_TOP_NEW_STORIES',
    SET_QUERY = 'news/SET_QUERY',
    SET_PRELOADER = 'news/SET_PRELOADER'
}

const initialState = {
    news: [],
    currentQuery: '',
    nbHits: undefined,
    hitsPerPage: 20,
    currentPage: 0,
    nbPages: null,
    isPreloader: false
}

type initialStateType = {
    news: StoryType[]
    currentQuery: string
    nbHits: number | undefined
    hitsPerPage: number
    currentPage: number
    nbPages: number | null
    isPreloader: boolean
}

// REDUCER

const News: Reducer<initialStateType, AnyAction> = (state: initialStateType = initialState, action: AnyAction): initialStateType => {
    switch (action.type) {
        case ActionTypesNews.SET_PRELOADER:
            return { ...state, isPreloader: action.payload.isPreloader }
        case ActionTypesNews.SET_QUERY: 
            return { ...state, currentQuery: action.payload.query }
        case ActionTypesNews.GET_TOP_NEW_STORIES:
            return { ...state, hitsPerPage: action.payload.hitsPerPage, currentPage: action.payload.currentPage }

        case ActionTypesNews.SET_TOP_NEW_STORIES:    
            return { ...state, news: action.payload.stories, nbHits: action.payload.nbHits, hitsPerPage: action.payload.hitsPerPage, nbPages: action.payload.nbPages }
    
        default:
            return state
    }
}

// ACTIONS INTERFACES

export interface getTopNewStoriesType extends AnyAction {
    type: typeof ActionTypesNews.GET_TOP_NEW_STORIES,
    payload: {
        currentPage: number
        hitsPerPage: number
    }
}

export interface setTopNewStoriesType extends AnyAction {
    type: typeof ActionTypesNews.SET_TOP_NEW_STORIES,
    payload: {
        stories: StoryType[]
        nbHits: number
        hitsPerPage: number
        nbPages: number
    }
}

export interface setQueryType extends AnyAction {
    type: typeof ActionTypesNews.SET_QUERY,
    payload: {
        query: string
    }
}

export interface setPreloaderType extends AnyAction {
    type: typeof ActionTypesNews.SET_PRELOADER,
    payload: {
        isPreloader: boolean
    }
}

// ACTIONS

export const setPreloader = (isPreloader: boolean) => ({
    type: ActionTypesNews.SET_PRELOADER,
    payload: {
        isPreloader: isPreloader
    }
})

export const setQuery = (query: string): setQueryType => ({
    type: ActionTypesNews.SET_QUERY,
    payload: {
        query: query
    }
})

export const getTopNewStories = (page: number = 0, pageSize: number = 20): getTopNewStoriesType => ({
    type: ActionTypesNews.GET_TOP_NEW_STORIES,
    payload: {
        currentPage: page,
        hitsPerPage: pageSize
    }
})

export const setTopNewStories = (stories: StoryType[], nbHits: number, hitsPerPage: number, nbPages: number): setTopNewStoriesType => ({
    type: ActionTypesNews.SET_TOP_NEW_STORIES,
    payload: {
        stories: stories,
        nbHits: nbHits,
        hitsPerPage: hitsPerPage,
        nbPages: nbPages
    }
})

export default News