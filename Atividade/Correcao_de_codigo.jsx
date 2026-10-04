// Importa os componentes que serão usados na tela
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

// Importa os componentes que fazem os não deixam o texto ficar em cima da barra de status do celular
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    // Área segura para o conteúdo do aplicativo
    <SafeAreaProvider>
      <SafeAreaView style={styles.principal}>

        {/*Título, logo e descrição*/}
        <Text style={styles.titulo}>App de Estudos</Text>
        <Image source={require('./logo.png')} style={styles.logo} />
        <Text style={styles.legenda}>Organize provas tarefas e revisões.</Text>

        {/*Caixa da matéria de Matemática*/}
        <View style={styles.caixa}>
          <Pressable
            onPress={() => {
              // Executa quando a caixa é pressionada
              alert(
                'Abre uns exercícios super supimpas para exercitar a mente!(👍 ͡❛ ͜ʖ ͡❛)👍'
              );
            }}>
            <Text style={styles.titulocaixa}>Matemática</Text>
            <Text>Revisar funções para sexta-feira.</Text>
          </Pressable>
        </View>

        {/*Caixa da matéria de História*/}
        <View style={styles.caixa}>
          <Pressable
            onPress={() => {
              alert(
                'Abre uns um livro SUPER DIDÁTICO para vc ler!💪 ( ͡❛ ͜ʖ ͡❛) 👊'
              );
            }}>
            <Text style={styles.titulocaixa}>História</Text>
            <Text>Ler capítulo sobre Revolução Industrial.</Text>
          </Pressable>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// Cria os estilos da aplicação
const styles = StyleSheet.create({
  principal: {
    flex: 1, // Ocupa toda a tela
    padding: 20, // Espaço interno
    gap: 10, // Espaço entre os elementos
    alignItems: 'center', // Centraliza os elementos
    backgroundColor: '#E8F6F840', // Cor de fundo
  },

  caixa: {
    backgroundColor: '#ffffff', // Fundo branco
    width: 300, // Largura
    padding: 12, // Espaço interno
    marginTop: 10, // Espaço acima
    borderRadius: 10, // Cantos arredondados
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 2, height: 2 }, // Posição da sombra
    shadowOpacity: 0.05, // Transparência da sombra
  },

  titulo: {
    fontSize: 26, // Tamanho do texto
    fontWeight: 'bold', // Texto em negrito
  },

  legenda: {
    color: '#00000080', // Cor com transparência
  },

  titulocaixa: {
    fontWeight: 'bold', // Texto em negrito
    color: '#2A4E7A', // Cor azul
  },

  logo: {
    width: 100, // Largura da imagem
    height: 100, // Altura da imagem

  },
});
