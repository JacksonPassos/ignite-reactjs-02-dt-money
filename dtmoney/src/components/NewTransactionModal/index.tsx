import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/closed.svg'
import { Container, TransactionTypeContainer } from './style';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
                type="button" 
                onClick={onRequestClose} 
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>
            <Container>
                <h2>Cadastrar transação</h2>

                <input placeholder="Título"/>
                <input placeholder="Preço"/>

                <TransactionTypeContainer>
                    <button type="button">
                        <img src={incomeImg} alt="Entradas"/>
                        <span>Entradas</span>
                    </button>

                    <button type="button">
                        <img src={outcomeImg} alt="Saídas"/>
                        <span>Saídas</span>
                    </button>

                </TransactionTypeContainer>

                <input placeholder="Categoria"/>

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}