
import { Text, View, ScrollView, Image, Pressable, TextInput, StyleSheet,} from 'react-native';
import { SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={tela_principal.principal}>
        <StatusBar
          style="light"
          backgroundColor="#121212"
        />

        <View style={tela_principal.cabecalho}>
          <Pressable
            onPress={() => {
              alert('Vai abrir o menu ou configurações');
            }}
          >
            <Ionicons
              name="menu"
              size={32}
              color="#8CD1FC"
            />
          </Pressable>

          <Text style={tela_principal.titulo}>
            FROST GUARDIANS
          </Text>

          <Pressable
            onPress={() => {
              alert('Vai mostrar as notificações');
            }}
          >
            <Ionicons
              name="notifications"
              size={27}
              color="#8CD1FC"
            />
          </Pressable>
        </View>

        <View style={tela_principal.linha} />

        <ScrollView
          contentContainerStyle={tela_principal.conteudo}
        >

          <Image
            source={require('./1.png')}
            style={tela_principal.logo}
          />

          <TextInput
            placeholder="O que você quer saber?"
            placeholderTextColor="#888"
            style={tela_principal.pesquisa}
          />

          <View style={tela_principal.config_caixa}>

            <Pressable
              onPress={() => {
                alert(
                  'Vai mostrar informações sobre a guilda, o que ela faz, etc.'
                );
              }}
            >
              <View style={[tela_principal.caixa, tela_principal.caixa_sobre]}>
                <Ionicons
                  name="newspaper-sharp"
                  size={29}
                  color="#8CD1FC"
                />

                <Text style={tela_principal.texto_caixa}>
                  Sobre
                </Text>
              </View>
            </Pressable>

            <Pressable
              onPress={() => {
                alert('Vai mostrar os integrantes da guilda');
              }}
            >
              <View style={[tela_principal.caixa, tela_principal.caixa_membros]}>
                <Ionicons
                  name="people"
                  size={30}
                  color="#8CD1FC"
                />

                <Text style={tela_principal.texto_caixa}>
                  Membros
                </Text>
              </View>
            </Pressable>

            <Pressable
              onPress={() => {
                alert(
                  'Vai mostrar as classificações de missões'
                );
              }}
            >
              <View style={[tela_principal.caixa, tela_principal.caixa_rankings]}>
                <Ionicons
                  name="trophy"
                  size={29}
                  color="#8CD1FC"
                />

                <Text style={tela_principal.texto_caixa}>
                  Rankings
                </Text>
              </View>
            </Pressable>

            <Pressable
              onPress={() => {
                alert(
                  'Vai mostrar as missões pendentes e realizadas'
                );
              }}
            >
              <View style={[tela_principal.caixa, tela_principal.caixa_missoes]}>
                <MaterialCommunityIcons
                  name="sword-cross"
                  size={30}
                  color="#8CD1FC"
                />

                <Text style={tela_principal.texto_caixa}>
                  Missões
                </Text>
              </View>
            </Pressable>

          </View>

          <Text style={tela_principal.titulo_noticias}>
            Últimas Notícias
          </Text>

          <Pressable
            style={tela_principal.pressable_noticia}
            onPress={() => {
              alert('Iria direcionar para a aba de missões');
            }}
          >
            <View style={tela_principal.caixa_noticia}>
              <Text style={tela_principal.categoria_noticia}>
                NOVA TEMPORADA
              </Text>

              <Text style={tela_principal.titulo_noticia}>
                Uma nova aventura começou!
              </Text>

              <Text style={tela_principal.descricao_noticia}>
                Confira as novas missões disponíveis para a guilda.
              </Text>
            </View>
          </Pressable>

        </ScrollView>

        <View style={tela_principal.rodape}>

          <View style={tela_principal.item_rodape}>
            <Ionicons
              name="home"
              size={25}
              color="#8CD1FC"
            />

            <Text style={tela_principal.texto_home}>
              Início
            </Text>
          </View>
          
          <Pressable
            onPress={() => {
              alert('Vai para a aba de informações sobre a guilda');
            }}
          >
            <View style={tela_principal.item_rodape}>
              <Ionicons
                name="shield-outline"
                size={25}
                color="#9AAFC2"
              />

              <Text style={tela_principal.texto_outro}>
                Guilda
              </Text>
            </View>
          </Pressable>

          <Pressable
            onPress={() => {
              alert('Vai para a aba das missões');
            }}
          >
            <View style={tela_principal.item_rodape}>
              <MaterialCommunityIcons
                name="sword-cross"
                size={25}
                color="#9AAFC2"
              />

              <Text style={tela_principal.texto_outro}>
                Missões
              </Text>
            </View>
          </Pressable>

          <Pressable
            onPress={() => {
              alert('Vai mostrar o perfil do usuário');
            }}
          >
            <View style={tela_principal.item_rodape}>
              <Ionicons
                name="person-outline"
                size={25}
                color="#9AAFC2"
              />

              <Text style={tela_principal.texto_outro}>
                Perfil
              </Text>
            </View>
          </Pressable>

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const tela_principal = StyleSheet.create({

  principal: {
    flex: 1,
    backgroundColor: '#121212',
  },

  cabecalho: {
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  titulo: {
    color: '#ffffffbf',
    fontSize: 15,
    fontWeight: 'bold',
  },

  linha: {
    width: '90%',
    height: 1,
    backgroundColor: '#8CD1FC40',
    alignSelf: 'center',
  },

  conteudo: {
    alignItems: 'center',
    paddingBottom: 25,
  },

  logo: {
    width: 150,
    height: 150,
    marginTop: 10,
    marginBottom: 10,
  },

  pesquisa: {
    width: '95%',
    height: 50,
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#8CD1FC80',
    marginTop: 10,
    marginBottom: 10,
    color: '#ffffff',
  },

  config_caixa: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
  },

  caixa: {
    height: 100,
    backgroundColor: '#0B1B2D',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },

  caixa_sobre: {
    width: 80,
  },

  caixa_membros: {
    width: 100,
  },

  caixa_rankings: {
    width: 100,
  },

  caixa_missoes: {
    width: 320,
  },

  texto_caixa: {
    color: 'white',
    marginTop: 8,
  },

  titulo_noticias: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: '5%',
    marginTop: 25,
    marginBottom: 10,
  },

  pressable_noticia: {
    width: '90%',
  },

  caixa_noticia: {
    width: '100%',
    backgroundColor: '#0B1B2D',
    borderRadius: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: '#164A6B',
  },

  categoria_noticia: {
    color: '#8CD1FC',
    fontSize: 14,
    fontWeight: 'bold',
  },

  titulo_noticia: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 5,
  },

  descricao_noticia: {
    color: '#9AAFC2',
    fontSize: 13,
    marginTop: 5,
  },

  rodape: {
    height: 65,
    backgroundColor: '#8CD1FC40',
    borderTopWidth: 1,
    borderTopColor: '#164A6B',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  item_rodape: {
    alignItems: 'center',
  },

  texto_home: {
    color: '#8CD1FC',
    fontSize: 11,
    marginTop: 3,
  },

  texto_outro: {
    color: '#9AAFC2',
    fontSize: 11,
    marginTop: 3,
  },

});
