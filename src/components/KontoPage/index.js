import React,{ useState } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import Form from '../Form';


const Section = styled.section`
height: 100vh;
width: 100vw;

`;

const Profile = styled.div`
height: 130px;
display: flex;
align-items: center;
justify-content: flex-start;
border-bottom: 1px solid white;

img {
width: 80px;
height: 80px;
border-radius: 50%;
background-color: #fff;
object-fit: cover;
margin-left: 40px;
box-shadow: 0 8px 6px -6px black;
}

h3 {
margin-left: 20px;
}
`;

const Icon = styled.div`
color: #fff;
display: flex;
justify-content:center;
align-items:center;
position:fixed;
top:30px;
left:30px;


`;

const Div = styled.div`
height: 40vh;
width: 100vw;
display: flex;
flex-direction: column;

form{
  display: flex;
  border-bottom: 1px solid white;
  padding-bottom: 25px;
  width: 90vw;

  justify-content: space-between;
  list-style: none;
}

input {
height: 55px;
background-color: black;
border: none;

}

input[type=text]
{
color: #fff;
font-size: 20px;
padding-left: 10px;
text-decoration: none;
border: 0;
}

button {
height: 20px;
width: 20px;
background-color: red;
display: none;
}

`;

const KontoPage = (props) => {
  const [namn, setNamn] = useState('');
  const [yrke, setYrke] = useState('');
  const [mailadress, setMailadress] = useState('');
  const [telefon, setTelefon] = useState('');

  const showButton = () => {
    document.getElementById("button").style.display='block';
      console.log('showButton')
  }

    return (
    <div>
    <Section>
      <h3>Konto</h3>
    <Profile>
      <img></img>
      <h3>Ändra Profilbild</h3>
    </Profile>
        <Div>
        <form>
          <label>
            Namn:
          <input
            value={namn}
            onChange={e => setNamn(e.target.value)}
            handleChange={showButton}
            type="text"
            id="userText"/>
          </label>
        </form>

        <form>
          <label>
            Yrke:
          <input
            value={yrke}
            onChange={e => setYrke(e.target.value)}
            type="text"
            id="userText"/>
            </label>
          </form>
        <form>
          <label>
            Mailadress:
          <input
            value={mailadress}
            onChange={e => setMailadress(e.target.value)}
            type="text"
            id="userText"/>
          </label>
        </form>
        <form>
          <label>
            Telefon:
          <input
            value={telefon}
            onChange={e => setTelefon(e.target.value)}
            type="text"
            id="userText"/>
            <button id="button" type="submit">Submit</button>
            </label>
          </form>

      </Div>
    </Section>
  </div>
)}

export default KontoPage;
