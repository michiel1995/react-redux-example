import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import registerFormConfig from '../config/forms/register';
import actions from '../store/actions';
import createReduxForm from './util/createReduxForm';

const RegisterReduxForm = createReduxForm('auth.registerForm', registerFormConfig);

const mapDispatchToProps = dispatch => ({
  onSubmit: bindActionCreators(actions.auth.uiActions.register, dispatch),
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(RegisterReduxForm);
