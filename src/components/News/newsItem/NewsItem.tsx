import cn from 'classnames'
import styles from './../../../styles/newsItem.module.sass'
import { Url } from 'url'

type PropsType = {
    title: string
    author: string
    date: string
    url: string
}

const NewsItem: React.FC<PropsType> = ({ title, author, date, url }): JSX.Element => {
    return (
        <article className={cn(styles.newsItem)}>
            <a href={url} className={cn(styles.storyText)}>{title}</a>
            <div className={cn(styles.storyInfo)}>
                <p className={cn(styles.storyAuthor)}>by: <span>{author}</span></p>
                <p className={cn(styles.storyDate)}>{date}</p>
            </div>
        </article>
    )
}

export default NewsItem