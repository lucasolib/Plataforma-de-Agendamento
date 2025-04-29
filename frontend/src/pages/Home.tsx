import React from 'react';
import '../../themes/pages/home.css';

function Home() {

  return (
    <main id='paginaInicial'>
      <section id='secaoIntroducao'>
        <img
          alt='Foto exibindo um hom em de cabelos brancos, com um rosto simpático e vestes azuis com desenhos coloridos. Suas mãos estão apoiadas em uma mesa
          coberta com um pano vermelho e com cartas de cigano organizadas em cima dela.'
          src='/Robson.png'
          id='fotoPerfil'
          className='animarEntrada'
        />
        <div id="introducaoArea" className='animarEntrada'>
          <h1 id='bemVindo' className='titulo'>Seja bem vindo!</h1>
          <p className='texto' id='introducao'> &nbsp;&nbsp;&nbsp; 
            Se você busca respostas, orientação espiritual ou quer enxergar com mais clareza os caminhos da sua vida, conheça o trabalho
            de Robson de Iansã, um respeitado pai de santo e especialista em jogos com baralho cigano. <br />
            &nbsp;&nbsp;&nbsp;
            Com anos de dedicação ao sagrado e uma conexão profunda com os orixás, especialmente com Iansã — senhora dos ventos, das transformações e revelações —, 
            Robson tornou-se referência para quem procura um jogo sério, verdadeiro e acolhedor. <br />
            &nbsp;&nbsp;&nbsp;
            🃏 O baralho cigano é uma ferramenta poderosa de leitura energética e espiritual, capaz de revelar situações ocultas, alertar sobre perigos e 
            apontar decisões mais favoráveis nas áreas do amor, finanças, saúde e vida espiritual. <br />
            ✨ Por que marcar uma consulta com Robson de Iansã? <br />
            - Atendimento humanizado e direto <br />
            - Consultas online ou presenciais <br />
            - Sigilo absoluto e respeito à sua fé <br />
            - Direcionamento espiritual de acordo com os guias e orixás
          </p>
        </div>
      </section>
      <article id='secaoCadastro'>
        <h1 className='titulo' id='tituloJogos'>Como funcionam os Jogos?</h1>
        <div id='conteudoCadastro'>
          <img
            alt='Cartas empilhadas uma sobre a outra e no topo delas, a primeira, está decorada com uma estrela de 5 pontas, outras estrelas menores a sua volta e um circulo'
            src='/Cartas.png' 
            id='fotoCartas'
          />
          <p className='texto' id='explicacaoJogos'> Após a sessão ser marcada, a própria plataforma irá disponibilizar uma sala virtual para você entrar. Lá estaremos
            te aguardando para responder suas perguntas e te orientar. A leitura é feita com um baralho específico e a interpretação é realizada com base nas cartas que você 
            escolherá. 
          </p>
        </div>
        <div id='cadastroAcoes'>
          <label id='textoCadastro'>
          Se interessou? Marque já uma consulta ou tire suas dúvidas
          </label>
          <button id='botaoCadastro'>Cadastre-se</button>
        </div>
      </article>
    </main>
  )
}

export default Home