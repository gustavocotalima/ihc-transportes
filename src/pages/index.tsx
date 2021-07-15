import { Header } from "../components/Header";
import { TicketPrice } from "../components/TicketPrice";
import { Plans } from "../components/Plans";
import { Footer } from "../components/Footer";
import { GlobalStyle } from "../styles/global"
import { PlansProvider } from "../contexts/PlansContext";
import {} from "../services/index"

export default function Home() {
  return (
      <>
        <Header/>
        <TicketPrice/>
        <PlansProvider>
          <Plans/>
        </PlansProvider>
        <Footer/>
        <GlobalStyle/>
      </>
  );
}
