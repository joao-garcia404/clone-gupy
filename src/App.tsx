import { Footer } from './components/Footer';
import { Guide } from './components/Guide';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Interview } from './components/Interview';
import { Invest } from './components/Invest';
import { Steps } from './components/Steps';
import { StepsTwo } from './components/StepsTwo';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <Guide />
      <Steps />
      <StepsTwo />
      <Invest />
      <Interview />
      <Footer />
    </>
  );
}
