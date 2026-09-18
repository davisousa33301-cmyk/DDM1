import { View, Image, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={tela_cad.principal}>
      <View style={tela_cad.conteudo}>
        <Image source={require('./1.png')} style={tela_cad.logo} />

        <Text style={tela_cad.titulo}>CADASTRO</Text>

        <Text style={tela_cad.informacao}>   Insira seu nome completo: </Text>

        <TextInput
          placeholder=" Digite seu nome aqui"
          placeholderTextColor="#828282"
          style={tela_cad.input}
        />

        <Text style={tela_cad.informacao}>   Insira seu telefone:</Text>

        <TextInput
          placeholder=" Digite seu telefone aqui"
          placeholderTextColor="#828282"
          keyboardType="numeric"
          style={tela_cad.input}
        />

        <Text style={tela_cad.informacao}>   Insira seu e-mail:</Text>

        <TextInput
          placeholder=" Digite seu e-mail aqui"
          placeholderTextColor="#828282"
          keyboardType="email-address"
          style={tela_cad.input}
        />

        <Text style={tela_cad.informacao}>   Insira sua senha:</Text>

        <TextInput
          placeholder=" Digite sua senha aqui"
          placeholderTextColor="#828282"
          secureTextEntry={true}
          style={tela_cad.input}
        />

        <Button
          title="Enviar"
          onPress={() => {
            alert('Enviado!');
          }}
        />
      </View>

      <View style={tela_cad.rodape}>
        <Text style={tela_cad.texto_rodape}>
          © 2026 Davi Silva - Frost Guardians — Todos os direitos reservados -
          v.1.0
        </Text>
      </View>
    </View>
  );
}

const tela_cad = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: '#121212',
  },

  conteudo: {
    flex: 1,
    backgroundColor: '#121212',
  },

  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 15,
    borderRadius: 50,
  },

  titulo: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffffbf',
    margin: 10,
  },

  informacao: {
    color: '#ffffff',
    padding: 4,
  },

  input: {
    borderRadius: 10,
    borderWidth: 2,
    margin: 10,
    padding: 5,
    color: '#828282',
    borderColor: '#bfddf3',
    backgroundColor: '#121212',
  },

  rodape: {
    flex: 0.1,
    backgroundColor: '#bfddf3',
    justifyContent: 'center',
  },

  texto_rodape: {
    textAlign: 'center',
    marginTop: 9,
    color: '#4682b4',
  },
});
