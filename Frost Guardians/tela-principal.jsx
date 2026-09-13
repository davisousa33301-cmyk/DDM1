import { Text, View, ScrollView, Image, Pressable, TextInput } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }}>
        <StatusBar style="light" backgroundColor="#121212" />
        <View
          style={{
            height: 65,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <Pressable
            onPress={() => {
              alert('vai abrir o menu ou configurações');
            }}>
            <Ionicons name="menu" size={32} color="#8CD1FC" />{' '}
          </Pressable>
          <Text
            style={{
              color: '#ffffffbf',
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            FROST GUARDIANS
          </Text>
          <Pressable
            onPress={() => {
              alert('vai mostrar as notific..');
            }}>
            <Ionicons name="notifications" size={27} color="#8CD1FC" />
          </Pressable>
        </View>
        <View
          style={{
            width: '90%',
            height: 1,
            backgroundColor: '#8CD1FC40',
            alignSelf: 'center',
          }}
        />
        <ScrollView
          contentContainerStyle={{ alignItems: 'center', paddingBottom: 25 }}>
          <Image
            source={require('./1.png')}
            style={{ width: 150, height: 150, marginTop: 10, marginBottom: 10 }}
          />
          <TextInput
  placeholder="o que você quer saber?"
  placeholderTextColor="#888"
  style={{
    width: '95%',
    height: 50,
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#8CD1FC80',
    marginTop: 10,
    marginBottom: 10,
  }}
/>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              width: '100%',
            }}>
            <Pressable
              onPress={() => {
                alert(
                  'vai mostrar informações sobre a guilda, oq ela faz, etc...'
                );
              }}>
              <View
                style={{
                  width: 80,
                  height: 100,
                  backgroundColor: '#0B1B2D',
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 5,
                }}>
                <Ionicons name="newspaper-sharp" size={29} color="#8CD1FC" />
                <Text style={{ color: 'white', marginTop: 8 }}> Sobre </Text>
              </View>{' '}
            </Pressable>

            <Pressable
              onPress={() => {
                alert('vai mostrar os integrantes da guilda');
              }}>
              <View
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: '#0B1B2D',
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 5,
                }}>
                <Ionicons name="people" size={30} color="#8CD1FC" />
                <Text style={{ color: 'white', marginTop: 8 }}> Membros </Text>
              </View>{' '}
            </Pressable>

            <Pressable
              onPress={() => {
                alert(
                  'vai mostrar as classificações, quem fez mais missoes em um periodo'
                );
              }}>
              <View
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: '#0B1B2D',
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 5,
                }}>
                <Ionicons name="trophy" size={29} color="#8CD1FC" />
                <Text style={{ color: 'white', marginTop: 8 }}> Rankings </Text>
              </View>{' '}
            </Pressable>

            <Pressable
              onPress={() => {
                alert(
                  'vai mostrar as missões que faltam fazer e quias foram realizadas'
                );
              }}>
              <View
                style={{
                  width: 320,
                  height: 100,
                  backgroundColor: '#0B1B2D',
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 5,
                }}>
                <MaterialCommunityIcons
                  name="sword-cross"
                  size={30}
                  color="#8CD1FC"
                />
                <Text style={{ color: 'white', marginTop: 8 }}> Missões </Text>
              </View>
            </Pressable>
          </View>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              alignSelf: 'flex-start',
              marginLeft: '5%',
              marginTop: 25,
              marginBottom: 10,
            }}>
            Últimas Notícias
          </Text>

          <Pressable
            onPress={() => {
              alert('iria direcionar para a aba de missões');
            }}>
            <View
              style={{
                width: '90%',
                backgroundColor: '#0B1B2D',
                borderRadius: 15,
                padding: 15,
                borderWidth: 1,
                borderColor: '#164A6B',
              }}>
              <Text
                style={{ color: '#8CD1FC', fontSize: 14, fontWeight: 'bold' }}>
                NOVA TEMPORADA
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 17,
                  fontWeight: 'bold',
                  marginTop: 5,
                }}>
                Uma nova aventura começou!
              </Text>
              <Text style={{ color: '#9AAFC2', fontSize: 13, marginTop: 5 }}>
                Confira as novas missões disponíveis para a guilda.
              </Text>
            </View>
          </Pressable>
        </ScrollView>
        <View
          style={{
            height: 65,
            backgroundColor: '#8CD1FC40',
            borderTopWidth: 1,
            borderTopColor: '#164A6B',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="home" size={25} color="#8CD1FC" />
            <Text style={{ color: '#8CD1FC', fontSize: 11, marginTop: 3 }}>
              Início
            </Text>
          </View>
          <Pressable
            onPress={() => {
              alert('vai para a aba de informações sobre a guida');
            }}>
            <View style={{ alignItems: 'center' }}>
              <Ionicons name="shield-outline" size={25} color="#9AAFC2" />
              <Text style={{ color: '#9AAFC2', fontSize: 11, marginTop: 3 }}>
                Guilda
              </Text>
            </View>
          </Pressable>

          <Pressable
            onPress={() => {
              alert('vai ir pra aba das missões');
            }}>
            <View style={{ alignItems: 'center' }}>
              <MaterialCommunityIcons
                name="sword-cross"
                size={25}
                color="#9AAFC2"
              />
              <Text style={{ color: '#9AAFC2', fontSize: 11, marginTop: 3 }}>
                Missões
              </Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              alert('vai mostrar o perfil do usuário');
            }}>
            <View style={{ alignItems: 'center' }}>
              <Ionicons name="person-outline" size={25} color="#9AAFC2" />
              <Text style={{ color: '#9AAFC2', fontSize: 11, marginTop: 3 }}>
                Perfil
              </Text>
            </View>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
