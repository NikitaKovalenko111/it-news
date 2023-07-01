import logo from './../../logo.svg'
import Search from './../Search/Search'
import styles from './../../styles/header.module.sass'
import cn from 'classnames'
import { Space } from 'antd'
import { useEffect, useRef, useState } from 'react'

type PropsType = {}

const Wrapper: React.FC<PropsType> = (): JSX.Element => {
    const body = document.documentElement
    const wrapperRef = useRef<HTMLDivElement>(null)
    const [scrollTop, setScrollTop] = useState(body.scrollTop)

    const scrollTopChanger = setInterval(() => {      
            if (scrollTop !== body.scrollTop)
                setScrollTop(body.scrollTop)
    }, 100)

    useEffect(() => {    
        if (scrollTop >= 150 && !wrapperRef.current?.classList.contains('wrapper_fixed'))
            wrapperRef.current?.classList.add('wrapper_fixed')      
        else if (scrollTop < 150 && wrapperRef.current?.classList.contains('wrapper_fixed'))
            wrapperRef.current.classList.remove('wrapper_fixed')

        return () => {
            clearInterval(scrollTopChanger)
        }
    }, [scrollTop])

    return (
        <div className='wrapper' ref={wrapperRef}>
            <Space direction='vertical' size="middle" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '10px'
            }}>
            <header className={cn(styles.header)}>
                <main className={cn(styles.container, 'container')}>
                <div className={cn(styles.logo)}>
                    <img src={ logo } alt="logo" width='80px' height='80px' />
                </div>
                <div className={cn(styles.title)}>
                    <span>it-news</span>
                </div>
                </main>
            </header>
            <Search />
            </Space>
        </div>
    )
}

export default Wrapper