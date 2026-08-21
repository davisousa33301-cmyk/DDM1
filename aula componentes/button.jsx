import {Text, View, TextInput, Button, Image, Pressable } from 'react-native';



export default function App() {
  return (
    <View>
    <Text> Insira seu nome: </Text>
       <TextInput 
       placeholder="Digite seu nome aqui"
       style={{
         borderRadius: 5,
         borderWidth: 1,
         margin: 10,
         padding: 5,
         color: '#828282',
       }}/>

       <Button
         title="Enviar"
         onPress={ () => { alert("Enviado!") } }
         /* para desativar o botão: disabled = { true } */
       />

       <Pressable
        onPress={ () => { alert("Enviado!") } }>

       <Image source = {{uri:'https://i.pinimg.com/originals/d5/1e/28/d51e28a59e047031903c86614a34aaaa.jpg'}}
        style={{
         width: 100,
         height: 100,
         marginTop: 5,
         alignSelf: 'center',
         }}/>

       </Pressable>

    </View>
    
  );
}

