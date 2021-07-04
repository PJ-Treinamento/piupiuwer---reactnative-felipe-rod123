import { StyleSheet } from "react-native";
/*Nunito_400Regular, Nunito_600SemiBold, Nunito_700Bold,
  Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold*/

const styles = StyleSheet.create({
   container:{
      flex: 1,
      backgroundColor: '#98C1D9',
      alignContent: 'center',
      padding: 40,
   },
   banner:{
      marginBottom: 8,
      width: '100%',
      resizeMode: 'contain',
   },
   input:{
      margin: 12,
      width: 308,
      padding: 16,
      backgroundColor: '#E0FBFC',
      borderRadius: 24,
      alignSelf: 'center',
   },
   title: {
      marginBottom: 8,
      fontFamily: 'Nunito_700Bold',
      color: '#EE6C4D',
      fontSize: 32,
      lineHeight: 30,
      
   },
   forgotPassword:{
      alignSelf: 'center',
      fontFamily: 'Nunito_700Bold',
      color: '#3D5A80',
      fontSize: 12,
      lineHeight: 30,
   }
});

export default styles;