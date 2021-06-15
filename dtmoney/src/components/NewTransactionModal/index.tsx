import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/closed.svg'
import { Container, TransactionTypeContainer, RadioBox } from './style';
import { useState } from 'react';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [type, setType] = useState('deposit')
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
                    <RadioBox 
                        type="button"
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entradas"/>
                        <span>Entradas</span>
                    </RadioBox>

                    <RadioBox 
                        type="button"
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saídas"/>
                        <span>Saídas</span>
                    </RadioBox>

                </TransactionTypeContainer>

                <input placeholder="Categoria"/>

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}