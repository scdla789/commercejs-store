import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import Image from 'next/image';

const About = () => (
  <Root>
    <Head>
      <title>About | commerce</title>
    </Head>
    <div className="about-container">
      {/* Row */}
      <div className="row mt-5 pt-5 about-hero">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
            <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
              <h2 className="font-size-header mb-4">
                Mistletoe
              </h2>
              <h4 className="font-size-subheader mb-4">
                This is a store defined by elevation, freedom and the satisfaction of productivity as such<a href="https://commercejs.com/" target="_blank" className="cjs-link" rel="noopener noreferrer"></a>.
              </h4>
              <div className="about-cjs mt-3 d-flex flex-row">
                
              </div>
            </div>
          </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <Image src="/cjs-illustration.svg" alt="Commerce.js illustration"/>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
     

      {/* Row 3 */}
  

      {/* Row 4 */}
      <div className="row">
       

       
      </div>
    </div>
    <Footer />
  </Root>
);

export default About;
