import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';

export default function Button({onPress, title, style, textStyle, isLoading}) {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: '#006AF7',
          paddingHorizontal: scale(15),
          paddingVertical: scale(5),
          borderRadius: scale(20),
          justifyContent: 'center',
          alignItems: 'center',
        },
        style,
      ]}
      onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator size={'large'} color={'#fff'} />
      ) : (
        <Text style={[{fontSize: scale(15), color: '#fff'}, textStyle]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
