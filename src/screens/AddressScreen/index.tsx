import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Picker} from '@react-native-picker/picker';
import countryList from 'country-list';
import Button from '../../components/Button';

const coutries = countryList.getData();

const AddressScreen = () => {
  const [selectCountry, setSelectCountry] = useState(coutries[0].name);
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [city, setCity] = useState<string>('');
  console.log(phone.length > 13, 'phone');

  {
    /* Case Error */
  }

  const [errorName, setErrorName] = useState<{name: string; phone: string}>({
    name: '',
    phone: '',
  });

  const onCheckOut = () => {
    if (!fullName || !phone || !address || !city) {
      Alert.alert('Please Fill in the all field');
    }
  };

  const validate = () => {
    if (fullName) {
      if (!fullName.match(/^[^0-9]+$/)) {
        setErrorName({
          ...errorName,
          name: 'nhập chữ',
        });
        setFullName('');
      }
    }
    if (phone) {
      if (phone.length > 13) {
        setErrorName({...errorName, phone: 'Too long'});
      } else if (phone.length < 9) {
        setErrorName({...errorName, phone: 'Too short'});
      }
      if (phone.match(/^[^0-9]+$/)) {
        setErrorName({...errorName, phone: 'Please type number'});
        setPhone('');
      }
    }
  };
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={styles.root}>
        <View style={styles.row}>
          <Picker
            selectedValue={selectCountry}
            onValueChange={setSelectCountry}>
            {coutries.map((country: {code: string; name: string}, index) => (
              <Picker.Item
                key={index}
                value={country.code}
                label={country.name}
              />
            ))}
          </Picker>
        </View>

        {/* FULL NAME */}
        <View style={styles.row}>
          <Text style={styles.label}>Full Name (First and Last name)</Text>
          <TextInput
            style={styles.input}
            placeholder="Full name"
            onEndEditing={validate}
            value={fullName}
            onChangeText={text => {
              setFullName(text);
            }}
          />
          {!!errorName && (
            <Text style={styles.errorLabel}>{errorName.name}</Text>
          )}
        </View>

        {/* Phone number*/}
        <View style={styles.row}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone number"
            value={phone}
            onEndEditing={validate}
            onChangeText={text => {
              setPhone(text);
            }}
            keyboardType="phone-pad"
          />
          {!!errorName && (
            <Text style={styles.errorLabel}>{errorName.phone}</Text>
          )}
        </View>

        {/* Address*/}
        <View style={styles.row}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={address}
            onChangeText={setAddress}
          />
        </View>

        {/* City*/}
        <View style={styles.row}>
          <Text style={styles.label}>City</Text>
          <TextInput
            style={styles.input}
            placeholder="City"
            value={city}
            onChangeText={setCity}
          />
        </View>

        <Button text="CheckOut" onPress={onCheckOut} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddressScreen;
