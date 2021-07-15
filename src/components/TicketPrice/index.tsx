import { Container } from './styles';

export function TicketPrice() {
  return(
    <Container>
      <h1>Tabela de preços das passagens</h1>
      <table>
        <thead>
          <tr>
            <th>Origem \ Destino</th>
            <th>Belo Horizonte</th>
            <th>Itabira</th>
            <th>João Monlevade</th>
            <th>Nova Era</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Belo Horizonte</td>
            <td>X</td>
            <td>R$ 40,00</td>
            <td>R$ 38,00</td>
            <td>Não tem</td>
          </tr>
          <tr>
            <td>Itabira</td>
            <td>R$ 38,00</td>
            <td>X</td>
            <td>R$ 15,00</td>
            <td>R$ 16,00</td>
          </tr>
          <tr>
            <td>João Monlevade</td>
            <td>R$ 38,00</td>
            <td>R$ 15,00</td>
            <td>X</td>
            <td>R$ 15,00</td>
          </tr>
          <tr>
            <td>Nova Era</td>
            <td>Não tem</td>
            <td>R$ 15,00</td>
            <td>R$ 15,00</td>
            <td>X</td>
          </tr>
        </tbody>
      </table>

  
    </Container>
  )
}