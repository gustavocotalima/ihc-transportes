import { Header } from "../components/Header";
import { TicketSimulator } from "../components/TicketSimulator";
import { Plans } from "../components/Plans";
import { Footer } from "../components/Footer";
import { GlobalStyle } from "../styles/global"
import { PlansProvider } from "../contexts/PlansContext";
import {} from "../services/index"

export default function SobreNos() {
  return (
      <>
        <Header/>
        <PlansProvider>
          <TicketSimulator />
          <Plans/>
        </PlansProvider>
        <Footer/>
        <GlobalStyle/>
      </>
  );
}
