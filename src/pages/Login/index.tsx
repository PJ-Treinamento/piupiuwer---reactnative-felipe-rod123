import React, { useState } from "react";

import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";

//Eu tentei usar Styled Components, mas ficavam aparecendo vários erros e não dava muito tempo para consertar, por isso eu usei o método com styles...
import styles from "./styles";

import { Link } from "react-router-native";
import { useAuth } from "../../hooks/auth";
import api from "../../services/api";

import logoImg from '../../assets/icons/logo.png';
import nextImg from '../../assets/icons/next.png';

export default function Login(){
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const {login} = useAuth();

   const signIn = () =>{
      login({email, password});
   }
   
   return(
      <View style={styles.container}>
         <Image source={logoImg} style={styles.banner}/>

         <Text style={styles.title}>Entre na sua conta</Text>
         <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            onChange={event => setEmail(event.target.toString())}
         />
         <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            onChange={event => setPassword(event.target.toString())}
         />
         <Link to="/" 
            style={styles.buttonContainer} 
            onPress={()=>{signIn}}
         >
            <Image source={nextImg} style={styles.nextButton}/>
         </Link>
         <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
        
      </View>
   );
}