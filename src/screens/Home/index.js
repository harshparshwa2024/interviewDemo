import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import Button from '../../component/Button';
import { useSelector } from 'react-redux';

export default function Home({navigation}) {
  const saad= useSelector(state=>state)
  console.log(saad);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 100,
      }}>
      <Text>Choose Login</Text>

      <Button
        title={'Admin'}
        style={{width: scale(250),marginVertical:scale(20)}}
        onPress={() => {
          navigation.navigate('Login', {type: 'Admin'});
        }}
      />

      <Button
        title={'User'}
        style={{width: scale(250)}}
        onPress={() => {
          navigation.navigate('Login', {type: 'User'});
        }}
      />

<Button
        title={'Create Account'}        style={{width: scale(250),marginVertical:scale(20)}}

        onPress={() => {
          navigation.navigate('Register',);
        }}
      />
    </View>
  );
}
