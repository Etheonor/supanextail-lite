import Contact from 'components/Contact';
import Layout from 'components/Layout';
import { NextSeo } from 'next-seo';

const ContactPage = (): JSX.Element => (
  <>
    <NextSeo
      title="SupaNexTail | Contact"
      description="This is the contact page for SupaNexTail"
    />

    <Layout>
      <Contact />
    </Layout>
  </>
);
export default ContactPage;
