import React from 'react';
import Wrapper from './Wrapper';
import Container from '../Container';
import H1 from '../H1';

function Header(props) {
    return (
        <Wrapper>
            <Container>
                <H1>{props.title}</H1>
            </Container>
        </Wrapper>
    );
}

export default Header;
