import React from 'react';
import Layout from '../components/Layout';
import LogoBlock from '../components/LogoBlock';
import RegisterFormContainer from '../containers/RegisterForm';

const Register = () => (
  <Layout>
    <Layout.Split>
      <LogoBlock />
      <Layout.Content>
        <RegisterFormContainer />
      </Layout.Content>
    </Layout.Split>
  </Layout>
);

export default Register;
