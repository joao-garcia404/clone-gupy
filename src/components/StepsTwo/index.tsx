import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Canva } from '../Canva';

import gupyImg from '../../assets/gupy.svg';

import { Container, Functional } from './styles';

export function StepsTwo() {
  const [selected, setSelected] = useState(1);

  return (
    <Container>
      <Functional>
        <div className="menu">
          <img src={gupyImg} alt="Gupy"/>
          <ul>
            <li onClick={() => (setSelected(1))}>
              <div>
                <span>1</span>
                <h4>Coleta de documentos</h4>
              </div>
              <p>
                Solicite e receba os documentos dos candidatos de forma prática
              </p>
            </li>

            <li onClick={() => (setSelected(2))}>
              <div>
                <span>2</span>
                <h4>Checagem de documentos</h4>
              </div>
              <p>
                Permita que pessoas pré-contratadas chequem seus próprios 
                documentos
              </p>
            </li>

            <li onClick={() => (setSelected(2))}>
              <div>
                <span>3</span>
                <h4>Boas-vindas</h4>
              </div>
              <p>
                Engaje seus novos colaboradores desde o primeiro dia
              </p>
            </li>
          </ul>

          <button type="button">
            Saiba mais
            <FiArrowRight />
          </button>
        </div>

        <Canva selected={selected} />
      </Functional>
    </Container>
  );
}