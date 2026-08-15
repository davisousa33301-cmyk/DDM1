import { View, Image, Text } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#4682b4' }}>
      <View style={{ flex: 1, backgroundColor: '#4682b4' }}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRpX8SI8VcFSSSWKFmIhC51oJUp6jkrQWmzyUeG1h-8A&s=10',
          }}
          style={{
            width: 100,
            height: 100,
            alignSelf: 'center',
            marginTop: 150,
            borderRadius: 50,
          }}
        />
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 30,
            textAlign: 'center',
            color: '#ffffff',
          }}>
          Frost Guardians
        </Text>
        <Text style={{ textAlign: 'center', color: '#ffffff' }}>
          Do frio nasce a força dos verdadeiros guardiões
        </Text>
        <Image
          source={{
            uri: 'https://static.vecteezy.com/ti/fotos-gratis/p1/49483787-fundo-branco-abstrato-foto.jpg',
          }}
          style={{
            width: 200,
            height: 1,
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 50,
          }}
        />
      </View>
      <View style={{ flex: 0.1, backgroundColor: '#bfddf3' }}>
        <Text style={{ textAlign: 'center', marginTop: 9, color: '#4682b4' }}>
          © 2026 Davi Silva - Frost Guardians — Todos os direitos reservados - v.1.0
        </Text>
      </View>
    </View>
  );
}
