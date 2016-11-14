import { connect } from 'react-redux';
import Accounts from '@accounts/accounts';
import accountRoutes from './accountRoutes';

export { accountRoutes };

const connectAccounts = (Component) => {
  const mapStateToProps = (state) => {
    // In case the consuming appplication has an immutable redux store
    const accounts = Accounts.getAccountsState(state);
    return ({
      formType: accounts.formType,
      login: accounts.forms.login,
      config: Accounts.ui._options,
    });
  };

  const mapDispatchToProps = (dispatch, { history }) => ({
    onSubmitLogin: async ({ user, password }) => {
      try {
        await Accounts.login({ user, password });
        // On succesful login, redirect the browser
        history.push(Accounts.ui._options.homeRoutePath);
      } catch (err) {
        // TODO Handle error
        console.log(err);
      }
    },
    onChangeField: ({ form, field, value }) => Accounts.setField({ form, field, value }),
  });

  return connect(mapStateToProps, mapDispatchToProps)(Component);
};

export { connectAccounts };
