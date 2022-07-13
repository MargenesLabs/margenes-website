import React from 'react'
import { ScrollPage, Animator} from 'react-scroll-motion';
import Footer from '../footer/Footer';

const THEMES = ['primary','secondary','success','danger','warning','info','light','dark','muted','white']

/**
 * A generic Page.
 * @author Esteban Ariza <acosta57esteban@gmail.com>
 */
function Page ({
    children,
    theme,
    page,
    animation,
    footer,
    footerAnimation,
    limit
}){
    const checkLimit = limit ?
    'page' : 'wpage';

    const checkTheme = THEMES.includes(theme) ?
    checkLimit+'-'+theme : checkLimit;

    const checkFooterTheme = THEMES.includes(theme) ?
    theme : 'light';

    return(
        <ScrollPage page={page}>
            <Animator animation={animation}>
                <div className={checkTheme}>
                    <div className='pane d-flex flex-row align-items-center'>
                        {children}
                    </div>
                </div>
            </Animator>
            {footer && 
                <Animator animation={footerAnimation}>
                    <div className='fixed-bottom justify-content-end'>
                        <Footer theme={checkFooterTheme}/>
                    </div>
                </Animator>
            }
        </ScrollPage>
        
    );
}

Page.defaultProps = {
    theme: "light",
    footer: true,
    limit: true,
}

export default Page;