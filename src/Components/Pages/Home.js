/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import {useNavigate } from "react-router-dom";
import { RxExit } from "react-icons/rx";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import axios from "axios";
import UserContext from "../../Contexts/UserContext";
import { useContext, useState, useEffect } from "react"



export default function Home() {
    const navigate = useNavigate();
    const {user} = useContext(UserContext);
    const [dinheiro, setDinheiro] = useState([]);  
    const [saldo, setSaldo] = useState(0) //por setsaldo

    useEffect(() => {
        const header = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
            
        }

        const promise = axios.get(`${process.env.REACT_APP_API_URL}home`, header);
        promise.then((res) => {
            let valores= 0;

            res.data.map((i)=>{
                if (i.type==="entrada"){
                    return valores += i.valor
                }else{
                    return valores -= i.valor
                }
            })

            setDinheiro(res.data);
            setSaldo(valores);
        })
        promise.catch((err) => console.log(err.response.data.message))

    },[])

    

    return (
        <Container>
             <Titulo>
                <h1>Olá, {user.checkUser.nome}</h1>

                <Icon onClick={() => navigate('/')}>
                <RxExit />
                </Icon>

            </Titulo>
            <Dados>
                <Lista>
                    {dinheiro.length=== 0 ? (<SemRegistro><p>Não há registros de entrada ou saída</p></SemRegistro>) :
                    (dinheiro.map  ((i) =>
                      <Item key={i._id}type={i.type}>
                        <p>{i.data}</p>
                        <h1>{i.descrição}</h1>
                        <h2>{i.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2>
                    </Item>
                    ))
                    }
                  
                    
                </Lista>
                <Total saldo ={saldo}>
                    <h1>SALDO:</h1>
                    <p>{saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                </Total>
            </Dados>
            <Footer>
                <Button onClick={() => navigate('/nova-entrada')}>
                    <Icon>
                    <AiOutlinePlusCircle />
                    </Icon>
                    <p>Nova<br /> entrada</p>
                </Button>
                <Button onClick={() => navigate('/nova-saida')}>
                    <Icon>
                    <AiOutlineMinusCircle />
                    </Icon>
                    <p>Nova<br /> saida</p>
                </Button>
            </Footer>


        </Container>


    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    background: #8C11BE;
    a {
        margin-top: 50px;
        text-decoration: none;
    }
`;

const Titulo = styled.div`
    width: 90%;
    height: 10%;
    color: #FFFFFF;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    display: flex;
    justify-content: space-between;
    align-items: center;
   
`
const Icon= styled.div `
cursor: pointer;
`

const Dados = styled.div`
    box-sizing: border-box;
    width: 90%;
    height: 70%;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 4%;
`;

const SemRegistro= styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 200px;
    margin-left:170px;
    font-size:20px;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    width:180px;

    p{
        color: #C6C6C6;
    }
`



const Lista = styled.div`
    width: 100%;
    line-height: 25px;
    display: flex;
    flex-direction: column;
    font-size: 15px;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;

    p{

        color: #C6C6C6;
    }
    
      
`

const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
        color: #C6C6C6;
    }
    h1{
        width: 58%;
        
    }
    h2{
        color:${props => props.type === "entrada" ? "#03AC00" : "#C70000"};
    }
    h3 {
        color: green;
    }
`


const Total = styled.div`
    width: 100%;
    height: 10%;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    
    p{
        font-weight: 400;
        color: ${props => props.saldo > 0 ? "#03AC00" : "#C70000"};
    }

`

const Footer = styled.div`
    width: 90%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Button = styled.div`
    width: 48%;
    height: 85%;
    font-family: 'Raleway', sans-serif;
    font-size: 25px;
    padding: 20px;
    box-sizing: border-box;
    background-color: #A328D6;
    border: 2px;
    border-radius: 5px;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    text-align: start;
    cursor: pointer;
    
    p{
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
    }
`


