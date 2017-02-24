import React, { PropTypes, Component } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, StyleSheet } from 'react-native';

import UserField from './components/user-field.container';
import PasswordField from './components/password-field.container';

export class LoginForm extends Component {
  static propTypes = {
    style: View.propTypes.style,
    fieldsStyle: TextInput.propTypes.style,
    onSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool,
    error: PropTypes.string,
    renderSubmitButton: PropTypes.func,
    renderErrorLabel: PropTypes.func,
  };

  static defaultProps = {
    submitting: true,
    error: null,
    renderSubmitButton: null,
    renderErrorLabel: null,
  };

  renderButton() {
    const { renderSubmitButton, onSubmit, submitting } = this.props;

    if (renderSubmitButton) return renderSubmitButton({ onSubmit });

    return (
      <Button
        onPress={onSubmit}
        title="Login"
        accessibilityLabel="Press here to login"
      >
        <ActivityIndicator
          animating={submitting}
        />
      </Button>
    );
  }

  renderError() {
    const { error, renderErrorLabel } = this.props;
    if (!error) return null;

    if (renderErrorLabel) return renderErrorLabel(error);

    return (
      <Text>{error}</Text>
    );
  }

  render() {
    const { style, fieldsStyle } = this.props;
    return (
      <View style={[styles.container, style]}>
        <UserField style={fieldsStyle} />
        <PasswordField style={fieldsStyle} />
        {this.renderButton()}
        {this.renderError()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
});
