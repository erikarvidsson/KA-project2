import React, { useState } from 'react';
import Layout from '../components/Layout';
import { P } from '../components/typo';
import styled from 'styled-components';
import MenuTop from '../components/MenuTop';
import Line from '../components/Line';

const DivStyled = styled.div`
    margin-top: 194px;
    width: 100vw;
`;

const DivOutput = styled.div`
    width: 90vw;
    margin-left: 5vw;
`;

const DivOutputStyled = styled.div`
    height: 163px;
    width: 90vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

const DivPStyled = styled.div`
    height: 100%;
    width: 164px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Img = styled.img`
    object-fit: cover;
    width: 28vw;
    height: 28vw;
    border-radius: 50%;
`;

const Notification = () => {


    const [ friends ] = useState([
        {
            name: 'Camille Jadermark',
            img: 'assets/imgs/Camille.jpg',
            text: 'lade till',
            title: 'Grunden i koordinerade kropprörelser.',
            text2: 'i sina favoriter.'
        },
        {
            name: 'Freja Candell',
            img: 'assets/imgs/Freja.jpg',
            text: 'lade till',
            title: 'Grunden i koordinerade kropprörelser.',
            text2: 'i sina favoriter.'
        },
        {
            name: 'Otto Bäckström',
            img: 'assets/imgs/Otto.jpg',
            text: 'lade till',
            title: 'Grunden i koordinerade kropprörelser.',
            text2: 'i sina favoriter.'
        },
        {
            name: 'Hanna Ell',
            img: 'assets/imgs/Hanna.jpg',
            text: 'lade till',
            title: 'Grunden i koordinerade kropprörelser.',
            text2: 'i sina favoriter.'
        },
        {
            name: 'Mauro Cilli',
            img: 'assets/imgs/Mauro.jpg',
            text: 'lade till',
            title: 'Grunden i koordinerade kropprörelser.',
            text2: 'i sina favoriter.'
        },
        {
            name: 'Rebecca Klaening',
            img: 'assets/imgs/Rebecca.jpg',
            text: 'lade till',
            title: 'Grunden i koordinerade kropprörelser.',
            text2: 'i sina favoriter.'
        },
        {
            name: 'Karin Holmquist',
            img: 'assets/imgs/Erik.jpg',
            text: 'lade till',
            title: 'Grunden i koordinerade kropprörelser.',
            text2: 'i sina favoriter.'
        },
        {
            name: 'Erik Arvidsson',
            img: 'assets/imgs/Erik.jpg',
            text: 'lade till',
            title: 'Grunden i koordinerade kropprörelser.',
            text2: 'i sina favoriter.'
        }
    ]);

    return(
        <div>
            <Layout>
                <MenuTop text='Händelser' />
                <DivStyled>
                    {friends.map(friend => {
                        return (
                            <DivOutput>
                                <DivOutputStyled>
                                    <Img src={friend.img} alt='' />
                                    <DivPStyled>
                                        <P text={friend.name} fontWeight='bold' marginTop='0' marginBottom='0' />
                                        <P text={friend.text} marginTop='0' marginBottom='0' />
                                        <P text={friend.title} fontWeight='bold' marginTop='0' marginBottom='0' />
                                        <P text={friend.text2} marginTop='0' marginBottom='0' />
                                    </DivPStyled>
                                </DivOutputStyled>
                                <Line />
                            </DivOutput>
                        )
                    })}
                </DivStyled>
            </Layout>
        </div>
    );
}

export default Notification;