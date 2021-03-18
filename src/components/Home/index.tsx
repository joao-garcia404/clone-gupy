import { FiArrowRight } from 'react-icons/fi'
import homeImg from '../../assets/home.png';
import vivoImg from '../../assets/vivo.png';
import santanderImg from '../../assets/santander.png';
import ambevImg from '../../assets/ambev.png';
import gpaImg from '../../assets/gpa.png';
import picpayImg from '../../assets/picpay.png';
import americanasImg from '../../assets/lojas-americanas.png';
import azulImg from '../../assets/azul.png';

import { Container, Footer } from "./styles";

export function Home() {
  return (
    <Container>
      <main>
        <div>
          <h1>
            Evolua sua forma de contratar com a Gupy.
          </h1>
          <p>
            Com nossos softwares de Recrutamento & Seleção e Admissão, junto da 
            mais avançada inteligência artificial, sua empresa vai contratar de 
            forma mais rápida e efetiva, sempre.
          </p>
          <button type="button">
            Solicitar demonstração
            <FiArrowRight />
          </button>
        </div>
        <img src={homeImg} alt="Ilustração home"/>
      </main>

      <Footer>
        <h3>Grandes empresas que cofiam a Gupy</h3>
        <div>
          <img src={vivoImg} alt="Vivo"/>
          <img src={santanderImg} alt="Santander"/>
          <img src={ambevImg} alt="Ambev"/>
          <img src={gpaImg} alt="Gpa"/>
          <img src={picpayImg} alt="Picpay"/>
          <img src={americanasImg} alt="Lojas americanas"/>
          <img src={azulImg} alt="Azul"/>
        </div>
      </Footer>
    </Container>
  );
}