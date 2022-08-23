import styled from 'styled-components';

export const ContainerPrincipal = styled.div`
  color: black;
  height: 500px;
  width: 750px;
  margin: auto;
  background-color: white;
  --tw-bg-opacity: 0.9;
  border: 1px solid red;

  div{

  }

`
export const ContainerInputs = styled.div`
  display: flex;
  justify-content: center;

  div + div{
    margin-left: 40px;
  }

  label{
    background-color: black;
    color: white;
    text-transform: uppercase;
    border-radius: 4px;
    padding: 4px;
  }

  input{
    margin-left: 5px;
    padding: 4px;
    text-transform: uppercase;
  }
`

export const Container = styled.div`
  border: 1px solid red;
`