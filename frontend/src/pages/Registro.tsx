import '../themes/pages/registro.css';

function Registro() {
  return (
    <main id='mainLogin'>
      <div id='paginaLogin'> 
        <form action="">
          <h1>Registro</h1>
          <div className='inputBox'>
            <input type='text' placeholder='Nome' required/>
            <img src='./user-id-card.png'/>
          </div>
          <div className='inputBox'>
            <input type='text' placeholder='Sobrenome' required/>
            <img src='./user-id-card.png'/>
          </div>
          <div className='inputBox'>
            <input type='text' placeholder='Email' required/>
            <img src='./envelope.png'/>
          </div>
          <div className='inputBox'>
            <input type='text' placeholder='Usuário' required/>
            <img src='./user.png'/>
          </div>
          <div className='inputBox'>
            <input type='text' placeholder='Telefone' required/>
            <img src='./phone-plus.png'/>
          </div>
          <div className='inputBox'>
            <input type='password' placeholder='Senha' required/>
            <img src='./lock.png'/>
          </div>
          <div className='inputBox'>
            <input type='password' placeholder='Confirme sua senha' required/>
            <img src='./lock.png'/>
          </div>
          <div id='acoesLogin'>
            <label id='lembrarMe'>
              <input type='checkbox' />
              <a>Aceito termos e condições</a>
            </label>
          </div>
          <button type='submit' id='botaoEntrar'>Criar conta</button>
          <div id='registro'>
            <p>Já possui uma conta? 
              <a href='/login'> Entrar</a>
            </p>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Registro;