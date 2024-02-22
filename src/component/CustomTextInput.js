import React, {useState} from 'react';
import { Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { scale } from 'react-native-size-matters';
import { screenWidth } from '../constant';

export default function CustomTextInput(
  {labelStyle, value, textInputStyle, placeholder, containerStyle, isSecurity,label,onChangeText},
  props,
) {
  const [isHide, setIsHide] = useState(false);
  return (
    <View>
      <Text style={[{fontSize: scale(14)}, labelStyle]}>{label}</Text>

      <View
        style={[
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: scale(screenWidth * 0.7),
            alignItems: 'center',
            borderWidth: 1,
            padding: scale(10),
            borderRadius: scale(8),
            borderColor: '#999',
            marginBottom: scale(10),
          },
          containerStyle,
        ]}>
        <TextInput
          style={[{
            color: 'black',
            width: isSecurity?'90%':"100%",
            fontSize:scale(14)
          },textInputStyle]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isSecurity?!isHide:false}
          {...props}
        />
        {isSecurity ? (
          <TouchableOpacity onPress={() => setIsHide(!isHide)}>
            <Text style={{fontSize: scale(10), color: '#000'}}>
              {isHide ? 'Hide' : 'Show'}
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}
