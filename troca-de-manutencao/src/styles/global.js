import {createGlobalStyle} from 'styled-components';
import img from '../assets/17545.jpg';

export default createGlobalStyle`
 *{
   margin: 0;
   padding: 0;
   outline:0;
   box-sizing: border-box;
 }

 html, body, #root{
   height: 100vh;
   width: 100vw;
   background-size: cover;
   display: flex;
   justify-content: center;
   background-image: url(${img});
   box-sizing: border-box;
 }

 body{
   background: #0D2636;
   font-size: 14px;
   -webkit-font-smoothing: antialiased !important;
 }

 body, input, button{
   color: #222;
   font-size: 14px;
   font-family: Arial, Helvetica, sans-serif;
 }

 button{
   cursor: pointer;
 }

`;