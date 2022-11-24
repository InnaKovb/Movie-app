import empty from './images/empty.png'

export default function EmptyMessage () {

    const  wrapperStyle  = {
        margin: '20px auto',
        width: '700px',
        textAlign: 'center',
        height: '600px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#dfdfdf3d'
    }
    const btn = {
        borderRadius: '30px',
        width: '170px',
        height: '50px',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 25px',
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '25px',
        color: '#ffffff',
        backgroundColor: '#3377ff',
        margin: '0 auto',
 
    }

    const title = {
        fontSize: '25px',
        fontWeight: 'bold',
        color: '#4a4a4a',
        paddingBottom: '10px',
    }

    const text = {
        fontSize: '20px',
        color: '#686868',
        paddingBottom: '40px',
    }

      return (
            <div className="noData__wrapper" style={wrapperStyle}>
                <img className='noData__img' src={empty} alt="no data"/>
                <div className='noData__text'>
                    <div style={title}>No Data Availible!</div>
                    <div style={text}>Look like there was a problem loading from the  database.</div>
                    <a href='#' style={btn}>Reload</a>
                </div>
            </div>
        )  
    
}