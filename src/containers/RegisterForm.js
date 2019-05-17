import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import registerFormConfig from '../config/forms/register';
import store from '../store';
import createReduxForm from './util/createReduxForm';

const RegisterReduxForm = createReduxForm(store.constants.auth.registerFormKey, registerFormConfig);

const mapDispatchToProps = dispatch => ({
  onSubmit: bindActionCreators(store.actions.auth.uiActions.register, dispatch),
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(RegisterReduxForm);
