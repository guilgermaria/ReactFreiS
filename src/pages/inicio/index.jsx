import { Link } from 'react-router-dom'
import './index.scss'
import { Cabecalho } from '../../componentes/cabecalho'
import { Card } from '../../componentes/cards'

export default function Inicio() {

    let cards = [


        {
            'link_card': '/e01',
            'cor_card': 'laranja',
            'titulo': 'Cupom de desconto',
            'sub': 'Exercicio 1'
        }

    ]

    return (
        <div className='pagina-inicio'>
            <Cabecalho />
            <div className='menu'>
                <div className='titulo'>
                    <h2>Escolha um treino...</h2>
                </div>
                <div className='cards'>

                    {cards.map
                        (card =>
                            <Card
                                link_card={card.link_card}
                                cor_card={card.cor_card}
                                titulo={card.titulo}
                                sub={card.sub}


                            />)}



                    <Card

                        cor_card='verde'
                        titulo=' Converter Kg/gramas'
                        sub='Exercício 2'
                        link_card='/e02'


                    />

                    <Card

                        cor_card='azul'
                        titulo=' Valor por quantidade '
                        sub='Exercicio 3'
                        link_card='/e03'


                    />

                    <Card

                        cor_card='vermelho'
                        titulo=' IMC '
                        sub='Exercicio 4'
                        link_card='/e04'


                    />

                   
                    <Card

                        cor_card='roxo'
                        titulo=' Tabuada '
                        sub='Exercicio 5'
                        link_card='/e11'


                    />


                  

                </div>
            </div>
        </div>
    )
}
