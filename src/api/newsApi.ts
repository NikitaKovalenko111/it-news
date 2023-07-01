import axios from "axios"
import { StoryType } from "../types"

interface gtnsAPIResponseType {
    status: number
    data: {
        status: string
        hits: StoryType[]
        nbHits: number
        hitsPerPage: number
        nbPages: number
    }
}

const axiosInstance = axios.create({
    baseURL: 'http://hn.algolia.com/api/v1/',
})

export const getTopNewStoriesAPI = (query: string = '', page: number = 0, hitsPerPage: number = 20): Promise<gtnsAPIResponseType> => axiosInstance.get(`search?tags=story&query=${query}&page=${page}&hitsPerPage=${hitsPerPage}`).then(res => res.data)