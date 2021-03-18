import vagasImg from '../../assets/vagas.png';
import atracaoImg from '../../assets/atracao.png'

import { Container } from './styles';

interface CanvaProps {
  selected: number;
}

export function Canva({ selected }: CanvaProps) {
  return (
    <Container>
      <div>
        <img src={selected === 1 ? vagasImg : atracaoImg} alt="Vagas plataforma"/>
        <p>
          {
            selected === 1
            ? 'Centralize as solicitações de vagas dos gestores em um só lugar, dando agilidade ao seu time e melhorando a organização dos dados.'
            : 'Alcance milhares de candidatos em poucos cliques utilizando nossas integrações com redes sociais e com os maiores sites de vagas (job boards) do Brasil.'
          }
        </p>
      </div>
    </Container>
  )
}