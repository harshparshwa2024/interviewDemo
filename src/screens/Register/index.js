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
import {emailRegex, screenHeight, screenWidth} from '../../constant';
import CustomTextInput from '../../component/CustomTextInput';
import Button from '../../component/Button';
import RNDateTimePicker from '@react-native-community/datetimepicker';

export default function Register({navigation}) {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState(new Date());
  const [gender, setGender] = useState('Male');
  const [habit, setHabit] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const onRegister = async () => {
    if (email.length == 0) {
      alert('Please enter your email address');
      return;
    } else if (password.length == 0) {
      alert('Please enter your password');
    } else if (!emailRegex.test(email)) {
      alert('Please enter valid email');
    } else if (password.length < 8) {
      alert('Password at least 8 character');
    }
  };
  return (
    <SafeAreaView>
      <View
        style={{
          height: scale(screenHeight),
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: '#eaeaea',
        }}>
        <Text style={{fontSize: scale(20), fontWeight: 'bold'}}>Register</Text>
        <View style={{marginVertical: scale(20)}}>
          <CustomTextInput
            label={'Name'}
            placeholder={'Enter your name'}
            value={name}
            onChangeText={setName}
          />
          <CustomTextInput
            label={'Email'}
            placeholder={'Enter your email'}
            value={email}
            onChangeText={setEmail}
          />
          <CustomTextInput
            label={'Password'}
            placeholder={'Enter your password'}
            value={password}
            onChangeText={setPassword}
            isSecurity={true}
          />
          <CustomTextInput
            label={'PhoneNumber'}
            placeholder={'Enter your Phone Number'}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="numeric"
            maxLength={10}
          />
          <Text>DOB</Text>
          <TouchableOpacity
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
            ]}>
            <Text style={{fontSize: scale(14), color: dob==new Date() ? '#000' : '#999'}}>
              {dob == new Date() ? 'Select date' : ''}
            </Text>
          </TouchableOpacity>
          <View>
            <Text style={{fontSize: scale(14)}}>Gender</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: scale(10),
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: scale(10),
                }}>
                <TouchableOpacity
                  style={{
                    borderWidth: 2,
                    height: scale(20),
                    width: scale(20),
                    borderRadius: scale(10),
                    borderColor: '#999',
                    backgroundColor:
                      gender == 'Male' ? '#006af7' : 'transparent',
                    marginRight: scale(5),
                  }}
                  onPress={() => {
                    setGender('Male');
                  }}></TouchableOpacity>
                <Text style={{fontSize: scale(14)}}>Male</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: scale(10),
                }}>
                <TouchableOpacity
                  style={{
                    borderWidth: 2,
                    height: scale(20),
                    width: scale(20),
                    borderRadius: scale(10),
                    borderColor: '#999',
                    backgroundColor:
                      gender == 'Female' ? '#006af7' : 'transparent',
                    marginRight: scale(5),
                  }}
                  onPress={() => {
                    setGender('Female');
                  }}></TouchableOpacity>
                <Text style={{fontSize: scale(14)}}>Female</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: scale(10),
                }}>
                <TouchableOpacity
                  style={{
                    borderWidth: 2,
                    height: scale(20),
                    width: scale(20),
                    borderRadius: scale(10),
                    borderColor: '#999',
                    backgroundColor:
                      gender == 'Other' ? '#006af7' : 'transparent',
                    marginRight: scale(5),
                  }}
                  onPress={() => {
                    setGender('Other');
                  }}></TouchableOpacity>
                <Text style={{fontSize: scale(14)}}>Other</Text>
              </View>
            </View>
          </View>
          <CustomTextInput
            label={'Hobbies'}
            placeholder={'Enter your Hobby'}
            value={habit}
            onChangeText={setHabit}
          />
          <CustomTextInput
            label={'About Me'}
            value={aboutMe}
            onChangeText={setAboutMe}
            multiLine={true}
            containerStyle={{height: scale(100), justifyContent: 'flex-start'}}
            textInputStyle={{height: scale(100)}}
          />
        </View>

        {/* <RNDateTimePicker value={new Date()} mode={'date'} onChange={(e,date)=>setDob(date)} /> */}
        <Button title="Register" onPress={onRegister} />
      </View>
    </SafeAreaView>
  );
}
