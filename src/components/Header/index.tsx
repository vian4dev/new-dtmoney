import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as  Dialog from "@radix-ui/react-dialog";
import logoImg from "../../assets/Logo.svg"
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="Logo" />
                <Dialog.Root>
                    <Dialog.Trigger>
                        <NewTransactionButton>Nova Transação</NewTransactionButton>
                    </Dialog.Trigger>
                    <NewTransactionModal/>
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}