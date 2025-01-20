import s from './main.module.scss'

export default function Main() {

    const celulares = [
        {
            imagem: 'https://imgs.casasbahia.com.br/55068267/1g.jpg',
            nomeCelular: 'Smartphone Samsung Galaxy A16',
            valorAntigo: 2999.99,
            porcentagemDiminuiu: 7,
            valorAVista: 2798.89,
            valorParcelado: 279.89,
            valorPix: 2.519,
            textoAlt: 'Imagem do celular digital da samsung para venda'
        },
        {
            imagem: 'https://imgs.casasbahia.com.br/55065350/1g.jpg',
            nomeCelular: 'Smartphone Samsung Galaxy S24 5G',
            valorAntigo: 5997.78,
            porcentagemDiminuiu: 19,
            valorAVista: 4851.00,
            valorParcelado: 485.10,
            valorPix: 4395.90,
            textoAlt: 'Imagem do celular digital da samsung para venda'
        },
        {
            imagem: 'https://imgs.casasbahia.com.br/55066421/1g.jpg',
            nomeCelular: 'Smartphone Samsung Galaxy S24 5G',
            valorAntigo: 2968.90,
            porcentagemDiminuiu: 29,
            valorAVista: 2110.00,
            valorParcelado: 211.00,
            valorPix: 1899.00,
            textoAlt: 'Imagem do celular digital do motorola para venda'
        }
    ]
    
    return(
        <main className= {s.main}>
            {
                celulares.map( (item) => (

                    <section className={s.secao}>
                        
                        <img className={s.imagem} src={item.imagem} alt={item.textoAlt} />

                        <section className={s.nomeCelular}>
                            <p>{item.nomeCelular}</p>
                        </section>

                        <section className= {s.descricao}> 

                            <div className= {s.valorAntigo}>
                                <p className= {s.valorRiscado}>R${item.valorAntigo}</p>

                                <p className= {s.valorBaixado}>Baixou {item.porcentagemDiminuiu}%</p>
                            </div>

                            <p className = {s.valorAVista}>
                                R${item.valorAVista} ou em até 10x de R${item.valorParcelado} sem juros ou 
                            </p>

                            <div className= {s.valorPix}>
                                <p className= {s.valorAzul}>R$ {item.valorPix}</p>
                                <p>No pix</p>
                            </div>
                        </section>

                        <button className= {s.botao}>COMPRAR</button>
                            
                    </section>

                ))
            }
        
        </main>
    )
}