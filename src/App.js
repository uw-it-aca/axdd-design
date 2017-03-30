import React, { Component } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Container from './components/Container';
import H2 from './components/H2';
import P from './components/P';
import A from './components/A';
import './global-styles';

class App extends Component {
    render() {
        return (
            <div>
                <Header title="Promoting the importance of User Experience (UX) Design in the creation of tools, applications, and services at the University of Washington" />
                <Section>
                    <Container>
                        <H2>Who we are</H2>
                        <P>
                            UX@UW is comprised of … template content [UX@UW’s contributors are design professionals from different units. If you are a design professional from the UW community who values UX and would like to contribute to this blog, please shoot us a line at ux@uw.edu. We always welcome new contributors!]
                        </P>
                    </Container>
                </Section>
                <Section>
                    <Container>
                        <H2>Thoughts on Design</H2>
                        <P>
                            Follow our <A href="www.google.com">UX@UW Blog on Medium</A> to learn how we work and think about design. There you can find our collection of case studies, guides, tips, and presentations.
                        </P>
                        <P>
                            UX@UW’s contributors are design professionals from different units. If you are a design professional from the UW community and would like to contribute to the blog, please shoot us a line at ux@uw.edu. We always welcome new contributors!
                        </P>
                    </Container>
                </Section>
                <Section>
                    <Container>
                        <H2>Popular Posts</H2>
                    </Container>
                </Section>
                <Section>
                    <Container>
                        <H2>Consultations</H2>
                    </Container>
                </Section>
            </div>
        );
    }
}

export default App;
