import { View, Text } from 'react-native';

export default function App() {
  return (
    <View style={{ flex:1, backgroundColor: 'white'}}>

       <View style={{ flex:0.30, backgroundColor: '#191970'}}></View>

       <View style={{ flex:0.50, backgroundColor: 'darkblue'}}></View>

       <View style={{ flex:3, backgroundColor: '#1E90FF'}}>
       <Text> um app mucho loco </Text>
       </View>

       <View style={{ flex:0.30, backgroundColor: '#87CEEB'}}></View>
      
    </View>

  );
}

