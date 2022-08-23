import Header from './components/Header';
import Main from './components/Main';

import { ToastContainer } from 'react-toastify';
import GlobalStyle from "./styles/global";

  export default function App() {
  return (
    <>
      <GlobalStyle>
      <Header/>
      <Main/>
      <ToastContainer autoClose={3000}/>
      </GlobalStyle>
    </>
  );
}
