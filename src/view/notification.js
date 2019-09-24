import React, { useState } from 'react';
import Layout from '../components/Layout';
import { P, H2 } from '../components/typo';
import styled from 'styled-components'

const Img = styled.img`
  object-fit: cover;
  width: 34vw;
  height: 34vw;
  /* margin-top: 150px; */
  /* margin-left: 20px; */
  border-radius: 5px;
`;

const Notification = () => {

    const [friends, setFriends] = useState([
      {
        name: "Camille Jadermark",
        img: "assets/imgs/Camille.jpg",
        text: "Grunden i koordinerade kropprörelser. i sina favoriter."
      },
      {
        name: "Freja Candell",
        img: "assets/imgs/Freja.jpg",
        text: "Grunden i koordinerade kropprörelser. i sina favoriter."
      },
      {
        name: "Otto Bäckström lade",
        img: "assets/imgs/Otto.jpg",
        text: "Grunden i koordinerade kropprörelser. i sina favoriter."
      },
      {
        name: "Hanna Ell",
        img: "assets/imgs/Hanna.jpg",
        text: "Grunden i koordinerade kropprörelser. i sina favoriter."
      }
    ]);
    return(
        <div>
            <Layout>
                {friends.map(friend => {
                    return (
                        <>
                            <Img src={friend.img} alt="" />
                            <H2 text={friend.name}></H2>
                            <P text={friend.text}></P>
                        </>
                    )
                })}
            </Layout>
        </div>
    )
}

export default Notification;