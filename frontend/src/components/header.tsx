import '../themes/components/header.css'

function Header() {
  return (
    <header id='header'>
      <img id='logo'/>
      <nav>
        <a className='navHeader' href="#">Avaliações</a>
        <a className='navHeader' href="#">Contato</a>
        <a className='navHeader' href="#">Sobre</a>
      </nav>
      <button id='botaoEntrar'>Entrar</button>
    </header>
  )
}

export default Header;