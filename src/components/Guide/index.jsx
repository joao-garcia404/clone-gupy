import videoGif from '../../assets/video.gif';
import pencilImg from '../../assets/pencil.png';
import commentImg from '../../assets/comment.png';
import searchImg from '../../assets/search.png';
import dataImg from '../../assets/data.png';

import { Container, Content, Footer } from "./styles";

export function Guide() {
  return (
    <Container>
      <Content>
        <div className="video">
          <img src={videoGif} alt="Plataforma"/>
        </div>

        <div className="recruitment">
          <h2>
            Seu recrutamento, seleção e admissão em uma única ferramenta
          </h2>

          <p>
            Com a Gupy você agiliza a requisição de vagas, divulga suas 
            oportunidades nos principais portais de emprego do Brasil e 
            qualifica seus candidatos com dezenas de testes online prontos.
          </p>

          <p>
            Além disso, você simplifica a admissão digital dos novos 
            colaboradores em um só lugar.
          </p>

          <button type="button">
            Falar com um especialista
          </button>
        </div>
      </Content>

      <Footer>
        <div className="pencil">
          <img src={pencilImg} alt="ícone"/>
          <h3>Simplifique o seu processo</h3>
          <p>
            <span class="destaque">
              Crie o seu processo seletivo de maneira fácil e rápida
            </span>, podendo deixá-lo <span>
               totalmente digital
            </span> e entregue uma experiência intuitiva aos seus candidatos.
          </p>
        </div>

        <div className="comment">
          <img src={commentImg} alt="ícone"/>
          <h3>Centralize a comunicação</h3>
          <p>
            Agende entrevistas, comunique-se com os candidatos e com o seu time,
            crie testes e receba documentos sem sair da plataforma, <span>reduzindo 
            em até 30% seu tempo de fechamento de vagas.</span>
          </p>
        </div>

        <div className="search">
          <img src={searchImg} alt="ícone"/>
          <h3>Contrate a pessoa certa</h3>
          <p>
            Atraia até 3x mais candidatos com as integrações com job boards e 
            ordene os talentos de maior fit com a sua empresa automaticamente, 
            usando a inteligência artificial mais avançada do mercado.
          </p>
        </div>

        <div className="data">
          <img src={dataImg} alt="ícone"/>
          <h3>Analise seus dados</h3>
          <p>
          Use nossos dashboards e relatórios para analisar dados do processo 
          de contratação da sua empresa <span>e diminua em até 80% seu custo 
          operacional do processo seletivo.</span>
          </p>
        </div>
      </Footer>
    </Container>
  );
}