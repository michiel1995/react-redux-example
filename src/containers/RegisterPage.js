import React from 'react';
import { connect } from 'react-redux';
import RegisterPage from '../pages/register';
import store from '../store';

const RegisterPageContainer = ({ ...props }) => <RegisterPage {...props} />;

const mapStateToProps = state => ({
  isRegistered: store.selectors.auth.isRegistered(state),
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterPageContainer);
