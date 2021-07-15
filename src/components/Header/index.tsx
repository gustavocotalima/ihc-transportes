
import Link from 'next/link';
import { useState } from 'react';
import { Container, Content, HeaderMenu, Bars } from './styles';

export function Header() {
    const [open, setOpen] = useState(false);
    return (
        <Container>
            <Content>
                <Link href="/"><a>IHC Transportes</a></Link>
                <Bars onClick={() => setOpen(!open)}/>
                <HeaderMenu className={String(open)}>
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/simulador"><a>Simulador</a></Link>
                    <Link href="/sobrenos"><a>Sobre Nós</a></Link>
                </HeaderMenu>
            </Content>
        </Container>
    )
}