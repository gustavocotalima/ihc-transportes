import  { useContext, useEffect, useState } from 'react';
import { PlansContext } from '../../contexts/PlansContext';
import { CitiesContainer, Container, Simulator, PlansContainer, Range, Button, ResultContainer} from './styles';

interface City {
    id: number;
    name: string;
}

interface Route {
    id: number;
    origin: number;
    destination: number;
    ticketPrice: number;
}

export function TicketSimulator() {
    const [cities, setCities] = useState<City[]>([]);
    const [routes, setRoutes] = useState<Route[]>([]);
    const plans = useContext(PlansContext);

    useEffect(() => {
        fetch('/api/city').then(response => response.json()).then(data => setCities(data))
        fetch('/api/route').then(response => response.json()).then(data => setRoutes(data))
    }, []);

    const [originCity, setOriginCity] = useState(0);
    const [avaliableDestinationCity, setAvaliableDestinationCity] = useState<boolean[]>([]);
    const [destinationCity, setDestinationCity] = useState(0);
    const [plan, setPlan] = useState(0);
    const [ticketNumber, setTicketNumber] = useState(0);
    const [normalTicketPrice, setNormalTicketPrice] = useState(0);
    const [IHCTicketPrice, setIHCTicketPrice] = useState(0);
    const [simulated, setSimulated] = useState("false");

    function handleChangeOriginCity(newValue: number){
        setOriginCity(newValue);
        setDestinationCity(0);
        checkAvaliableDestinationCity(newValue);
    }

    function checkAvaliableDestinationCity(newValue: number){
        let newAvaliableDestinationCity : boolean[] = [false];
        cities.forEach(City => {
            newAvaliableDestinationCity[City.id] = false;
        });

        routes.forEach(callValue => {
            if (callValue.origin === newValue) {
                newAvaliableDestinationCity[callValue.destination] = true;
            }
        });
        
        setAvaliableDestinationCity(newAvaliableDestinationCity);
    }

    function handleChangeDestinationCity(newValue: number){
        setDestinationCity(newValue);
    }

    function handleChangeTicketNumber(event: any, newValue: number | number[]){
        setTicketNumber(newValue as number);
    }


    function ticketSimulation(){
        let planDiscount : number = 0;
        plans.forEach(p => {
            if (plan===p.id)
                planDiscount=p.discount;
        })

        routes.forEach(route => {
            if (route.origin === originCity && route.destination === destinationCity) {
                setNormalTicketPrice(route.ticketPrice * ticketNumber);
                setIHCTicketPrice((route.ticketPrice-(route.ticketPrice*planDiscount)) * ticketNumber);
            }
        });
        setSimulated("true");
        
    }

    return(
        <Container>
            <h1>Simule o valor passagem com os planos IHC+</h1>
            <Simulator>
                <form>
                    <label>Origem</label>
                    <CitiesContainer>
                        {cities.map(City=>(
                            <Button 
                            type="button" 
                            key={City.id} 
                            isSelected={originCity === City.id}
                            onClick={() => { handleChangeOriginCity(City.id);}}>
                                {City.name}
                            </Button>
                        ))}
                    </CitiesContainer>

                    <label>Destino</label>
                    <CitiesContainer>
                        {cities.map(City=>(
                            <Button 
                            type="button" 
                            disabled={avaliableDestinationCity[City.id]?false:true}
                            key={City.id} 
                            isSelected={destinationCity === City.id}
                            onClick={() => { handleChangeDestinationCity(City.id);}}>
                                {City.name}
                            </Button>
                        ))}
                    </CitiesContainer>


                    <label>Plano</label>
                    <PlansContainer>
                        {plans.map(p => (
                        <Button 
                        type="button" 
                        key={p.id} 
                        isSelected={plan === p.id}
                        onClick={() => {setPlan(p.id);}}>
                            {p.name}
                        </Button>
                        ))}
                    </PlansContainer>

                    <label>Número de viagens no mês:</label>
                    <Range
                    min={0}
                    max={60}
                    value={ticketNumber}
                    valueLabelDisplay="auto"
                    onChange={handleChangeTicketNumber}
                    />
                    <Button
                        type="button" 
                        disabled={(originCity!==0)&&(destinationCity!==0)&&(plan!==0)&&(ticketNumber!==0)?false:true}
                        onClick={ticketSimulation}
                    >
                            Calcular
                    </Button>
                </form>

                <ResultContainer className={simulated}>
                     <div>
                        <header>
                            <p>Custo da passagem padrão</p>
                        </header>
                        <h1 className="red">
                        {new Intl.NumberFormat('pt-BR', {
                            style:'currency',
                            currency: 'BRL'}
                            ).format(normalTicketPrice)}
                        </h1>
                    </div>
                    <div>
                        <header>
                            <p>Custo da passagem com IHC+</p>
                        </header>
                        <h1 className="green"> 
                        {new Intl.NumberFormat('pt-BR', {
                            style:'currency',
                            currency: 'BRL'}
                            ).format(IHCTicketPrice)}
                        </h1>
                    </div>
                    <p>*Simulação não leva em conta a mensalidade do plano.</p>
                </ResultContainer>     
            </Simulator>
        </Container>    
        
    )
}