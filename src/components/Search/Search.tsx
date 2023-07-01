import cn from 'classnames'
import styles from './../../styles/search.module.sass'
import { Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../types'
import { getTopNewStories, setQuery } from '../../redux/reducers/news-reducer'
import { hitsPerPageSelector, querySelector } from '../../selectors/news-selectors'

type PropsType = {

}

const Search: React.FC<PropsType> = (): JSX.Element => {

    const dispatch: AppDispatch = useDispatch()

    const query: string = useSelector(querySelector)
    const pageSize: number = useSelector(hitsPerPageSelector)

    const onSearch = () => {   
        dispatch(getTopNewStories(0, pageSize))
    }

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        dispatch(setQuery(e.currentTarget.value))
    }

    return (
        <section className={cn(styles.search)}>
            <main className={cn(styles.container, 'container')}>
                <div className={cn(styles.searchBlock)}>
                    <Input.Search placeholder='Query text' onChange={handleChange} value={query} onSearch={onSearch} />
                </div>
            </main>
        </section>
    )
}

export default Search