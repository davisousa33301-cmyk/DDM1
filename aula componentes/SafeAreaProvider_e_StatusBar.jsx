import { Text, View, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import {StatusBar} from 'expo-status-bar';


export default function App() {
  return (
    <SafeAreaProvider style={{flex:1, backgroundColor: 'darkblue'}}>
    <SafeAreaView>
        <Text style={{color: '#ffffff'}}>Bla bla bla</Text>
    </SafeAreaView>

    <StatusBar style={{color: 'auto'}}/>
    
    </SafeAreaProvider>
  ); 

}
