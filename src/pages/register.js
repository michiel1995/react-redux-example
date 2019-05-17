import React from 'react';
import Layout from '../components/Layout';
import LogoBlock from '../components/LogoBlock';
import RegisterFormContainer from '../containers/RegisterForm';
import { ReactComponent as Logo } from '../assets/w-4-p-vf-2-small.svg';

const Register = () => (
  <Layout>
    <Layout.Split>
      <LogoBlock />
      <Layout.Content>
        <Logo />
        <div>
          <h1>Welcome!</h1>
          <h6 className="mb-3">Create account to continue</h6>
          <RegisterFormContainer />
        </div>
      </Layout.Content>
    </Layout.Split>
  </Layout>
);

export default Register;
