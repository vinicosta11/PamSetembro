import React, {useEffect, useState, Component} from 'react';
import { View, TextInput, Button, StyleSheet} from 'react-native';
import firebase from '../config/firebase';
// import { Container } from './styles';

class Inicial extends Component { 
    inputValueUpdate = (val, prop) => {
      const state = this.state;
      state[prop] = val;
      this.setState(state);
    }
  
    render() {    
        return(
            <View>
                <View style={{paddingTop:10, paddingHorizontal:10}}>
                  <Button
                    title="Login"
                    onPress={() => this.props.navigation.navigate('Login')}
                    // onPress={() => navigation.navigate('Cadastro')}
                  />
                </View>
                <View style={{paddingTop:10, paddingHorizontal:10}}>
          <Button
            title="CRUD"
            onPress={() => this.props.navigation.navigate('Cadastro')}
          />
        </View>
            </View>
      );
    }
}




// const LoginTela = () => {
//   return (
//       <View>
//     <View style={{paddingTop:10, paddingHorizontal:10}}>
//         <TextInput style={styles.textInput} placeholder=' Email'></TextInput>
//       </View>
//         <View style={{paddingTop:10, paddingHorizontal:10}}>
//           <TextInput style={styles.textInput} placeholder=' Password' secureTextEntry></TextInput>
//         </View>
//         <View style={{paddingTop:10, paddingHorizontal:10}}>
//           <Button
//             title="Login"
//             // onPress={() => navigation.navigate('Cadastro')}
//           />
//         </View>
//     </View>
//   )
// }

export default Inicial;

const styles = StyleSheet.create({
    textInput:{
      borderColor:'black',
      borderWidth:1,
    }
  });
// import React from 'react';
// import { View, Text } from 'react-native';

// // import { Container } from './styles';

// const Inicial = () => {
//   return(
//       <View>
//           <Text>tela inicial</Text>
//       </View>
//   )
// }

// export default Inicial;