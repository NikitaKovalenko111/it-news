import styles from './../../styles/news.module.sass'
import cn from 'classnames'
import NewsItem from './newsItem/NewsItem'
import { useEffect } from 'react'
import { getTopNewStories, setQuery } from '../../redux/reducers/news-reducer'
import { newsSelector, preloaderSelector } from '../../selectors/news-selectors'
import { useSelector } from 'react-redux'
import { StoryType } from '../../types'
import { useDispatch } from 'react-redux'
import Preloader from '../Preloader/Preloader'
import { pageSelector, hitsPerPageSelector, querySelector } from "./../../selectors/news-selectors"
import { useSearchParams } from 'react-router-dom'

type PropsType = {}

const News: React.FC = (props: PropsType) => {

    const dispatch = useDispatch()

    const page: number = useSelector(pageSelector)
    const hitsPerPage: number = useSelector(hitsPerPageSelector)
    const query: string = useSelector(querySelector)

    let [searchParams, setSearchParams] = useSearchParams();

    type queryStringObjectType = {
        page: string
        hitsPerPage: string
        query?: string
    }

    let queryStringObject: queryStringObjectType = {
        page: String(page + 1),
        hitsPerPage: String(hitsPerPage),
    }

    if (query)
        queryStringObject.query = query

    useEffect(() => {
        if (searchParams.has('page')) {
            dispatch(getTopNewStories(Number(searchParams.get('page')) - 1, Number(searchParams.get('hitsPerPage'))))
            if (searchParams.has('query'))
                dispatch(setQuery(searchParams.get('query') as string))
        }
        else
            dispatch(getTopNewStories())
    }, [])

    useEffect(() => {
        setSearchParams(queryStringObject)     
    }, [page, hitsPerPage, query])

    const news: StoryType[] = useSelector(newsSelector)
    const isPreloader: boolean = useSelector(preloaderSelector)

    return (
        <section className={ cn(styles.newsBlock) }>
            <main className={ cn(styles.container, 'container') }>
                { isPreloader && <Preloader /> }
                {
                    news.map((el, i) => {
                        return <NewsItem key={i} title={el.title} author={el.author} date={el.date} url={el.url} />
                    })
                }
            </main>
        </section>
    )
}

export default News