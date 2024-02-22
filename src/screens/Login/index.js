import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {screenHeight, screenWidth} from '../../constant';
import Button from '../../component/Button';
import CustomTextInput from '../../component/CustomTextInput';

export default function Login({navigation, route}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isHide, setIsHide] = useState(false);

  const {type} = route?.params;
  console.log(type);

  const onLogin = async () => {
    if (email.length == 0) {
      alert('Please enter your email address');
      return;
    } else if (password.length == 0) {
      alert('Please enter your password');
    } else if (!emailRegex.test(email)) {
      alert('Please enter valid email');
    } else if (password.length < 8) {
      alert('Password at least 8 character');
    } else {
    }
  };
  return (
    <SafeAreaView>
      <View
        style={{
          height: scale(screenHeight - 200),
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#eaeaea',
        }}>
        <Text style={{fontSize: scale(20), fontWeight: 'bold'}}>
          {type} Login
        </Text>
        <View style={{marginVertical: scale(20)}}>
         
          
          <CustomTextInput
            label={'Email'}
            placeholder={'Enter your email'}
            value={email}
            onChangeText={setEmail} 
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: scale(40),
            }}>
            <Button title={'Login'} onPress={onLogin} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
