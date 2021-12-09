import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTranscationModal: () => void;
}

export function Header({ onOpenNewTranscationModal } : HeaderProps) {
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="finanças pessoais" />
                <button type="button" onClick={onOpenNewTranscationModal}>Nova Transação</button>

            </Content>
        </Container>
    );
}