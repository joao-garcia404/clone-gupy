import { FiChevronDown } from 'react-icons/fi';

import connectabilImg from '../../assets/connectabil.svg';

import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={connectabilImg} alt="Gupy"/>

        <nav>
          <a href="#">
            Produtos & Soluções
            <FiChevronDown />
          </a>
          <a href="#">Planos</a>
          <a href="#">
            A Gupy
            <FiChevronDown />
          </a>
          <a href="#">
            Conteúdos para RH
            <FiChevronDown />
          </a>
          <a href="#" className="login">Login</a>

          <button type="button">Agende uma <br /> demonstração</button>
        </nav>
      </Content>
    </Container>
  );
}