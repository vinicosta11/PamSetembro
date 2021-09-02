import React, {useEffect, useState, Component} from 'react';
import { View, TextInput, Button, StyleSheet} from 'react-native';
import firebase from '../config/firebase';
// import { Container } from './styles';

class LoginTela extends Component {
    constructor() {
      super();
      this.dbRef = firebase.firestore().collection('usuarios');
      this.state = {
        Email: '',
        // Nome: '',
        // CPF: '',
        Senha: '',
        isLoading: false
      };
    }  
    inputValueUpdate = (val, prop) => {
      const state = this.state;
      state[prop] = val;
      this.setState(state);
    }
  
    async Logar() {
      const doc = await firebase.firestore().collection('usuarios').doc(this.state.email).get()
      if (this.state.senha === doc.data().senha){
        this.props.navigation.navigate('InicialScreen')
        alert("Logado")
      }
      else{alert("Senha Incorreta")}
    }
  
    render() {    
        return(
            <View>
            <View style={{paddingTop:10, paddingHorizontal:10}}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder=' Email' 
                    onChangeText={(val) => this.inputValueUpdate(val, 'email')}
                />
              </View>
                <View style={{paddingTop:10, paddingHorizontal:10}}>
                  <TextInput 
                    style={styles.textInput} 
                    placeholder=' Password' 
                    secureTextEntry
                    onChangeText={(val) => this.inputValueUpdate(val, 'senha')}
                />
                </View>
                <View style={{paddingTop:10, paddingHorizontal:10}}>
                  <Button
                    title="Login"
                    onPress={() => this.Logar()}
                    // onPress={() => navigation.navigate('Cadastro')}
                  />
                </View>
                <View style={{paddingTop:10, paddingHorizontal:10}}>
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

export default LoginTela;

const styles = StyleSheet.create({
    textInput:{
      borderColor:'black',
      borderWidth:1,
    }
  });