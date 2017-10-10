import React, { PropTypes } from 'react';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';

import styles from './styles';

const InputWithButton = ({ onPress, buttonText, editable }) => null;

InputWithButton.PropTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool,

};

export default InputWithButton;