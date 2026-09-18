import { View, Image, Text, TextInput, Button, Pressable, StyleSheet,
} from 'react-native';

export default function App() {
  return (
    <View style={tela_login.principal}>
      <View style={tela_login.conteudo}>
        <Image source={require('./1.png')} style={tela_login.logo} />
        <Text style={tela_login.titulo}>LOGIN</Text>
        <Text style={tela_login.email}>Insira seu e-mail:</Text>
        <TextInput
          placeholder=" Digite seu e-mail aqui"
          style={tela_login.input_email}
        />
        <Text style={tela_login.senha}> Insira sua senha:</Text>
        <TextInput
          placeholder=" Digite sua senha aqui"
          keyboardType="numeric"
          secureTextEntry={true}
          style={tela_login.input_senha}
        />
        <Pressable
          onPress={() => {
            alert('Verifique seu e-mail para redefinir sua senha!');
          }}>
          <Text style={tela_login.esq_senha}>Esqueci minha senha</Text>
        </Pressable>
        a
        <Button
          title="Enviar"
          onPress={() => {
            alert('Enviado!');
          }}
        />
        <Text style={tela_login.texto1}>Não tem login?</Text>
        <Pressable
          onPress={() => {
            alert('Enviado!');
          }}>
          <Text style={tela_login.texto2}>Faça seu cadastro</Text>
        </Pressable>
      </View>
      <View style={tela_login.rodape}>
        <Text style={tela_login.texto_rodape}>
          © 2026 Davi Silva - Frost Guardians — Todos os direitos reservados -
          v.1.0
        </Text>
      </View>
    </View>
  );
}

const tela_login = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: '#4682b4',
  },

  conteudo: {
    flex: 1,
    backgroundColor: '#121212',
  },

  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 50,
    borderRadius: 50,
  },

  titulo: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffffbf',
    margin: 10,
  },

  email: {
    color: '#ffffff',
    padding: 4,
  },

  input_email: {
    borderRadius: 10,
    borderWidth: 2,
    margin: 10,
    padding: 5,
    color: '#828282',
    borderColor: '#bfddf3',
    backgroundColor: '#121212',
  },

  senha: {
    color: '#ffffff',
    padding: 4,
  },

  input_senha: {
    borderRadius: 10,
    borderWidth: 2,
    margin: 10,
    padding: 5,
    color: '#828282',
    borderColor: '#bfddf3',
    backgroundColor: '#121212',
  },

  esq_senha: {
    marginTop: 2,
    textDecorationLine: 'underline',
    color: '#bfddf3',
    marginStart: 12,
  },

  texto1: {
    textAlign: 'center',
    marginTop: 15,
    color: '#ffffff',
  },

  texto2: {
    textAlign: 'center',
    marginTop: 2,
    textDecorationLine: 'underline',
    color: '#bfddf3',
  },

  rodape: {
    flex: 0.1,
    backgroundColor: '#bfddf3',
  },

  texto_rodape: {
    textAlign: 'center',
    marginTop: 9,
    color: '#4682b4',
  },
});
