import React from 'react';
import '../../themes/pages/home.css';

function Home() {

  return (
    <main>
      <section>
        <img
          alt='Foto exibindo um hom em de cabelos brancos, com um rosto simpático e vestes azuis com desenhos coloridos. Suas mãos estão apoiadas em uma mesa
          coberta com um pano vermelho e com cartas de cigano organizadas em cima dela.'
          src='../public/Robson.png' 
        />
        <h1 className='bemvindo'>Seja bem vindo!</h1>
        <p>C"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
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
      </section>
      <article>
        <h1>Como funcionam os Jogos?</h1>
        <img
          alt='Cartas empilhadas uma sobre a outra e no topo delas, a primeira, está decorada com uma estrela de 5 pontas, outras estrelas menores a sua volta e um circulo'
          src='../public/Cartas.png' 
        />
        <p>C"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
          Pellentesque habitant morbi tristique.

          senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac,
          posuere eu, lectus. Nam mattis, felis ut adipiscing."orpo.
        </p>
        <label>
        Se interessou? Marque já uma consulta ou tire suas dúvidas
          <button>Cadastre-se</button>
        </label>
      </article>
    </main>
  )
}

export default Home