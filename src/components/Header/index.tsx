
import Link from 'next/link';
import { Container, Content } from './styles';

export function Header() {
    return (
        <Container>
            <Content>
                <Link href="/"><a>IHC Transportes</a></Link>
                <div>
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/simulador"><a>Simulador</a></Link>
                    <Link href="/sobre"><a>Sobre Nós</a></Link>
                </div>
            </Content>
        </Container>
    )
}