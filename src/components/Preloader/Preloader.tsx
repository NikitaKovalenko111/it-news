import preloaderGif from './../../images/preloader.gif'

type PropsType = {}

const Preloader: React.FC<PropsType> = (): JSX.Element => {
    return (
        <div className='preloaderGif'>
            <img src={preloaderGif} alt="preloader" />
        </div>
    )
}

export default Preloader