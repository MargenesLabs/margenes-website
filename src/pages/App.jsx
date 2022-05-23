import { ScrollContainer, Sticky, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut} from 'react-scroll-motion'

import Title from './slides/title/Title';
import Subtitle from './slides/subtitle/Subtitle'
import About from './slides/about/About'
import Examples from './slides/examples/Examples'
import Contact from './slides/contact/Contact'

import Page from '../components/Page'

const FadeAnimation = batch(Fade(), Sticky());

/**
 * ScrollContainer for all pages.
 * @author Esteban Ariza <acosta57esteban@gmail.com>
 */
function App() {
  return (
    <div>
        <ScrollContainer>
            <Page page={0} theme='light' animation={batch(Sticky(), Move(0, 2000, 0, -2000))} footer={false}>
                <Title/>
            </Page>

            <Page page={1} theme='light' animation={batch(FadeIn(), Sticky())} footer={false}/>{/*Intermedio*/}

            <Page page={2} theme='light' animation={FadeAnimation} footerAnimation={FadeIn()}>
                <Subtitle/>
            </Page>

            <Page page={3} theme='light' animation={batch(FadeIn(), Sticky())} footerAnimation={Fade()}/>{/*Intermedio*/}

            <Page page={4} theme='secondary' animation={batch(FadeIn(), Sticky())} footerAnimation={FadeIn()}>
                <About/>
            </Page>

            <Page page={5} theme='secondary' animation={batch(FadeIn(), Sticky())} footerAnimation={FadeIn()}/>{/*Intermedio*/}

            <Page page={6} theme='secondary' animation={batch(Sticky(), MoveIn(0, 2000, 0, -2000))} footerAnimation={Fade()}>
                <Examples/>
            </Page>

            <Page page={7} theme='light' animation={batch(Sticky(), Move(0, 1000, 0, -1000))} footerAnimation={FadeIn()}/>{/*Intermedio*/}

            <Page page={8} theme='light' animation={FadeAnimation} footerAnimation={FadeIn()}>
                <Contact lenguage="ES"/>
            </Page>
        </ScrollContainer>
    </div>
  );
}

export default App;
