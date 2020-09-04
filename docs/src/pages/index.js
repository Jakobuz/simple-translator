import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Features from '../components/features';

export default () => (
  <Layout hasSidebar={false}>
    <Hero />

    <Features />
  </Layout>
);
