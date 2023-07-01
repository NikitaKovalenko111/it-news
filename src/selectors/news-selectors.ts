import { RootState } from "../types";

export const newsSelector = (state: RootState) => state.news.news

export const querySelector = (state: RootState) => state.news.currentQuery

export const nbHitsSelector = (state: RootState) => state.news.nbHits

export const hitsPerPageSelector = (state: RootState) => state.news.hitsPerPage

export const pageSelector = (state: RootState) => state.news.currentPage

export const nbPagesSelector = (state: RootState) => state.news.nbPages

export const preloaderSelector = (state: RootState) => state.news.isPreloader