import logoLightImg from '../../assets/logo-light.svg';
import facebookImg from '../../assets/logo-facebook.svg';
import youtubeImg from '../../assets/logo-youtube.svg';
import linkedinImg from '../../assets/logo-linkedin.svg';
import instagramImg from '../../assets/logo-insta.svg';

import { Container, Content, RealFooter } from './styles';

export function Footer() {
  return (
    <Container>
      <Content>
        <div className="collumn-one">
          <div className="footer-one">
            <p>Produtos</p>
            <p>Recrutamento e seleção</p>
            <p>Admissão</p>
            <p>Planos</p>
            <p>Histórico de sucesso</p>
            <p>Entenda o ROI</p>
            <p>Solicite uma demonstração</p>
          </div>
          <div className="footer-two">
            <p>O que nossos clientes dizem</p>
            <p>Transformação digital (Vivo)</p>
            <p>Vagas Operacionais (Randon)</p>
            <p>Experiência de usuários (Solar)</p>
            <p>Veja outros cases de sucesso</p>
          </div>
        </div>

        <div className="collumn-two">
          <div className="footer-two">
            <p>Conteúdos para RH</p>
            <p>Blog</p>
            <p>Livros digitais (e-books)</p>
            <p>Planilhas e ferramentas</p>
            <p>Cursos - Gupy Academy</p>
            <p>Eventos - Gupy Conecta</p>
            <p>Todos os materiais</p>
          </div>

          <div className="footer-two">
            <p>Sobre a plataforma</p>
            <p>Inteligência Artificial</p>
            <p>Sobre a LGPD</p>
            <p>O que há de novo na Gupy</p>
          </div>
        </div>

        <div className="collumn-three">
          <div className="footer-two">
            <p>Sobre nós</p>
            <p>A Gupy</p>
            <p>Trabalhe conosco (negócios)</p>
            <p>Trabalhe conosco (tecnologia)</p>
            <p>Gupy para candidatos</p>
          </div>

          <div className="footer-two">
            <p>Contato e ajuda</p>
            <p>Imprensa, Eventos e Parcerias</p>
            <p>Suporte para as empresas</p>
            <p>Suporte para os candidatos</p>
          </div>
        </div>

        <div className="collumn-four">
          <span>Newsletter</span>
          <p>
            Receba os melhores conteúdos de RH,
            <br /> 
            em primeira mão, direto no seu e-mail
          </p>

          <input type="text" placeholder="Nome"/>
          <input type="email" placeholder="Email"/>

          <button className="signup" type="button">Inscrever-se</button>
          <br />
          <span className="talk">Quer falar com um vendedor?</span>

          <p className="last-p">
            Solicite uma demonstração do nosso produto e saiba como você pode 
            mudar o Recrutamento e Seleção da sua empresa.
          </p>

          <button className="last-button" type="button">
            Solicitar uma demonstração
          </button>
        </div>
      </Content>

      <RealFooter>
        <img src={logoLightImg} alt="Gupy"/>

        <div className="text">
          <p>©2015-2020 Gupy. Todos os direitos reservados.</p>
          <p>Política de privacidade</p>
        </div>

        <div className="logos">
          <img src={facebookImg} alt="Facebook"/>
          <img src={youtubeImg} alt="Youtube"/>
          <img src={linkedinImg} alt="Linkedin"/>
          <img src={instagramImg} alt="Instagram"/>
        </div>
      </RealFooter>
    </Container>
  );
}