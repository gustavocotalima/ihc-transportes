import { Header } from "../components/Header";
import { Plans } from "../components/Plans";
import { Footer } from "../components/Footer";
import { GlobalStyle } from "../styles/global"
import { Content } from "../styles/sobrenos"
import { PlansProvider } from "../contexts/PlansContext";
import {} from "../services/index"

export default function SobreNos() {
  return (
      <>
        <Header/>
        <Content>
          <h1>Sobre a IHC Transportes</h1>
          <p>
          Em dezembro de 2020 a Empresa IHC Transportes adquiriu a frota de uma companhia que estava fechando que tinha rotas entre as cidades de Belo Horizonte,
           Itabira, João Monlevade e Nova Era. 
          </p>
          <p>
            A manutenção da frota é acompanhada de perto e executada por profissionais qualificados. 
            Os motoristas participam de treinamentos, são avaliados periodicamente e recebem orientação necessária para garantir a saúde física e emocional. 
            Na IHC Transportes, é preciso ser muito mais que um condutor de veículos. 
            Um motorista é o profissional que transporta sonhos, que transporta vidas, sempre com conforto e segurança.
          </p>
          <p>
            A história da IHC Transportes viaja pelo ônibus. 
            Em cada passageiro que a IHC transporta, fica a contribuição para que essa história continue. 
            Dirigir pelas estradas brasileiras é um privilégio, mas também um desafio, e exige mais do que habilidade e preparo técnico: 
            exige comprometimento e dedicação. A Gontijo leva a sério a sua missão e princípios. Tudo para você viajar tranquilamente! 
            Entendemos que somos escolhidos pelos nossos clientes, por isso procuramos sempre atender às suas necessidades e expectativas. 
            Viagens que levam sonhos e constroem o futuro. Sempre em boa companhia, e na melhor direção. O Brasil te espera. Nós te levamos!
          </p>
          <h1>Frota</h1>
          <p>
              A IHC Trasportes possui uma das mais modernas frotas do Brasil. Atualmente a frota da IHC ultrapassa a marca de 15 veículos, 
              A empresa investe anualmente na renovação da frota e, diariamente, na manutenção preventiva e corretiva de seus ônibus. 
              Mais de 250 itens são substituídos preventivamente por profissionais capacitados e treinados diretamente pelos fabricantes dos componentes. 
              Todo veículo no término de viagem e antes de iniciar a próxima é submetido à revisão mecânica e de carroceria, 
              incluindo assentos e sanitários. É abastecido, lavado e higienizado internamente, 
              visando disponibilizar um veículo que ofereça o transporte com segurança, conforto e pontualidade.
          </p>
        </Content>
        <PlansProvider>
          <Plans/>
        </PlansProvider>
        <Footer/>
        <GlobalStyle/>
      </>
  );
}
