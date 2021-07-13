import { createContext, ReactNode, useEffect, useState } from "react";

interface Plan {
    id: number;
    name: string;
    description: string;
    discount: number;
    price: number;
}

interface PlanProviderProps {
    children: ReactNode;
}

export const PlansContext = createContext<Plan[]>([]);

export function PlansProvider ({ children }: PlanProviderProps){
    const [plans, setPlans] = useState<Plan[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/plan').then(response => response.json()).then(data => setPlans(data))
    }, []);

    return(
        <PlansContext.Provider value={plans}>
            {children}
        </PlansContext.Provider>
    );
}