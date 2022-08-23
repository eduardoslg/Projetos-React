import styled from 'styled-components';

export const Container = styled.div`
  height: 150px;
  width: 800px;
  margin: 80px auto;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    width: 750px;
    opacity: 0.9;
    border-top-left-radius: 0.375rem/* 6px */;
    border-top-right-radius: 0.375rem/* 6px */;
  }
`