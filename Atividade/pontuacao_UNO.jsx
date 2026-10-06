import {
  StyleSheet,
  Text,
  Image,
  View,
  Pressable,
  ImageBackground,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

export default function App() {
  const [pontuacaoJogador1, atualizarJogador1] = useState(0);
  const [pontuacaoJogador2, atualizarJogador2] = useState(0);

  return (
    <SafeAreaProvider>
      <ImageBackground
        source={require('./fundo.png')}
        style={styles.fundo}
        resizeMode="cover">
        <SafeAreaView style={styles.container}>
          <StatusBar style="dark" backgroundColor="#ffffff" />

          <View style={styles.sombra} />

          <View style={styles.cabecalho}>
            <Image source={require('./uno.jpg')} style={styles.logo} />

            <Text style={styles.titulo}>
              Sistema de Pontuação <Text style={styles.uno}>UNO</Text>
            </Text>
          </View>

          <View style={styles.conteudo}>
            <View style={styles.caixaJogador}>
              <Text style={styles.tituloJogador}>Jogador 1</Text>

              <View style={styles.caixaPontuacao}>
                <Text style={styles.textoPontos}>PONTOS</Text>

                <Text style={styles.contador}>{pontuacaoJogador1}</Text>
              </View>

              <Text style={styles.subtitulo}>Cartas de números de 0 a 9</Text>

              <Text style={styles.descricao}>
                Pontuação referente ao número da carta
              </Text>

              <View style={styles.linhaBotoes}>
                <Pressable
                  style={[styles.botao, styles.amarelo]}
                  onPress={() => {
                    if (pontuacaoJogador1 >= 500) {
                      alert('Parabéns você foi competente em alguma coisa');
                    }

                    atualizarJogador1(pontuacaoJogador1 + 3);
                  }}>
                  <Text style={styles.textoBotao}>+ 3</Text>
                </Pressable>

                <Pressable
                  style={[styles.botao, styles.vermelho]}
                  onPress={() => {
                    if (pontuacaoJogador1 - 3 < 0) {
                      atualizarJogador1(0);
                    } else {
                      atualizarJogador1(pontuacaoJogador1 - 3);
                    }
                  }}>
                  <Text style={styles.textoBotao}>- 3</Text>
                </Pressable>
              </View>

              <Text style={styles.subtitulo}>Cartas de Ação:</Text>

              <View style={styles.linhaBotoes}>
                <Pressable
                  style={[styles.botao, styles.azul]}
                  onPress={() => {
                    if (pontuacaoJogador1 >= 500) {
                      alert('Parabéns você foi competente em alguma coisa');
                    }

                    atualizarJogador1(pontuacaoJogador1 + 20);
                  }}>
                  <Text style={styles.textoBotao}>+ 20</Text>
                </Pressable>

                <Pressable
                  style={[styles.botao, styles.verde]}
                  onPress={() => {
                    if (pontuacaoJogador1 - 20 < 0) {
                      atualizarJogador1(0);
                    } else {
                      atualizarJogador1(pontuacaoJogador1 - 20);
                    }
                  }}>
                  <Text style={styles.textoBotao}>- 20</Text>
                </Pressable>
              </View>

              <Text style={styles.subtitulo}>Cartas Curinga:</Text>

              <View style={styles.linhaBotoes}>
                <LinearGradient
                  colors={['#F2D129', '#F21D2F', '#04B2D9', '#8AD952']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.botaoCuringa}>
                  <Pressable
                    onPress={() => {
                      if (pontuacaoJogador1 >= 500) {
                        alert('Parabéns você foi competente em alguma coisa');
                      }

                      atualizarJogador1(pontuacaoJogador1 + 50);
                    }}>
                    <Text style={styles.textoCuringa}>+ 50</Text>
                  </Pressable>
                </LinearGradient>

                <LinearGradient
                  colors={['#F2D129', '#F21D2F', '#04B2D9', '#8AD952']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.botaoCuringa}>
                  <Pressable
                    onPress={() => {
                      if (pontuacaoJogador1 - 50 < 0) {
                        atualizarJogador1(0);
                      } else {
                        atualizarJogador1(pontuacaoJogador1 - 50);
                      }
                    }}>
                    <Text style={styles.textoCuringa}>- 50</Text>
                  </Pressable>
                </LinearGradient>
              </View>

              <Pressable
                style={styles.redefinir}
                onPress={() => atualizarJogador1(0)}>
                <Text style={styles.textoRedefinir}>Redefinir</Text>
              </Pressable>
            </View>

            <View style={styles.caixaJogador}>
              <Text style={styles.tituloJogador}>Jogador 2</Text>

              <View style={styles.caixaPontuacao}>
                <Text style={styles.textoPontos}>PONTOS</Text>

                <Text style={styles.contador}>{pontuacaoJogador2}</Text>
              </View>

              <Text style={styles.subtitulo}>Cartas de números de 0 a 9</Text>

              <Text style={styles.descricao}>
                Pontuação referente ao número da carta
              </Text>

              <View style={styles.linhaBotoes}>
                <Pressable
                  style={[styles.botao, styles.amarelo]}
                  onPress={() => {
                    if (pontuacaoJogador2 >= 500) {
                      alert('Parabéns você foi competente em alguma coisa');
                    }

                    atualizarJogador2(pontuacaoJogador2 + 3);
                  }}>
                  <Text style={styles.textoBotao}>+ 3</Text>
                </Pressable>

                <Pressable
                  style={[styles.botao, styles.vermelho]}
                  onPress={() => {
                    if (pontuacaoJogador2 - 3 < 0) {
                      atualizarJogador2(0);
                    } else {
                      atualizarJogador2(pontuacaoJogador2 - 3);
                    }
                  }}>
                  <Text style={styles.textoBotao}>- 3</Text>
                </Pressable>
              </View>

              <Text style={styles.subtitulo}>Cartas de Ação:</Text>

              <View style={styles.linhaBotoes}>
                <Pressable
                  style={[styles.botao, styles.azul]}
                  onPress={() => {
                    if (pontuacaoJogador2 >= 500) {
                      alert('Parabéns você foi competente em alguma coisa');
                    }

                    atualizarJogador2(pontuacaoJogador2 + 20);
                  }}>
                  <Text style={styles.textoBotao}>+ 20</Text>
                </Pressable>

                <Pressable
                  style={[styles.botao, styles.verde]}
                  onPress={() => {
                    if (pontuacaoJogador2 - 20 < 0) {
                      atualizarJogador2(0);
                    } else {
                      atualizarJogador2(pontuacaoJogador2 - 20);
                    }
                  }}>
                  <Text style={styles.textoBotao}>- 20</Text>
                </Pressable>
              </View>

              <Text style={styles.subtitulo}>Cartas Curinga:</Text>

              <View style={styles.linhaBotoes}>
                <LinearGradient
                  colors={['#F2D129', '#F21D2F', '#04B2D9', '#8AD952']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.botaoCuringa}>
                  <Pressable
                    onPress={() => {
                      if (pontuacaoJogador2 + 50 >= 500) {
                        alert('Parabéns você foi competente em alguma coisa');
                      }

                      atualizarJogador2(pontuacaoJogador2 + 50);
                    }}>
                    <Text style={styles.textoCuringa}>+ 50</Text>
                  </Pressable>
                </LinearGradient>

                <LinearGradient
                  colors={['#F2D129', '#F21D2F', '#04B2D9', '#8AD952']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.botaoCuringa}>
                  <Pressable
                    onPress={() => {
                      if (pontuacaoJogador2 - 50 < 0) {
                        atualizarJogador2(0);
                      } else {
                        atualizarJogador2(pontuacaoJogador2 - 50);
                      }
                    }}>
                    <Text style={styles.textoCuringa}>- 50</Text>
                  </Pressable>
                </LinearGradient>
              </View>

              <Pressable
                style={styles.redefinir}
                onPress={() => atualizarJogador2(0)}>
                <Text style={styles.textoRedefinir}>Redefinir</Text>
              </Pressable>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  sombra:{
    ...StyleSheet.absoluteFillObject,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 5,
  },

  cabecalho: {
    alignItems: 'center',
    marginBottom: 8,
  },

  logo: {
    width: 125,
    height: 125,
    borderRadius: 900
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  uno: {
    color: '#F2D129',
    fontWeight: '900',
    backgroundColor: '#F21D2F',
    borderWidth: 1,
    borderRadius: 3,
  },

  conteudo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 10,
  },

  caixaJogador: {
    width: 175,
    backgroundColor: '#171717',
    borderRadius: 18,
    padding: 10,
    alignItems: 'center',
  },

  tituloJogador: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '900',
    marginBottom: 7,
  },

  caixaPontuacao: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 5,
    marginBottom: 7,
    borderWidth: 3,
    borderColor: '#F21D2F',
  },

  textoPontos: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#F21D2F',
  },

  contador: {
    fontSize: 34,
    fontWeight: '900',
    color: '#171717',
  },

  subtitulo: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 3,
  },

  descricao: {
    color: '#AAAAAA',
    fontSize: 7,
    textAlign: 'center',
    marginBottom: 3,
  },

  linhaBotoes: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 7,
    marginVertical: 3,
  },

  botao: {
    width: 58,
    height: 27,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },

  amarelo: {
    backgroundColor: '#F2D129',
  },

  vermelho: {
    backgroundColor: '#F21D2F',
  },

  azul: {
    backgroundColor: '#04B2D9',
  },

  verde: {
    backgroundColor: '#8AD952',
  },

  textoBotao: {
    color: '#111111',
    fontSize: 12,
    fontWeight: '900',
  },

  botaoCuringa: {
    width: 58,
    height: 27,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoCuringa: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '900',
    textShadowColor: '#000000',
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 2,
  },

  redefinir: {
    width: 80,
    height: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },

  textoRedefinir: {
    color: '#F21D2F',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
