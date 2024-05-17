import React from "react";
import TextInput from "react-native-paper/src/components/TextInput/TextInput";

interface FormInputProps {
  label: string;
  type?: string;
  required?: boolean;
  value?: any;
  onChangeText?: any;
  secureTextEntry?: boolean;
  right?: React.ReactNode;
  left?: React.ReactNode;
}

const CustomInput: React.FC<FormInputProps> = ({
  label,
  type,
  required,
  value,
  onChangeText,
  secureTextEntry,

  right,
  left,
  ...otherProps
}) => {
  return (
    <TextInput
      style={{
        backgroundColor: "white",
        fontSize: 12,
        color: "black",
        marginTop: 6,
      }}
      textColor="black"
      label={label}
      mode="outlined"
      autoCapitalize="none"
      outlineColor="#E6E8EE"
      activeOutlineColor="#F7951C"
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      left={left}
      right={right}
      {...otherProps}
    />
  );
};

export default CustomInput;
