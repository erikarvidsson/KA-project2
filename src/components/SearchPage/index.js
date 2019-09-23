import React,{ useState, useEffect } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import MenuTop from '../MenuTop';
import {Header, H2, H3, P} from '../typo';
import VideoData from "../../data/youtube.json"
import Layout from '../Layout';
import { SmallMediaBox } from '../SmallMediaBox';

const InputStyled = styled.input`
width: 332px;
height: 35px;
box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 25px;
display: flex;
position: fixed;
justify-content: center;
margin-top: 100px;
margin-left: 20px;

`;
const ResultWrapper = styled.div`
margin-top: 150px;
margin-left: 20px;
`;
const Img = styled.img`
width: 30vw;
margin-top: 150px;
margin-left: 20px;
`;

const SearchPage = (props) => {
  const [searchValue, setSearchValue] = useState([''])
  const [searchKey, setSearchKey] = useState('')

  function filterIt(arr, searchKey) {
    return arr.filter(function(obj) {
      return Object.keys(obj).some(function(key) {
        return obj[key].includes(searchKey);
      });
    });
  }
  
  useEffect(() => {
    setSearchValue(filterIt(VideoData, searchKey));
  }, []);

  // console.log(searchValue)
  


    return (
      <Layout>
        <MenuTop text="Sök" />
        <div>
          <form>
            <InputStyled
              type="search"
              id="site-search"
              pattern="[A-z][0-9]"
              placeholder="Sök i Kplay..."
              onChange={e => setSearchKey(e.target.value)}
              value={searchKey}
            />
            <button>Search</button>
          </form>
        </div>
        <ResultWrapper>
          {searchValue.map(name => {
            return (
              <SmallMediaBox
                src={name.thumbnail}
                title={name.title}
                description={name.description}
              />
            );
          })}
        </ResultWrapper>
      </Layout>
    );}

export default SearchPage;
