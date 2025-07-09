import '../themes/components/footer.css'

function Footer() {
  return (
    <footer id='footer'> 
      <div className='barraCompleta' />
      <div id='footerConteudo'>
        <h2 className="tituloLinks">Ajuda
          <div className="links">
            <a href="#">FAQ</a>
            <a href="#">Suporte</a>
          </div>
        </h2> 
        <h2 className="tituloLinks">Contato
          <div className="links">
            <a href="#">Email</a>
            <a href="#">Telefone</a>
          </div>
        </h2>
        <h2 className="tituloLinks">Sobre
          <div className="links">
            <a href="#">História</a>
            <a href="#">Equipe</a>
          </div>
        </h2>
        <h2 className="tituloLinks">Institucional
          <div className="links">
            <a href="#">Subitem 1</a>
            <a href="#">Subitem 2</a>
            <a href="#">Subitem 3</a>
          </div>
        </h2>
      </div>
    </footer>
  )
}

export default Footer;