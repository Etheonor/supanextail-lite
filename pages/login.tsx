/*
This is the login/register page. 
You have 2 components, the "AuthComponent" that handle the logic, 
and the "AuthText" that will show the description on the left of the screen
*/

import Layout from 'components/Layout';
import Login from 'components/UI/Login';
import { NextSeo } from 'next-seo';

const LoginPage = (): JSX.Element => {
  return (
    <>
      <NextSeo
        title={`${process.env.NEXT_PUBLIC_TITLE || ''} | Auth`}
        description={`This is the auth page for ${
          process.env.NEXT_PUBLIC_TITLE || ''
        }`}
      />

      <Layout>
        <div className="flex flex-wrap w-full mt-20 justify-evenly">
          <Login />
        </div>
      </Layout>
    </>
  );
};

export default LoginPage;
