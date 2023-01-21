// import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from  'react-loader-spinner';
import axios from "axios";
import UserContext from "../../Contexts/UserContext";
import { useContext, useState } from "react"





export default function Login () {
    
    const [login, setLogin] = useState({email:'', senha:''});
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const {setUser} = useContext(UserContext);


    function entrar(event) {
        event.preventDefault();
        setLoading(true);

      
        const promise = axios.post(`${process.env.REACT_APP_API_URL}`, login)
        promise.then((res) => {
            const { id, nome, token } = res.data
            setLoading(false);
            setUser({id, nome, token});

            navigate("/home");
        });
        promise.catch((err) => {
            console.log(err.response.data)
            setLoading(false);

        
        })
    
    }
        return (
            <Container>
    
                <div onClick={() => navigate('/')}>
                 <Title> MyWallet</Title>
                </div>
    
            <form onSubmit={entrar}>
                <Inputs>
                    <input 
                    type="email" 
                    placeholder="E-mail" 
                    value={login.email} 
                    onChange={(event) => setLogin({...login, email:event.target.value})} 
                    required
                    disabled={loading}
    
                    />
                    <input 
                    type="password" 
                    placeholder="Senha" 
                    value={login.senha} 
                    onChange={(event) => setLogin({...login, senha:event.target.value})} 
                    required
                    disabled={loading}
    
                    />
                </Inputs>
    
                <button type='submit' disabled={loading}>
                    {loading === false ? 'Entrar' :  <ThreeDots
                        height="20"
                        width="50"
                        radius="9"
                        color="white"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true} 
                        />}
                </button>          
            </form>
            <Link to={'/cadastro'}>
                <p>Primeira vez? Cadastre-se!</p>
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
    margin-top:200px;
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