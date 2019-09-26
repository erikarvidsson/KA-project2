import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CategoryBox } from '../components/CategoryBox';
import { Header } from '../components/typo';
import NavigationButton from '../components/NavigationButton';


const TopDivStyled = styled.div`
    height: 189px;
    width: 100vw;
    margin-top: 59px;
`;
const DivStyled = styled.div`
    text-align: center;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-row: 2;
    margin-left: 10px;
`;

const LogoDivStyled = styled.div`
    height: 35px;
    width: 100vw;
`;

const LogoStyled = styled.img`    
    width: 32px;
    margin-left: 22px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const ChoseCategory = () => {
    const categories2 = [
        { name: 'DANS', src: 'assets/imgs/DANS-kategori.jpg' },
        { name: 'MUSIK', src: 'assets/imgs/MUSIK-kategori.jpg' },
        { name: 'HANTVERK', src: 'assets/imgs/KROKI-kategori.jpg' },
        { name: 'SÅNG', src: 'assets/imgs/KROKI-kategori.jpg' },
        { name: 'SCENKONST', src: 'assets/imgs/SCENKONST-kategori.jpg' },
        { name: 'FÄRGLÄRA', src: 'assets/imgs/FARGLARA-kategori.jpg' }
    ];

    //   const [myChosenCategories, setMyChosenCategories] = useState([]);
    //   let test2 = []
      
    //   const getID = () => {
    //     categories2.map(category => {
    //       test2.concat(test, category.name);
          
    //     })
    //   }
    //   getID()
    // console.log(test); 

      // useEffect(
      //   a => {
      //     test(a);
      //   },
      //   []
      // );

    // const list = useCallback((a) => {
    //   const newlist = test2.concat([...myChosenCategories, a])
    //   setMyChosenCategories(newlist);
    // }, []);

      // const test = (a) => {
      //     const list = test2.concat([...myChosenCategories, a]);
      //     setMyChosenCategories(list);
      //     // console.log(list);
      //   }


      // console.log(myChosenCategories);
    
    return (
        <Layout>
            <TopDivStyled>
                <LogoDivStyled>
                  <LogoStyled src='assets/icons/kplay-logotyp-elva.svg' />
                </LogoDivStyled>
                <Header text='Välj intressen' marginTop='21px' margonBottom='0px' marginLeft='0px' marginRight='0px' />
            </TopDivStyled>
            <StyledLink to='/latest'>
                <NavigationButton goTo='Gå vidare' img='assets/icons/right-arrow.svg' />
            </StyledLink>
            <DivStyled>
                {categories2.map(category => {
                    return (
                        <CategoryBox
                            // onClick={test}
                            title={category.name}
                            value={category.name}
                            src={category.src}
                        />
                    );
                })}
            </DivStyled>
        </Layout>
    );
}

export default ChoseCategory;
