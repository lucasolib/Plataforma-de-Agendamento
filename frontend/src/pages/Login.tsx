import '../themes/pages/login.css';

function Login() {
  return (
    <main id='mainLogin'>
      <div id='paginaLogin'> 
        <form action="">
          <h1>Login</h1>
          <div className='inputBox'>
            <input type='text' placeholder='Usuário' required/>
            <img src='./user.png'/>
          </div>
          <div className='inputBox'>
            <input type='password' placeholder='Senha' required/>
            <img src='./lock.png'/>
          </div>
          <div id='acoesLogin'>
            <label id='lembrarMe'>
              <input type='checkbox' />
              <p>Lembrar-me</p>
            </label>
            <label>
              <a href=''>Esqueceu a senha?</a>
            </label>
          </div>
          <button type='submit' id='botaoEntrar'>Entrar</button>
          <div id='registro'>
            <p>Não possui uma conta? 
              <a href=''> Registrar</a>
            </p>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Login;