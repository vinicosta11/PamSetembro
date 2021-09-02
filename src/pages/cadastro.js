import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ActivityIndicator } from 'react-native';
import firebase from '../config/firebase';

// import { Container } from './styles';

class Cadastro extends Component {
  constructor() {
    super();
    this.dbRef = firebase.firestore().collection('usuarios');
    this.state = {
      email: '',
      nome: '',
      cpf: '',
      senha: '',
      isLoading: false
    };
  }
  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  Cadastrar() {
    this.setState({isLoading: true});
      this.dbRef.doc(this.state.email).set({
        email: this.state.email,
        nome: this.state.nome,
        cpf: this.state.cpf,
        senha: this.state.senha,
      }).then((res) => {
        this.setState({
          email: '',
          nome: '',
          cpf: '',
          senha: '',
          isLoading: false,
        });
      });
      // this.props.navigation.navigate('Login')
      
      
  }

  Atualizar() {
    this.setState({isLoading: true});
      this.dbRef.doc(this.state.email).set({
        email: this.state.email,
        nome: this.state.nome,
        cpf: this.state.cpf,
        senha: this.state.senha,
      }).then((res) => {
        this.setState({
          email: '',
          nome: '',
          cpf: '',
          senha: '',
          isLoading: false,
        });
      });
  }

  Deletar() {
    const bdREF = firebase.firestore().collection('usuarios').doc(this.state.email)
      bdREF.delete()
      // .then((res) => {
        this.setState({
          email: '',
          nome: '',
          cpf: '',
          senha: '',
          isLoading: false,
        });
      // });
    }

  async Pesquisar() {
    const doc = await firebase.firestore().collection('usuarios').doc(this.state.email).get()
    this.setState({
      Email: doc.data().email,
      Nome: doc.data().nome,
      CPF: doc.data().cpf,
      Senha: doc.data().senha,

    })
  }
  

  render(){
    if(this.state.isLoading){
      return(
        <View>
          <ActivityIndicator size="large"/>
        </View>
      )
    }
    return(
      <View>
      <View style={stylesCad.viewStyle}>
        <TextInput 
          placeholder="CPF" 
          style={stylesCad.textInput} 
          value={this.state.CPF} 
          onChangeText={(val) => this.inputValueUpdate(val, 'cpf')}
        />
      </View>
      <View style={stylesCad.viewStyle}>
        <TextInput 
          placeholder="Nome" 
          style={stylesCad.textInput}
          value={this.state.Nome}
          onChangeText={(val) => this.inputValueUpdate(val, 'nome')}
        />
      </View>
      <View style={stylesCad.viewStyle}>
        <TextInput 
          placeholder="Email" 
          style={stylesCad.textInput}
          value={this.state.Email}
          onChangeText={(val) => this.inputValueUpdate(val, 'email')}
        />
      </View>
      <View style={stylesCad.viewStyle}>
        <TextInput 
          placeholder="Senha" 
          style={stylesCad.textInput} 
          secureTextEntry
          value={this.state.Senha}
          onChangeText={(val) => this.inputValueUpdate(val, 'senha')}
        />
      </View>
      <View style={stylesCad.viewStyle}>
        <Button
          title="Cadastrar"
          onPress={() => this.Cadastrar()}
        />
      </View>

      <View style={stylesCad.viewStyle}>
        <Button
          title="Pesquisar"
          onPress={() => this.Pesquisar()}
        />
      </View>

      <View style={stylesCad.viewStyle}>
        <Button
          title="Deletar"
          onPress={() => this.Deletar()}
        />
      </View>
      
      <View style={stylesCad.viewStyle}>
        <Button
          title="Atualizar"
          onPress={() => this.Atualizar()}
        />
      </View>
      
    </View>
    )
  }
}

// const Cadastro = () => {
//   return (
//     <View>
//       <View style={stylesCad.viewStyle}>
//         <TextInput placeholder="CPF" style={stylesCad.textInput} />
//       </View>
//       <View style={stylesCad.viewStyle}>
//         <TextInput placeholder="Nome" style={stylesCad.textInput} />
//       </View>
//       <View style={stylesCad.viewStyle}>
//         <TextInput placeholder="Email" style={stylesCad.textInput}/>
//       </View>
//       <View style={stylesCad.viewStyle}>
//         <TextInput placeholder="Senha" style={stylesCad.textInput} secureTextEntry/>
//       </View>
//       <View style={stylesCad.viewStyle}>
//         <Button
//           title="Salvar"
//         />
//       </View>
//     </View>   
//   )
// }

export default Cadastro;

const stylesCad = StyleSheet.create({
  textInput:{
    borderColor:'black',
    borderWidth:1,
  },
  viewStyle:{
    padding:10, 
    paddingHorizontal:10,
  }
});