import { useState } from "react";
import { Container, PlanModal, Close } from "./styles";


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
            
            <PlanModal open={isPlanModalOpen} onClose={handleClosePlanModal}>
                <Close className="Close" onClick={handleClosePlanModal}/>
                <div> 
                    <h1>{name}</h1>
                </div>
                <div> 
                <p>Com o plano {name}, você tem {description} nas viagens da IHC Transportes. </p>
                </div>
                <div> 
                <h2>
                    {new Intl.NumberFormat('pt-BR', {style:'currency',currency: 'BRL'}).format(price)}/mês
                </h2>
                </div>


            </PlanModal>
        </Container>
    )
}