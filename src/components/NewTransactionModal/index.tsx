import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay } from "./styles";
import { X } from "phosphor-react";

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Overlay>
                <Content>
                    <Dialog.Title>Nova transação</Dialog.Title>

                    <CloseButton>
                        <X />
                    </CloseButton>

                    <form>
                        <input type="text" placeholder="Descrição" required/>
                        <input type="number" placeholder="Categoria" required/>
                        <input type="text" placeholder="Preço" required/>

                        <button type="submit">
                            Cadastrar
                        </button>
                    </form>
                    
                </Content>
            </Overlay>
        </Dialog.Portal>
    )
}