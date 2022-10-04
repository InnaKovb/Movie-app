import './Loader.scss'

function Loader ({isLoading , loaderColor}) {
    const styling = {
            content: `''`,
            width: '50px',
            height: '50px',
            border: '7px solid #dddddd',
            borderTopColor: `${loaderColor}`,
            borderRadius: '50%',
        }
    
    if (isLoading) {
        return  (
            <div className="spinner__container">
                <div className="spinner__loading" style={styling}></div>
            </div>
        )
    } 
}

export default Loader;