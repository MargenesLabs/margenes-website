import { ScrollContainer, Sticky, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut } from 'react-scroll-motion'

import Title from './slides/title/Title';
import Subtitle from './slides/subtitle/Subtitle'
import About from './slides/about/About'
import Services from './slides/services/Services'
// import Examples from './slides/examples/Examples'
import Contact from './slides/contact/Contact'

import Page from '../components/page/Page'
import '../components/dictionaryI18next/dictionaryI18next'

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

            {/* Intermedio */}
            <Page page={1} theme='light' footer={false}/>

            <Page page={2} theme='light' animation={batch(FadeIn(0,1), FadeOut(1,0.75), Sticky())} footerAnimation={FadeIn()}>
                <Subtitle/>
            </Page>

            {/*Intermedio*/}
            <Page page={3} theme='light' animation={batch(FadeIn(), Sticky())} footerAnimation={Fade()}/>

            <Page page={4} theme='secondary' animation={batch(FadeIn(), Sticky())} footerAnimation={FadeIn()}>
                <About/>
            </Page>

            {/*Intermedio*/}
            <Page page={5} theme='secondary' animation={batch(FadeIn(), Sticky())} footerAnimation={FadeIn()}/>

            {/* <Page page={6} theme='secondary' animation={batch(Sticky(), MoveIn(0, 2000, 0, -2000))} footerAnimation={Fade()}>
                <Examples/>
            </Page> */}

            <Page page={6} theme='secondary' animation={batch(Sticky(), MoveIn(0, 2000), MoveOut(0,-400), FadeIn())} footerAnimation={Fade()} limit={false}>
                <Services/>
            </Page>
            
            {/*Intermedio*/}
            <Page page={7} theme='light' animation={batch(Sticky(), MoveIn(0, 1000))} footerAnimation={FadeIn()}/>

            <Page page={8} theme='light' animation={FadeAnimation} footerAnimation={FadeIn()}>
                <Contact lenguage="ES"/>
            </Page>

        </ScrollContainer>
    </div>
  );
}

export default App;
