// import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

export default function Entrada () {
    const navigate = useNavigate();


    return(
    <Container>
        <Titulo>
            <h1>Nova Entrada</h1>
        </Titulo>

        <Inputs>
                <input 
                    type="number" 
                    placeholder="Valor" 
                />
                 <input 
                    type="text" 
                    placeholder="Descrição" 
                />
        </Inputs>

        <button type='submit' onClick={() => navigate('/home')}>
                        Salvar Entrada
                    </button>            
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
    width: 90%%;
    margin:25px;
    color: #FFFFFF;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 28px;
    display: ;
  
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