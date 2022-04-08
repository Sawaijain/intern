import { View, Text,TextInput,Pressable } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const ExploreScreen = () => {
const navigation = useNavigation();
    const [text, setText] = useState('');
  return (
    <View>
      <Text>ExploreScreen</Text>
      <TextInput placeholder='Write here'
        onTextChange={(t)=>setText(t)}
       />
      <Pressable onPress={navigation.navigate('HomeScreen',{ text})}>
          <Text>Button</Text>
      </Pressable>
    </View>
  )
}

export default ExploreScreen