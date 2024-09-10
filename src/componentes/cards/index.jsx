import { Link } from 'react-router-dom'

 function Card ({link_card,cor_card,titulo,sub}) {
    return(
        <Link to={link_card} className='link'>
        <div className='card'>
            <div className={`retangulo ${cor_card}`} />
            <h3 className='titulo'>{titulo}</h3>
            <h4 className='subtitulo'>{sub}</h4>
        </div>
    </Link>
    )
}

export {Card}