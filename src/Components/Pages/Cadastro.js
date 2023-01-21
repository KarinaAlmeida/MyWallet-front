import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react"





export default function Cadastro () {
    const [login, setLogin] = useState({ nome: "", email: "", senha: "", confirmarSenha:"" })
    const navigate = useNavigate();
   


    function cadastrar(event) {
        event.preventDefault();
        

      
        const promise = axios.post(`${process.env.REACT_APP_API_URL}cadastro`, login)
        promise.then((res) => {
            
            navigate("/");
        });
        promise.catch((err) => {
            console.log(err.response.data)
            

        
        })
    }

        return (
            <Container>
    
                <div onClick={() => navigate('/')}>
                 <Title> MyWallet</Title>
                </div>
    
            <form onSubmit={cadastrar}>
                <Inputs>
                    <input 
                    type="text" 
                    placeholder="Nome" 
                    value={login.nome} 
                    onChange={(event) => setLogin({...login, nome:event.target.value})} 
                    required
               
                    />
                    
                    <input 
                    type="email" 
                    placeholder="E-mail" 
                    value={login.email} 
                    onChange={(event) => setLogin({...login, email:event.target.value})} 
                    required
                   
    
                    />
                    <input 
                    type="password" 
                    placeholder="Senha" 
                    value={login.senha} 
                    onChange={(event) => setLogin({...login, senha:event.target.value})} 
                    required
                   
    
                    />

                    <input 
                    type="password" 
                    placeholder="Confirme a senha" 
                    value={login.confirmarSenha} 
                    onChange={(event) => setLogin({...login, confirmarSenha:event.target.value})} 
                    required
                   
    
                    />

                    


                </Inputs>
    
                <button type='submit'>
                        Entrar
                    </button>            
            </form>
            <Link to={'/'}>
                <p>Já tem uma conta? Entre agora!</p>
            </Link>
    
            </Container>
        )
    }
    


const Container = styled.div`
    min-width:375px;
    height: 670px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:#8C11BE;
    p{
        color:white;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        text-decoration: none;
        margin-top: 40px;
        cursor: pointer;
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 15px;

    }
    
    button{
        margin-top: 10px;
        background-color: #A328D6;
        color:#FFFFFF;
        width:326px;
        height: 58px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 20px;
        
    }
`
const Title = styled.div`
    margin-top:150px;
    margin-bottom:20px;
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    line-height: 50px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
    
`

const Inputs = styled.div`
    display: flex; 
    flex-direction: column;
    input {
        margin-top: 10px;
        width:326px;
        height: 58px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 20px;
        
        }
  `