import { Container } from "./styles";

export function TransactionsTables() {
    return(
        <Container>
            <table>
                <thead>
                   <tr>
                    <th>Titulo</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr> 
                </thead>

                <tbody>
                  <tr> 
                    <td>Desenvolvimento de sites</td>
                    <td>R$10000</td>
                    <td>Venda</td>
                    <td>26/02/2022</td>
                  </tr> 
                  <tr> 
                    <td>Pizza</td>
                    <td>- R$1000</td>
                    <td>Compra</td>
                    <td>27/02/2022</td>
                  </tr> 
                  <tr> 
                    <td>Consultoria</td>
                    <td>R$1000</td>
                    <td>Venda</td>
                    <td>26/02/2022</td>
                  </tr> 
                </tbody>
            </table>
        </Container>
    )
}