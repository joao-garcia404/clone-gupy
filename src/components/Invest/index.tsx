import { FiArrowRight } from 'react-icons/fi';

import iaImg from '../../assets/ia.png';
import fastImg from '../../assets/fast.png';
import likeImg from '../../assets/like.png';
import alertImg from '../../assets/alert.png';
import locationImg from '../../assets/location.png';
import loadImg from '../../assets/load.png';
import loopImg from '../../assets/loop.png';

import { Container, Content, WhyGupy, Items } from './styles'

export function Invest() {
  return (
    <Container>
      <Content>
        <h2>
          Retorno de investimento (ROI) dos nossos clientes
        </h2>

        <div className="items">
          <div className="ia">
            <h3>Inteligência Artificial</h3>
            <img src={iaImg} alt="Inteligência artificial"/>
            <h4>70%</h4>
            <p>
              dos candidatos contratados estavam nas primeiras 10 colocações do ranking.
            </p>
          </div>

          <div className="ia">
            <h3>Velocidade na contratação</h3>
            <img src={fastImg} alt="Velocidade"/>
            <h4>30%</h4>
            <p>
              de redução no SLA de fechamento de vagas.
            </p>
          </div>

          <div className="ia">
            <h3>Experiência do candidato</h3>
            <img src={likeImg} alt="Gostei"/>
            <h4>90%</h4>
            <p>
              dos candidatos afirmam que a Gupy “é simples e fácil de usar”.
            </p>
          </div>
        </div>

        <button type="button">
          Veja mais resultados
          <FiArrowRight />
        </button>
      </Content>

      <WhyGupy>
        <Items>
          <h2>Por que a Gupy?</h2>

          <div className="items">
            <div className="item">
              <img src={alertImg} alt="ícone"/>

              <h3>Construída para as que mais crescem</h3>

              <p>
                Nossa plataforma é construída utilizando os mais altos padrões 
                tecnológicos para suportar de forma fluída um grande volume de 
                candidatos e usuários ao mesmo tempo.
              </p>
            </div>

            <div className="item">
              <img src={locationImg} alt="ícone"/>

              <h3>Pensada para o mercado brasileiro</h3>

              <p>
                Desenvolvemos nossos produtos tendo em mente as complexidades e 
                particularidades do mercado de recrutamento, seleção e admissão 
                brasileiro.
              </p>
            </div>

            <div className="item">
              <img src={loadImg} alt="ícone"/>

              <h3>Inteligência Artificial precisa</h3>

              <p>
                Com a Gaia, a mais avançada inteligência artificial para 
                recrutamento e seleção do mercado, você vai encontrar os 
                candidatos de maior afinidade com suas vagas, sempre.
              </p>
            </div>

            <div className="item">
              <img src={loopImg} alt="ícone"/>

              <h3>Processo acompanhado por especialistas</h3>

              <p>
                Nosso time de Sucesso do Cliente estará sempre ao seu lado, 
                trabalhando genuinamente para compreender e atingir os objetivos 
                da sua empresa.
              </p>
            </div>
          </div>
        </Items>
      </WhyGupy>
    </Container>
  );
}