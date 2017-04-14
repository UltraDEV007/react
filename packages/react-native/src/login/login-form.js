import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, StyleSheet } from 'react-native';

import UserField from './components/user-field.container';
import PasswordField from './components/password-field.container';

export class LoginForm extends Component {
  static propTypes = {
    style: View.propTypes.style,
    fieldsStyle: TextInput.propTypes.style,
    onSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool,
    disableSubmit: PropTypes.bool,
    error: PropTypes.string,
    renderUserField: PropTypes.func,
    renderPasswordField: PropTypes.func,
    renderSubmitButton: PropTypes.func,
    renderErrorLabel: PropTypes.func,
  };

  static defaultProps = {
    submitting: false,
    error: null,
    renderSubmitButton: null,
    renderErrorLabel: null,
    renderUserField: null,
    renderPasswordField: null,
    disableSubmit: true,
  };

  renderButton() {
    const { renderSubmitButton, onSubmit, submitting, disableSubmit: disabled } = this.props;

    if (renderSubmitButton) return renderSubmitButton({ onSubmit, disabled });

    return (
      <Button
        disabled={disabled}
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

  renderUserField() {
    const { fieldsStyle, renderUserField } = this.props;

    if (renderUserField) return renderUserField();

    return (
      <UserField style={fieldsStyle} />
    );
  }

  renderPasswordField() {
    const { fieldsStyle, renderPasswordField } = this.props;

    if (renderPasswordField) return renderPasswordField();

    return (
      <PasswordField style={fieldsStyle} />
    );
  }

  render() {
    const { style } = this.props;
    return (
      <View style={[styles.container, style]}>
        {this.renderUserField()}
        {this.renderPasswordField()}
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
  },
});
