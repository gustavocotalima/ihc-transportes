
import Link from 'next/link';
import { Container } from "./styles";

export function Footer(){
    return(
        <Container>
            <Link href="/"><a>IHC Transportes</a></Link>
            <p>Copyright 2021 © IHC Transportes</p>
        </Container>
    )
}