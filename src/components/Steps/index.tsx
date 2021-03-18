import { useState } from 'react';
import { Canva } from '../Canva';
import { FiArrowRight } from 'react-icons/fi';

import tintImg from '../../assets/tint.png';
import clockImg from '../../assets/clock.svg';
import visionImg from '../../assets/vision.svg';
import checkImg from '../../assets/check.svg';
import nextImg from '../../assets/next.svg';
import userImg from '../../assets/user.svg';
import gupyImg from '../../assets/gupy.svg';

import { Container, Content, HowWorks, Functional } from './styles';

export function Steps() {
  const [selected, setSelected] = useState(1);

  return (
    <Container>
      <Content>
        <div className="contact">
          <div className="year">
            <h2>2021 pode ser diferente:</h2>
            <img src={tintImg} alt="Tinta"/>
            <p>
              Deixe para trás o que não te realiza. Conheça o Gupy Recrutamento 
              & Seleção e o Gupy Admissão
            </p>
          </div>

          <div className="ask">
            <button>
              Pedir contato
              <FiArrowRight />
            </button>
            <div className="icons">
              <img src={clockImg} alt="Relógio"/>
              <img src={visionImg} alt="Mira"/>
              <img src={checkImg} alt="Check"/>
              <img src={nextImg} alt="Next"/>
              <img src={userImg} alt="Usuário"/>
            </div>
          </div>
        </div>
      </Content>

      <HowWorks>
        <header>
          <h2>Como funciona?</h2>

          <span>
            Leve a transformação digital para o seu RH desde a atração até a 
            admissão.
          </span>
        </header>
      </HowWorks>

      <Functional>
        <div className="menu">
          <img src={gupyImg} alt="Gupy"/>
          <ul>
            <li onClick={() => setSelected(1)}>
              <div>
                <span>1</span>
                <h4>Requisição de vagas</h4>
              </div>
              <p>
                Centralize as solicitações de vagas dos gestores em um só lugar
              </p>
            </li>

            <li onClick={() => setSelected(2)}>
              <div>
                <span>2</span>
                <h4>Atração</h4>
              </div>
              <p>
                Alcance milhares de candidatos em poucos cliques
              </p>
            </li>

            <li onClick={() => setSelected(1)}>
              <div>
                <span>3</span>
                <h4>Triagem</h4>
              </div>
              <p>
                Agilize seu processo de triagem e torne-o cada vez mais assertivo 
                com nossa Inteligência Artificial
              </p>
            </li> 

            <li onClick={() => setSelected(2)}>
              <div>
                <span>4</span>
                <h4>Qualificação</h4>
              </div>
              <p>
                Crie entrevistas estruturadas com diversos tipos de etapas e
                módulos
              </p>
            </li>

            <li onClick={() => setSelected(1)}>
              <div>
                <span>5</span>
                <h4>Seleção</h4>
              </div>
              <p>
                Aproveite a praticidade da avaliação colaborativa e nunca deixe 
                um candidato sem feedback
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
