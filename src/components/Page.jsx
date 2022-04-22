import React from 'react'
import { ScrollPage, Animator} from 'react-scroll-motion';
import Footer from './Footer';

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
    footerTheme,
    footerAnimation,
}){
    const checkTheme = THEMES.includes(theme) ?
    'page-'+theme : 'page';

    const checkFooterTheme = THEMES.includes(footerTheme) ?
    'text-'+footerTheme : '';

    return(
        <ScrollPage page={page}>
            <Animator animation={animation}>
                <div className={checkTheme}>
                    <div className='pane d-flex flex-row align-items-center'>
                        <div className='container-fluid d-flex flex-column'>
                            {children}
                        </div>
                    </div>
                </div>
            </Animator>
            <Animator animation={footerAnimation}>
                <div className='fixed-bottom'>
                    <Footer className={checkFooterTheme}/>
                </div>
            </Animator>
        </ScrollPage>
        
    );
}

export default Page;