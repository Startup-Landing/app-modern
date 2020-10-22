import React from 'react';
import { StickyProvider } from 'contexts/app/app.provider';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import KeyFeature from 'sections/key-feature';
import CoreFeature from 'sections/core-feature';
import Feature from 'sections/feature';
import PartnerSection from 'sections/partner';
import WorkFlow from 'sections/workflow';
import TestimonialCard from 'sections/testimonial';
import SecurePayment from 'sections/secure-payment';
import Package from 'sections/package';
import Faq from 'sections/faq';

// Load other package css file
import 'react-multi-carousel/lib/styles.css';
import 'react-modal-video/css/modal-video.min.css';
import 'rc-drawer/assets/index.css';

export default function IndexPage() {
  return (
    <StickyProvider>
      <Layout>
        <SEO title="Startup Landing 004" />
        <Banner />
        <KeyFeature />
        <CoreFeature />
        <Feature />
        <PartnerSection />
        <WorkFlow />
        <TestimonialCard />
        <SecurePayment />
        <Package />
        <Faq />
      </Layout>
    </StickyProvider>
  );
}
