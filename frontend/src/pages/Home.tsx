import React from 'react';
import '../../themes/pages/home.css';

function Home() {

  return (
    <main id='paginaInicial'>
      <section id='secaoIntroducao'>
        <img
          alt='Foto exibindo um hom em de cabelos brancos, com um rosto simpático e vestes azuis com desenhos coloridos. Suas mãos estão apoiadas em uma mesa
          coberta com um pano vermelho e com cartas de cigano organizadas em cima dela.'
          src='../public/Robson.png'
          id='fotoPerfil'
          className='animarEntrada'
        />
        <div id="introducaoArea" className='animarEntrada'>
          <h1 id='bemVindo' className='titulo'>Seja bem vindo!</h1>
          <p className='texto' id='introducao'>C"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
            Pellentesque habitant morbi tristique.

            senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, 
            lectus. Nam mattis, felis ut adipiscing."orpo.

            C"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor 
            massa. Pellentesque habitant morbi tristique.

            senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus.
            Nam mattis, felis ut adipiscing."orpo.

            C"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
            Pellentesque habitant morbi tristique.

            senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus.
            Nam mattis, felis ut adipiscing."orpo.
          </p>
        </div>
      </section>
      <article id='secaoCadastro'>
        <h1 className='titulo' id='tituloJogos'>Como funcionam os Jogos?</h1>
        <div id='conteudoCadastro'>
          <img
            alt='Cartas empilhadas uma sobre a outra e no topo delas, a primeira, está decorada com uma estrela de 5 pontas, outras estrelas menores a sua volta e um circulo'
            src='../public/Cartas.png' 
            id='fotoCartas'
          />
          <p className='texto' id='explicacaoJogos'>C"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
            Pellentesque habitant morbi tristique.

            senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac,
            posuere eu, lectus. Nam mattis, felis ut adipiscing."orpo.
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