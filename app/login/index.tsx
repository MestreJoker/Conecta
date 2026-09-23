import { useRouter } from "expo-router";
import { View, Text, StatusBar, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Login() {
    const router = useRouter();
    function navegar(pagina: string) {
        router.push(`/${pagina}`);
    };

    return (
        <SafeAreaProvider>
            <ScrollView className='mb-10 p-4'>
                <Image source={require('../../assets/images/logoConecta.png')} style={{ width: 270, height: 245, marginTop: 70 }} className="mx-auto" />

                <Text className="text-xl font-bold mt-4">E-mail: </Text>
                <TextInput placeholder="Ex.: joao@gmail.com" className="text-xl p-3 border border-gray-500 rounded-xl py-4" multiline={true} textAlignVertical="center"/>

                <Text className="text-xl font-bold mt-4">Senha: </Text>
                <TextInput placeholder="********" className="text-xl p-3 border border-gray-500 rounded-xl py-4" />

                <TouchableOpacity
                    className='rounded-xl p-2 w-full bg-blue-500 text-white text-center font-bold
                            h-[60px] mx-auto mt-5' onPress={() => navegar("necessidades")}>
                    <Text className='text-white font-bold text-xl m-auto'>Fazer Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navegar("cadastro")}>
                    <Text className="text-[#199795] text-center mt-2" style={{ textDecorationLine: 'underline' }}>
                        Não tem conta? Clique aqui para criar uma
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaProvider>
    )
}