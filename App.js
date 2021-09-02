// import * as React from 'react';
import React, {useEffect, useState} from 'react';
import { StyleSheet ,Button, View, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from './src/pages/cadastro';
import LoginTela from './src/pages/login';
import Inicial from './src/pages/inicial'
import firebase from './src/config/firebase';

function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1}}>
      {/* <View style={{paddingTop:10, paddingHorizontal:10}}>
        <TextInput style={styles.textInput} placeholder=' Email'></TextInput>
      </View>
        <View style={{paddingTop:10, paddingHorizontal:10}}>
          <TextInput style={styles.textInput} placeholder=' Password' secureTextEntry></TextInput>
        </View>
        <View style={{paddingTop:10, paddingHorizontal:10}}>
          <Button
            title="Login"
            // onPress={() => navigation.navigate('Cadastro')}
          />
        </View> */}
        <LoginTela />
        {/* <View style={{paddingTop:10, paddingHorizontal:10}}>
          <Button
            title="CRUD"
            onPress={() => navigation.navigate('Cadastro')}
          />
        </View> */}
    </View>
  );
}

function CadastroScreen({ navigation }) {
  return (
    <View style={{ flex: 1}}>
      <Cadastro />
    </View>
  );
}

function InicialScreen({navigation}){
  return(
    <View>
      <Inicial />
    </View>
  )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Inicial" component={Inicial} />
        <Stack.Screen name="Login" component={LoginTela} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
     textInput:{
       borderColor:'black',
       borderWidth:1,
     }
   });





// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
// import Constants from 'expo-constants';
// import Cadastro from './src/pages/cadastro'


// function CustomHeader(){
//   return(
//     <View style={{paddingTop:Constants.statusBarHeight+5,flexDirection:"row", borderBottomColor:'black', borderBottomWidth:1.5}}>
//       <View style={{flex:1, justifyContent:'center'}}>
//       </View>
//       <View style={{flex:2, justifyContent:'center', alignItems:'center'}}>
//         <Text style={{fontSize:20}}>Login</Text>
//       </View>
//       <View style={{flex:1, justifyContent:'center', alignItems:'flex-end'}}>
//       </View>
//     </View>
//   )
// }


// export default function App() {
//   return (
//     <View>
//         <CustomHeader/>
//         <View style={{paddingTop:10, paddingHorizontal:10}}>
//           <TextInput style={styles.textInput} placeholder=' Email'></TextInput>
//         </View>
//         <View style={{paddingTop:10, paddingHorizontal:10}}>
//           <TextInput style={styles.textInput} placeholder=' Password' secureTextEntry></TextInput>
//         </View>
//         <View style={{paddingTop:10, paddingHorizontal:10}}>
//           <Button title="Login" />
//         </View>
//         <View style={{paddingTop:20, paddingHorizontal:10}}>
//           <Button title="Cadastro" />
//         </View>
//         <StatusBar style="auto" />
//         <Cadastro />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   textInput:{
//     borderColor:'black',
//     borderWidth:1,
//   }
// });
