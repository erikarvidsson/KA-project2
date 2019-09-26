import React, { useState } from 'react';
import styled from 'styled-components';
import MenuTop from '../MenuTop';
import VideoData from '../../data/youtube.json';
import { SmallMediaBox } from '../SmallMediaBox';

const InputStyled = styled.input`
  width: 332px;
  height: 35px;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  display: flex;
  position: fixed;
  justify-content: center;
  margin-top: 40px;
  margin-left: 20px;
`;

const Form = styled.form`
  position: relative;
  z-index: 9999;
  margin-top: 109px;
  width: 100vw;
  background-color: #101010;
`;

const ResultWrapper = styled.div`
  background-color: #101010;
  padding-left: 20px;
  position: absolute;
  margin-top: 140px;
  margin-bottom: 50px;
`;

const SearchPage = props => {
  const [searchValue, setSearchValue] = useState(['']);
  const [searchKey, setSearchKey] = useState('');

  function filterIt(arr, searchKey) {
    return arr.filter(function(obj) {
      return Object.keys(obj).some(function(key) {
        return obj[key].includes(searchKey);
      });
    });
  }

  function checkSubmit(e) {
    if (e && e.keyCode === 13) {
      setSearchValue(filterIt(VideoData, searchKey));
    }
  }

  return (
    <div>
      <MenuTop text='Sök' />
      <div>
        <Form>
          <InputStyled
            type='text'
            id='site-search'
            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'
            placeholder='Sök i Kplay...'
            onKeyDown={checkSubmit}
            onChange={e => setSearchKey(e.target.value)}
            value={searchKey}
          />
        </Form>
      </div>
      <ResultWrapper id='smallBox'>
        {searchValue.map(name => {
          return (
            <SmallMediaBox
              src={name.thumbnail}
              title={name.title}
              description={name.description}
              key={name.id}
            />
          );
        })}
      </ResultWrapper>
    </div>
  );
};

export default SearchPage;
