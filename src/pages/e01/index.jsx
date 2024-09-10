import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import { Cabecalho } from '../../componentes/cabecalho'




export default function E01() {

        const[ValorPedido, setValorPedido] = useState ()
        const[ValorCupom, setValorCupom] = useState ()
        const[VTotal, setVTotal] = useState()

    function total (){
            let x = (ValorCupom /100)*ValorPedido
            setVTotal(x)
    }

    return (
        <div className='pagina-e01'>
           <Cabecalho/>
            <div className='exercicio'>
                <div className='titulo'>
                    <div className='texto'>
                        <Link to='/'><img src='/voltar.png' alt='voltar' /></Link>
                        <h2>Exercício 01 - Cupom de desconto</h2>
                    </div>
                    <div className='faixa'/>
                </div>
                <div className='descricao'>
                    <p>Implementar um programa em <b>Javascript</b> para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. <b>O cupom diz quantos reais</b> terá de desconto.</p>
                </div>
                <div className='formulario'>
                    <div className='campos'>
                        <div className='campo'>
                            <label>Informe o valor do pedido</label>
                            <input placeholder='0' value={ValorPedido} onChange={e=> setValorPedido (e.target.value)} />
                        </div>
                        <div className='campo'>
                            <label>Informe o valor do cupom</label>
                            <input placeholder='0' value={ValorCupom} onChange={e=> setValorCupom (e.target.value)} />
                        </div>
                        <a href='#' className='executar' onClick={total} >Executar</a>
                    </div>
                    <h3 className='resultado' >Resultado: O total é R$ {VTotal} </h3>
                </div>

            </div>
        </div>
    )
}
