import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import { Cabecalho } from '../../componentes/cabecalho';

export default function E11() {

    const [valor, setValor] = useState();
    const [tabuadas, setTabuadas] = useState([]);

    function calcularTabuada(setValor) {

      
        let tabuada = []
       

        for (let cont = 0; cont <= 10; cont++) {
            let total = valor * cont
            tabuada.push(`${valor} x ${cont} = ${total}`)

        }
        setTabuadas(tabuada)



    }

    return (
        <div className='pagina-e11'>
           <Cabecalho/>
            <div className='exercicio'>
                <div className='titulo'>
                    <div className='texto'>
                        <Link to='/'><img src='/voltar.png' alt='voltar' /></Link>
                        <h2>Exercício 11 - Tabuada</h2>
                    </div>
                    <div className='faixinha' />
                </div>
                <div className='descricao'>
                    <p>Implemente um programa em Javascript que escreva a tabuada de um número informado pelo usuário. A mensagem deve estar no formato ”A x B = X”.</p>
                </div>
                <div className='formulario'>
                    <div className='campos'>
                        <div className='campo'>
                            <label>Tabuada do:</label>
                            <input placeholder='0' onChange={e => setValor(e.target.value)} />
                        </div>

                        <button className='executar' onClick={calcularTabuada}>Executar</button>
                    </div>

                    {
                        tabuadas.map((t, index) => (
                            <h3 key={index} className='resultado'>{t}</h3>
                        ))
                    }


                </div>
            </div>
        </div>
    )
}