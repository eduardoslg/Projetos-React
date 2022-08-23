import { Container } from './styles';
import imgATM from '../../assets/1596543685671.jpg'

export default function Header() {
  return (
    <>
      <Container>
        <a href='https://atmoutsourcing.com.br/' target="_blank" rel="noreferrer"><img src={ imgATM } alt='logo-atm'/></a>
      </Container>
    </>
  );
}
