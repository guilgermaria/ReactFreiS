import { Link } from 'react-router-dom'

function Cabecalho() {
    return(

        <div className='cabecalho'>
        <div className='titulo'>
            <img src='/logo.png' alt='logo'/>
            <h1>
                React FreiS
            </h1>
        </div>
        <div className='links'>
            <Link to='/' className='link'>home</Link>
            <Link to='/sobre' className='link'>Sobre</Link>
        </div>
    </div>

    )
}
export {Cabecalho}