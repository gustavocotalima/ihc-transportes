
import { Container, Content } from './styles';

export function Header() {
    return (
        <Container>
            <Content>
                <a href="/"><h1>IHC Transportes</h1></a>
                <div>
                    <a href="/"><h2>Home</h2></a>
                    <a href="/simulador"><h2>Simulador</h2></a>
                    <a href="/sobre"><h2>Sobre Nós</h2></a>
                </div>
            </Content>
        </Container>
    )
}