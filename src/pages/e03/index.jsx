import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import { Cabecalho } from '../../componentes/cabecalho'




export default function E01() {

       
        const[Valorpqn, setValorpqn] = useState ()
        const[Valormed, setValormed] = useState ()
        const[Valorgran, setValorgran] = useState ()
        const[VTotal, setVTotal] = useState()

    function total (){
          let x = (Valorpqn*13.50) + (Valormed*15.00) + (Valorgran*17.50)
          setVTotal(x)
    }

    return (
        <div className='pagina-e03'>
          <Cabecalho/>
            <div className='exercicio'>
                <div className='titulo'>
                    <div className='texto'>
                        <Link to='/'><img src='/voltar.png' alt='voltar' /></Link>
                        <h2>Exercício 03 - Valor total por quantidade</h2>
                    </div>
                    <div className='faixa'/>
                </div>
                <div className='descricao'>
                    <p>Implementar um programa em Javascript para calcular o total de uma venda de açaí a partir das quantidades compradas para cada tamanho: pequeno, médio e grande, <br></br> sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente</p>
                </div>
                <div className='form'>
                    <div className='campos'>
                       <div className='deitados'>
                        <div className='campo'>
                            <label>Qtd pequeno </label>
                            <input placeholder='0' value={Valorpqn} onChange={e=> setValorpqn (e.target.value)} />
                        </div>
                        <div className='campo'>
                            <label>Qtd médio</label>
                            <input placeholder='0' value={Valormed} onChange={e=> setValormed (e.target.value)} />
                        </div>
                        <div className='campo'>
                            <label>Qtd Grande </label>
                            <input placeholder='0' value={Valorgran} onChange={e=> setValorgran (e.target.value)} />
                        </div>
                        </div>

                        <a href='#' className='executar' onClick={total} >Executar</a>
                    </div>
                    <h3 className='resultado' >Resultado: O total é R$ {VTotal} </h3>
                </div>

            </div>
        </div>
    )
}
