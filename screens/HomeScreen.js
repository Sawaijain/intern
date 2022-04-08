import { View, Text,TextInput,Pressable } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
    const data = navigation.getParams(text);
    const navigation = useNavigation();
    const [textInput, setTextInput] = useState('');
  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>{data}</Text>
      <TextInput placeholder='Write here' onTextChange={(t)=>setTextInput(t)} />
      <Pressable onPress={navigation.navigate('ProfileSceen',{textInput})}>
          <Text>Button</Text>
      </Pressable>
    </View>
  )
}

export default HomeScreen