import React, {useEffect, useState} from 'react';
import {
  Button,
  Dimensions,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {emailRegex, screenHeight, screenWidth} from '../../constant';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const onLogin = async () => {
  //   if (email.length == 0) {
  //     alert('Please enter your email address');
  //     return;
  //   } else if (password.length == 0) {
  //     alert('Please enter your password');
  //   } else if (!emailRegex.test(email)) {
  //     alert('Please enter valid email');
  //   }else if (password.length<8) {
  //     alert('Password at least 8 character');
  //   }
  // };
  return (
    <SafeAreaView>
      <View
        style={{
          height: scale(screenHeight - 100),
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#eaeaea',
        }}>
        <Text style={{fontSize: scale(20), fontWeight: 'bold'}}>Login</Text>
        <View style={{marginVertical: scale(20)}}>
          <Text style={{fontSize: scale(14)}}>Email</Text>
          <TextInput
            style={{
              borderWidth: 1,
              padding: scale(10),
              width: scale(screenWidth * 0.7),
              borderRadius: scale(8),
              borderColor: '#999',
              marginBottom: scale(10),
            }}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={{fontSize: scale(14)}}>Password</Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: scale(screenWidth * 0.7),
              alignItems: 'center',
              borderWidth: 1,
              padding: scale(10),
              borderRadius: scale(8),
              borderColor: '#999',
              marginBottom: scale(10),
            }}>
            <TextInput
              style={{
                color: 'black',
                width: '90%',
                borderWidth: 1,
              }}
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: scale(40),
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#006AF7',
                paddingHorizontal: scale(15),
                paddingVertical: scale(5),
                borderRadius: scale(20),
              }}
              // onPress={onLogin}
            >
              <Text style={{fontSize: scale(15), color: '#fff'}}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
