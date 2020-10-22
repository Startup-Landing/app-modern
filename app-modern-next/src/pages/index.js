import React from 'react';
import dynamic from 'next/dynamic';
const SEO = dynamic(import('components/seo'));
const Layout = dynamic(import('components/layout'));
const Banner = dynamic(import('sections/banner'));
const KeyFeature = dynamic(import('sections/key-feature'));
const CoreFeature = dynamic(import('sections/core-feature'));
const Feature = dynamic(import('sections/feature'));
const PartnerSection = dynamic(import('sections/partner'));
const WorkFlow = dynamic(import('sections/workflow'));
const TestimonialCard = dynamic(import('sections/testimonial'));
const SecurePayment = dynamic(import('sections/secure-payment'));
const Package = dynamic(import('sections/package'));
const Faq = dynamic(import('sections/faq'));

export default function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Startup App Modern Landing"
        description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
      />
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
  );
}
