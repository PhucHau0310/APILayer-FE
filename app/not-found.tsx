'use client';
import '@/public/styles/theme.css';
import Header from './../components/layouts/Header';
import Footer from './../components/layouts/Footer';
import useScrollToTop from '@/hooks/useScrollToTop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const NotFoundLayout = ({ children }: { children: React.ReactNode }) => {
    const { isVisible, scrollToTop } = useScrollToTop(200);

    return (
        <div className="bg-white relative">
            <Header/>
            <main id="content" role="main">
                <div className="container d-flex align-items-center space-3">
                    <div className="row justify-content-md-center flex-md-grow-1 text-center">
                        <div className="col-md-9 col-lg-6">
                            <img className="max-w-23rem mb-3" src="https://apilayer.com/assets/svg/illustrations/error-number-404.svg"
                                 alt="SVG Illustration"/>
                            <p className="lead">Oops! Looks like you followed a bad link. <br/> If you think this is a
                                problem with us, please <a href="/support">tell us.</a></p>
                            <a className="btn btn-wide btn-primary transition-3d-hover" href="/">Back to Marketplace</a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>

            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 bg-[#f1f3f5] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#004bb5] transition-all opacity-70"
                >
                    <FontAwesomeIcon
                        icon={faAngleUp}
                        size="1x"
                        color="#677788"
                    />
                </button>
            )}
        </div>
    );
};

export default NotFoundLayout;
