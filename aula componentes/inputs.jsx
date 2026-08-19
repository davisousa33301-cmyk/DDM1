import { TextInput,Text, View } from 'react-native';


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

       <Text> Insira sua idade: </Text>
       <TextInput 
       placeholder="Digite sua idade aqui"
       keyboardType='numeric'
       secureTextEntry={true}
       style={{
         borderRadius: 5,
         borderWidth: 1,
         margin: 10,
         padding: 5,
         color: '#828282',
       }}/>
    </View>
  );
}

