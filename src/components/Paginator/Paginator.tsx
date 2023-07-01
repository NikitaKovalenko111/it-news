import { Pagination } from "antd"
import { useSelector } from "react-redux"
import { hitsPerPageSelector, nbPagesSelector, pageSelector } from "../../selectors/news-selectors"
import { useDispatch } from "react-redux"
import { getTopNewStories } from "../../redux/reducers/news-reducer"

type PropsType = {

}

const Paginator: React.FC<PropsType> = (): JSX.Element => {

    //const nbHits = useSelector(nbHitsSelector)
    const nbPages = useSelector(nbPagesSelector)
    const hitsPerPage = useSelector(hitsPerPageSelector)
    const currentPage = useSelector(pageSelector)

    const dispatch = useDispatch()

    const paginationHandleChange = (page: number, pageSize: number) => {
        dispatch(getTopNewStories(page - 1, pageSize))
    }

    return (
        <>
            <Pagination hideOnSinglePage current={currentPage + 1} onChange={paginationHandleChange} total={(nbPages as number - 1) * hitsPerPage} pageSize={hitsPerPage} />
        </>
    )
}

export default Paginator