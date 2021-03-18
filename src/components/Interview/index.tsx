import ReactPlayer from 'react-player'

import logoVivoImg from '../../assets/logo-vivo.svg';
import heinzImg from '../../assets/heinz.svg';
import cieloImg from '../../assets/cielo.svg';
import embraerImg from '../../assets/embraer.svg';
import totvsImg from '../../assets/totvs.svg';
import viavarejoImg from '../../assets/viavarejo.svg';

import { Container, Content } from './styles';

export function Interview() {
  return (
    <Container>
      <Content>
        <h2>
          6 das 10 marcas mais valiosas do Brasil usam a Gupy.
        </h2>
        <p>Fonte: Interbrand 2019</p>

        <div className="main">
          <div className="player">
            <ReactPlayer 
              url="https://www.youtube.com/watch?v=B-EUnyFVlvU"
              controls
              width = "100%"
              height = "100%"
            />
          </div>

          <div className="interview">
            <h3>
              "O diferencial da Gupy foi a forma como eles conduziram todo o 
              processo de leitura das nossas necessidades e apresentaram não só 
              uma solução pronta, mas o mindset de mudança que a Vivo buscava."
            </h3>
            <p>Willian Katayama</p>
            <span>Gerente Sênior de Atração de Talentos</span>
            <img src={logoVivoImg} alt="Vivo"/>
          </div>
        </div>
        <div className="companies">
            <img src={heinzImg} alt="Heinz"/>
            <img src={cieloImg} alt="Cielo"/>
            <img src={embraerImg} alt="Embraer"/>
            <img src={totvsImg} alt="Totvs"/>
            <img src={viavarejoImg} alt="Via Varejo"/>
        </div>
      </Content>
    </Container>
  )
}