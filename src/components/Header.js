import styled from 'styled-components';
import logo from '../assets/logo.png';

const StyledHeader = styled.header`
    background-color: #0055ba;
`;

const Header = () => {
    return (
        <StyledHeader>
            <img src={logo} alt="Checkmarx logo" />
        </StyledHeader>
    );
};

export default Header;
