import '../themes/pages/home.css';
import Header from '../components/header';
import Footer from '../components/footer';

function Home() {
  const rating: Array<number> = [4, 5]

  return (
    <main id='paginaInicial'>
      <Header />
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
          <p className='texto' id='introducao'>
            Se você está em busca de respostas, clareza ou orientação espiritual para os caminhos da sua vida,
            conheça Robson de Iansã, pai de santo experiente e respeitado por sua seriedade e dedicação.
            Especialista em baralho cigano, ele oferece direcionamento espiritual baseado nos guias e orixás.
            Seu atendimento é humanizado, com escuta atenta, empatia e profundo respeito às suas crenças.
            Todas as consultas são realizadas com sigilo absoluto e compromisso com o seu bem-estar espiritual.
          </p>
        </div>
      </section>
      <article id='secaoCadastro'>
        <h1 className='titulo' id='tituloJogos'>Como funcionam os jogos?</h1>
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
          Marque já uma consulta ou tire suas dúvidas
          </label>
          <button id='botaoCadastro'>Cadastre-se</button>
        </div>
      </article>
      <article id='secaoFeedback'>
        <h1 className='titulo' id='tituloFeedback'>Avaliações</h1>
        <div className='feedback'>
          <img
          alt='Foto da pessoa responsável pela conta que aplicou o feedback.'
          src='/pessoa1-placeholder.jpg'
          className='fotoFeedback'
          />
          <div className='conteudoFeedback'>
            <div id='classificacao'>
              {[1, 2, 3, 4, 5].map((estrela) => (
                <img
                  key={estrela}
                  src={estrela <= rating[0] ? "/Avaliacao.png" : "/AvaliacaoVazia.png"}
                  id='estrela'
                />
              ))}
            </div>
            <p className='textoFeedback'>C"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus</p>
          </div>
        </div>
                <div className='feedback'>
          <img
          alt='Foto da pessoa responsável pela conta que aplicou o feedback.'
          src='/pessoa2-placeholder.jpg'
          className='fotoFeedback'
          />
          <div className='conteudoFeedback'>
            <div id='classificacao'>
              {[1, 2, 3, 4, 5].map((estrela) => (
                <img
                  key={estrela}
                  src={estrela <= rating[1] ? "/Avaliacao.png" : "/AvaliacaoVazia.png"}
                  id='estrela'
                />
              ))}
            </div>
            <p className='textoFeedback'>C"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus</p>
          </div>
        </div>
        <div id='expandirFeedback'>
          <span />
          <span />
          <span />
        </div>
      </article>
      <Footer />
    </main>
  )
}

export default Home