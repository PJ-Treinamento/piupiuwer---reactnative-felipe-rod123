import React, { useState } from "react";
import { View, Image, TextInput, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
//Eu tentei usar Styled Components, mas ficavam aparecendo vários erros e não dava muito tempo para consertar, por isso eu usei o método com styles...

import logoImg from '../../assets/icons/logo.png';
import optionsImg from '../../assets/icons/options.png';
import searchImg from '../../assets/icons/search.png';

export default function Feed(){
   const [search, setSearch] = useState('');
   
   const searchUser = () =>{
      alert("Pesquisa desativada no momento...");
   }


   // const [pius, setPius] = useState<PiuProps[]>([]);
   // const {token} = useAuth();
   // useEffect(() => {
   //    const loadData = async () => {
   //       const response = await api.get('/pius', {
   //          headers: {
   //             'Authorization': `Bearer ${token}`
   //          }
   //        });
   //       setPius(response.data);
   //    }
   //    loadData();
   // }, [token])

   return(
      <View style={styles.container}>
         <View style={styles.menu}>
            <Image source={logoImg} style={styles.logo}/>
            <TouchableOpacity style={styles.optionsButton}>
               <Image source={optionsImg} style={styles.optionsImg}/>
            </TouchableOpacity>
            
         </View>
         
         <View>
            <TextInput
               style={styles.searchInput}
               placeholder="Pesquisar user_name"
               onChange={event => setSearch(event.target.toString())}
            />
            <TouchableOpacity style={styles.searchButton} onPress={()=>{searchUser}}>
               <Image 
                  source={searchImg} 
                  style={styles.searchImg}
               />
            </TouchableOpacity>
         </View>
         


         {/* <ScrollView>
            {
               pius.map(piu => {
                  return(
                     <View>
                        <Piu
                           key = {piu.id}
                           id= {piu.id}
                           user= {
                           {  id: piu.user.id,
                           username: piu.user.username,
                           first_name: piu.user.first_name,
                           last_name: piu.user.last_name,
                           email: piu.user.email,
                           about: piu.user.about,
                           photo: piu.user.photo,
                           pius: piu.user.pius,
                           likes: piu.user.likes,
                           following: piu.user.following,
                           followers: piu.user.followers,
                           favorites: piu.user.favorites

                           }
                           }
                           likes= {piu.likes}
                           text= {piu.text}
                           created_at= {piu.created_at}
                           updated_at= {piu.updated_at}
                        />
                     </View>
                  );
               })
            }
         </ScrollView> */}
        
      </View>
   );
}