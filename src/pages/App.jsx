import { ScrollContainer, Sticky, batch, Fade, FadeIn, Move} from 'react-scroll-motion'

import Title from './slides/Title';
import Subtitle from './slides/Subtitle'
import About from './slides/About'
import Examples from './slides/Examples'
import Contact from './slides/Contact'

import Page from '../components/Page'

const FadeAnimation = batch(Fade(), Sticky());

/**
 * ScrollContainer for all pages.
 * @author Esteban Ariza <acosta57esteban@gmail.com>
 */
function App() {
  return (
    <>
        <ScrollContainer>

            <Page page={0} theme='secondary' animation={batch(Sticky())} footerTheme='white'>
                <Title/>
            </Page>

            <Page page={1} theme='secondary' animation={batch(FadeIn(), Sticky())} footerTheme='white'/>{/*Intermedio*/}

            <Page page={2} theme='secondary' animation={FadeAnimation} footerTheme='white' footerAnimation={Fade()}>
                <Subtitle/>
            </Page>

            <Page page={3} animation={batch(FadeIn(), Sticky())} footerTheme='secondary' footerAnimation={FadeIn()}/>{/*Intermedio*/}

            <Page page={4} animation={FadeAnimation} footerTheme='secondary' >
                <About/>
            </Page>

            <Page page={5} animation={batch(FadeIn(), Sticky())} footerTheme='secondary' />{/*Intermedio*/}

            <Page theme='secondary' page={6} animation={batch(Sticky(), Move(2000, 0, -2000, 0))} footerTheme='white' footerAnimation={batch(Move(2000, 0, -2000, 0))}>
                <Examples/>
            </Page>

            <Page page={7} animation={batch(FadeIn(), Sticky())} footerTheme='secondary' />{/*Intermedio*/}

            <Page page={8} animation={FadeAnimation} footerTheme='secondary' >
                <Contact lenguage="ES"/>
            </Page>

        </ScrollContainer>
    </>
  );
}

export default App;
