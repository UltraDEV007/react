import React, { Component, PropTypes } from 'react';
import { View, TextInput, Text } from 'react-native';
import { styles } from '../styles';

export class PasswordField extends Component {
  static propTypes = {
    ...TextInput.propTypes,
    shouldRenderErrorLabel: PropTypes.bool,
    renderErrorLabel: PropTypes.func,
    error: PropTypes.string,
  };

  static defaultProps = {
    secureTextEntry: true,
    multiline: false,
    autoFocus: false,
    blurOnSubmit: true,
    autoCorrect: false,
    placeholder: "Password",
    autoCapitalize: "none",
    shouldRenderErrorLabel: true,
  };

  clear() {
    if (this.textInput) {
      this.textInput.clear();
    }
  }

  isFocused() {
    return this.textInput && this.textInput.isFocused();
  }

  renderError() {
    const {
      error,
      renderErrorLabel,
      shouldRenderErrorLabel,
    } = this.props;
    if (!shouldRenderErrorLabel || !error) return null;

    if (renderErrorLabel) return renderErrorLabel(error);

    return (
      <Text style={[styles.simpleText]}>{error}</Text>
    );
  }

  render() {
    const { style, ...restProps } = this.props;
    return (
      <View style={[styles.simpleFlexContainer, styles.leftAlignedContainer]}>
        <TextInput
          style={[styles.simpleInput, style]}
          {...restProps}
          ref={ref => this.textInput = ref}
        />

        {this.renderError()}
      </View>
    );
  }
}
