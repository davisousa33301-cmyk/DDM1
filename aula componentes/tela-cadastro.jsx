import { View, Image, Text, TextInput, Button } from 'react-native';

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
                        marginTop: 50,
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
                    CADASTRO
                </Text>
                <Text style={{ color: '#ffffff' }}> Insira seu nome completo: </Text>
                <TextInput
                    placeholder="Digite seu nome aqui"
                    style={{
                        borderRadius: 5,
                        borderWidth: 1,
                        margin: 10,
                        padding: 5,
                        color: '#828282',
                        borderColor: '#bfddf3',
                        backgroundColor: '#ffffff',
                    }}
                />

                <Text style={{ color: '#ffffff' }}> Insira seu telefone: </Text>
                <TextInput
                    placeholder="Digite seu telefone aqui"
                    keyboardType="numeric"
                    style={{
                        borderRadius: 5,
                        borderWidth: 1,
                        margin: 10,
                        padding: 5,
                        color: '#828282',
                        borderColor: '#bfddf3',
                        backgroundColor: '#ffffff',
                    }}
                />

                <Text style={{ color: '#ffffff' }}> Insira seu e-mail: </Text>
                <TextInput
                    placeholder="Digite seu e-mail aqui"
                    style={{
                        borderRadius: 5,
                        borderWidth: 1,
                        margin: 10,
                        padding: 5,
                        color: '#828282',
                        borderColor: '#bfddf3',
                        backgroundColor: '#ffffff',
                    }}
                />

                <Text style={{ color: '#ffffff' }}> Insira sua senha: </Text>
                <TextInput
                    placeholder="Digite sua senha aqui"
                    keyboardType="numeric"
                    secureTextEntry={true}
                    style={{
                        borderRadius: 5,
                        borderWidth: 1,
                        margin: 10,
                        padding: 5,
                        color: '#828282',
                        borderColor: '#bfddf3',
                        backgroundColor: '#ffffff',
                    }}
                />

                <Button
                    title="Enviar"
                    onPress={() => {
                        alert('Enviado!');
                    }}
                /* para desativar o botão: disabled = { true } */
                />
            </View>
            <View style={{ flex: 0.1, backgroundColor: '#bfddf3' }}>
                <Text style={{ textAlign: 'center', marginTop: 9, color: '#4682b4' }}>
                    © 2026 Davi Silva - Frost Guardians — Todos os direitos reservados -
                    v.1.0
                </Text>
            </View>
        </View>
    );
}
