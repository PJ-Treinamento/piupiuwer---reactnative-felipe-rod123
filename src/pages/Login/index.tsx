import React from "react";
import { View, Image, TextInput, Text } from "react-native";
import styles from "./styles";

import logoImg from '../../assets/icons/logo.png';

export default function Login(){
   return(
      <View style={styles.container}>
         <Image source={logoImg} style={styles.banner}/>

         <Text style={styles.title}>Entre na sua conta</Text>
         <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            //onChangeText={text => setText(text)}
         />
         <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            //onChangeText={text => setText(text)}
         />
         <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
        
      </View>
   );
}