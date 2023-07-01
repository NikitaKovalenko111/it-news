import { store } from "./redux/store"

export interface StoryType {
    author: string
    title: string
    description: string
    url: string
    date: string
    content: string
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch