import { Container } from "./styles";

interface PlanProps {
    name: string;
    description: string;
    price: number;
    discount: number;
}

export function PlanCard({name, description, price, discount}: PlanProps){
    return (
        <Container>
            <header>
                <p>{description}</p>
            </header>
            <div>
                <h2>{name}</h2>
            </div>
            <div>
                <button type="submit" data-testid="PlanCardButton">Confira</button>
            </div>
            
        </Container>
    )
}