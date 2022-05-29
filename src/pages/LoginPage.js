import React from 'react'

export default function LoginPage() {
    return (
        <div class="wrapper">
        <div class="container">
        <div className="text-center m-5-auto">
            <h2>Olá, seja bem vindo(a)!</h2>
            <div class="container">
            <form action="/home">
                <p>
                    <label>Usuário</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Senha</label>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            </div>
            </div>
        </div>
         
        <ul class="bg-bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        
        <Footer></Footer>
      </div>   
      
    )
}

const Footer = () => {
    return (
        <p className="text-center" style={ FooterStyle }>Designed by <a href="http://www.movetecnologia.com.br/" target="_blank" rel="noopener noreferrer">MOVE Tecnologia</a></p>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}  