import { StyleSheet } from "react-native";
/*Nunito_400Regular, Nunito_600SemiBold, Nunito_700Bold,
  Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold*/

const styles = StyleSheet.create({
   container:{
      flex: 1,
      backgroundColor: '#98C1D9',
      alignContent: 'center',
      paddingRight: 40,
      paddingLeft: 40,
   },
   banner:{
      marginTop: 24,
      width: '100%',
      resizeMode: 'contain',
   },
   input:{
      marginBottom: 12,
      width: 308,
      padding: 16,
      backgroundColor: '#E0FBFC',
      borderRadius: 24,
      alignSelf: 'center',
   },
   title: {
      position: 'relative',
      bottom: 16,
      marginBottom: 24,
      fontFamily: 'Nunito_700Bold',
      color: '#EE6C4D',
      fontSize: 32,      
   },
   forgotPassword:{
      alignSelf: 'center',
      fontFamily: 'Nunito_700Bold',
      color: '#3D5A80',
      fontSize: 16,
   },
   nextButton:{
      alignSelf: 'center',
      width: 80,
      resizeMode: 'contain',
   },
   buttonContainer:{
      width: 'fit-content',
      backgroundColor: '#3D5A80',
   }
});

export default styles;