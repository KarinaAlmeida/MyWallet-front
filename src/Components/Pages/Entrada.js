import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import UserContext from "../../Contexts/UserContext";
import { useContext, useState } from "react";
import axios from "axios";


export default function Entrada () {
    const navigate = useNavigate();
    const {user} = useContext(UserContext);
    const [valor, setValor] = useState("")
    const [descrição, setDescrição] = useState("")


    function novaEntrada(event){
        event.preventDefault()
        const body = {valor, descrição};
        const config= { headers: { Authorization: `Bearer ${user.token}`
    }
} 

    console.log(user)
    const promise = axios.post(`${process.env.REACT_APP_API_URL}nova-entrada`, body, config);
    promise.then((res) => {
       
        navigate("/home")            
    });
    promise.catch((erro) => alert("Opa! Deu bug, tente novamente!"));

}



    return(
    <Container>
        <Titulo>
            <h1>Nova Entrada</h1>
        </Titulo>

    <form onSubmit={novaEntrada}>
        <Inputs>
           
                <input 
                    type="number" 
                    placeholder="Valor"
                    value={valor} 
                    onChange={(event) => setValor (event.target.value)} 
                    required 
                    
                />
                 <input 
                    type="text" 
                    placeholder="Descrição" 
                    value={descrição} 
                    onChange={(event) => setDescrição (event.target.value)} 
                    required 

                    

                />
                        <button type='submit'>
                            Salvar Entrada
                        </button> 

               
        </Inputs>
        </form>
                  
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

    button {
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
   
`;

const Titulo = styled.div`
    width: 90%;
    margin:25px;
    color: #FFFFFF;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 28px; 
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
        /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }
  `