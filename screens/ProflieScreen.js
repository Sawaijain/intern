import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


 
const ProflieScreen = () => {
    const navigation = useNavigation();
    const data = navigation.getParams(text);
  return (
    <View>
      <Text>This is the ProflieScreen</Text>
      <Text>{data}</Text>
      
    </View>
  )
}

export default ProflieScreen