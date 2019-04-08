import styled from 'styled-components';
import Icon, { ICONS } from 'components/icon.tsx';

const Title = styled.div`
    font-size: 24px;
    color: #fff000;
    box-shadow: 3px 0 0 5px rgba(0, 0, 0, .3);
`;

function Home() {
    return (
        <>
            <Icon name={ICONS.Close} width="100"/>
            <Icon name={ICONS.Bluetoothon} width="100"/>
            <Title>Welcome To Next.js!</Title>
        </>
    )
}

export default Home
