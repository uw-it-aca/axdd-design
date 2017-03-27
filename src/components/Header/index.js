import React from 'react';
import Wrapper from './Wrapper';
import H1 from '../H1';

function Header(props) {
    return (
        <Wrapper>
            <H1>{props.title}</H1>
        </Wrapper>
    );
}

export default Header;
