import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import { Cabecalho } from '../../componentes/cabecalho';


export default function E4() {
    const [altura, setaltura] = useState(0);
    const [peso, setpeso] = useState(0);

    const [tabuadas, setTabuadas] = useState([]);
       

    function calcularTabuada() {
        let tabuada = []

        
        


            let resultado =parseInt(peso/(altura*altura)) 
            let imc = '';
         
           
           if (resultado>17 &&resultado <18.5){
            imc='abaixo do peso'
           }
            
           if(resultado<16&& resultado>16.9){
            imc='magreza'
           }
           
           if (resultado>18.6 && resultado<24){
            imc='peso normal'
           }
           
           if (resultado> 24.2 && resultado<30 ){
            imc='acima do peso'
           }
           
           else if(resultado>30.2 ){
            imc = ' obesidade'
           }
           


           

            tabuada.push(`Altura:${altura} / Peso: ${peso} / IMC:${imc}`)
           

        setTabuadas([...tabuadas, tabuada])
    }

    return (
        <div className='pagina-e4'>
         <Cabecalho/>
            <div className='exercicio'>
                <div className='titulo'>
                    <div className='texto'>
                        <Link to='/'><img src='/voltar.png' alt='voltar' /></Link>
                        <h2>Exercício 04 - IMC</h2>
                    </div>
                    <div className='red'/>  
                    </div>
                    
               
                <div className='descricao'>
                    <p>Implemente um programa em Javascript que escreva a tabuada de um número informado pelo usuário. A mensagem deve estar no formato ”A x B = X”.</p>
                </div>
                <div className='formulario'>
                    <div className='campos'>
                    <div className='campo'>
                            <label>Altura:</label>
                            <input 
                                placeholder='0' 
                                onChange={e => setaltura(e.target.value)} 
                            />
                        <div className='campo'>
                            <label>Peso:</label>
                            <input 
                                placeholder='0' 
                                onChange={e => setpeso(e.target.value)} 
                            />
                        </div>
                      
                      

                   
                     </div>
                        
                        <button 
                            className='executar' 
                            onClick={calcularTabuada}>Executar</button>
                    </div>
                    {
                        tabuadas.map(
                            linha => <p>{linha}</p>
                        )
                    }
                </div>
                 
            </div>
        </div>
    )
}