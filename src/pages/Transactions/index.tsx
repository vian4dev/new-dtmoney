import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return(
        <div>
            <Header/>
            <Summary/>

            <TransactionsContainer>
            <TransactionsTable>
                <tbody>
                    <tr>
                        <td width="50%">Desenvolvimento de site</td>
                        <td>
                            <PriceHighLight variant="income">
                                R$ 12.000,00
                            </PriceHighLight>
                        </td>
                        <td>Venda</td>
                        <td>19/06/2023</td>
                    </tr>
                    <tr>
                        <td width="50%">Hamburger</td>
                        <td> 
                            <PriceHighLight variant="outcome">
                                - R$ 59,00
                            </PriceHighLight>
                        </td>
                        <td>Alimentação</td>
                        <td>20/06/2023</td>
                    </tr>
                </tbody>
            </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}