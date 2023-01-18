import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";



export default function Login () {
    const navigate = useNavigate();



        return (
            <Container>
    
                <div onClick={() => navigate('/')}>
                 <Title> MyWallet</Title>
                </div>
    
            <form>
                <Inputs>
                    <input 
                    type="text" 
                    placeholder="Nome" 
                    />
                    
                    <input 
                    type="email" 
                    placeholder="E-mail" 
                    // value={login.email} 
                    // onChange={(event) => setLogin({...login, email:event.target.value})} 
                    // required
                    // disabled={loading}
    
                    />
                    <input 
                    type="password" 
                    placeholder="Senha" 
                    // value={login.password} 
                    // onChange={(event) => setLogin({...login, password:event.target.value})} 
                    // required
                    // disabled={loading}
    
                    />

                    <input 
                    type="password" 
                    placeholder="Confirme a senha" 
                    // value={login.password} 
                    // onChange={(event) => setLogin({...login, password:event.target.value})} 
                    // required
                    // disabled={loading}
    
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