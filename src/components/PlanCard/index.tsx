import { useState } from "react";
import { Container, PlanModal,Close } from "./styles";

interface PlanProps {
    name: string;
    description: string;
    price: number;
    discount: number;
}

export function PlanCard({name, description, price, discount}: PlanProps){

    const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
    
    function handleOpenPlanModal() {
        setIsPlanModalOpen(true);
    }

    function handleClosePlanModal() {
        setIsPlanModalOpen(false);
    }

    return (
        <Container>
            <header>
                <p>{description}</p>
            </header>
            <div>
                <h2>{name}</h2>
            </div>
            <div>
                <button type="button" onClick={handleOpenPlanModal}>Confira</button>
            </div>
            
            <PlanModal isOpen={isPlanModalOpen} onRequestClose={handleClosePlanModal}>
                <Close className="Close" onClick={handleClosePlanModal}/>
                <h1>{name}</h1>
                <p>Com o plano {name}, você tem {description} nas viagens da IHC Transportes. </p>
                <p>
                    {new Intl.NumberFormat('pt-BR', {style:'currency',currency: 'BRL'}).format(price)} /mês
                </p>


            </PlanModal>
        </Container>
    )
}