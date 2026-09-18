import { View, Image, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={friozinho.principal}>

      <View style={friozinho.conteudo}>
      
        <Image source={require('./1.png')} style={friozinho.imagem} />
        <Text style={friozinho.titulo}>Frost Guardians</Text>
        <Text style={friozinho.legenda}>
          Do frio nasce a força dos verdadeiros guardiões
        </Text>
        <Image
          source={{
            uri: 'https://static.vecteezy.com/ti/fotos-gratis/p1/49483787-fundo-branco-abstrato-foto.jpg',
          }}
          style={friozinho.linha}
        />
        
      </View>

      <View style={friozinho.view_rodape}>
        <Text style={friozinho.texto_rodape}>
          © 2026 Davi Silva - Frost Guardians — Todos os direitos reservados -
          v.1.0
        </Text>
      </View>
    </View>
  );
}

const friozinho = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: '#4682b4',
  },

  conteudo: {
    flex: 1,
    backgroundColor: '#121212',
  },

  imagem: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 150,
    borderRadius: 50,
  },

  titulo: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
  },

  legenda: {
    textAlign: 'center',
    color: '#ffffff',
  },

  linha: {
    width: 200,
    height: 1,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 50,
  },

  view_rodape: { 
    flex: 0.1, 
    backgroundColor: '#bfddf3' },

  texto_rodape: { 
    textAlign: 'center', 
    marginTop: 9, 
    color: '#4682b4' },
});
