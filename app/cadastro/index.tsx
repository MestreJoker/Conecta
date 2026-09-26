import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, StatusBar, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Cadastro() {
    const router = useRouter();
    function navegar(pagina: string) {
        router.push(`/${pagina}`);
    };

    const [tipoSelecionado, setTipoSelecionado] = useState<number>(0)

    const tiposConta = [
        {
            icone: <FontAwesome name="user-o" size={50} color={'#2e7ff4'} />,
            titulo: "Usuário",
            descricao: "Quero ajudar e fazer a diferença"
        },
        {
            icone: <FontAwesome name="home" size={50} color={'#16a69c'} />,
            titulo: "ONG",
            descricao: "Quero cadastrar minha ONG no Conecta"
        }
    ]

    return (
        <SafeAreaProvider>
            <ScrollView className='mb-10 p-4'>
                <Image source={require('../../assets/images/logoConecta.png')} style={{ width: 210, height: 190, marginTop: 10 }} className="mx-auto" />

                <Text className="text-4xl font-bold mt-[20px]">Criar conta</Text>
                <Text className="text-lg text-gray-500">Escolha como você quer se cadastrar</Text>

                <View className="flex flex-row justify-between mt-5">
                    {tiposConta.map((item, index) => {
                        let estilo = "border-gray-300 bg-white"
                        if (index == tipoSelecionado) {
                            estilo = "border-[3px] border-blue-500 bg-blue-50"
                        }
                        return (
                            <TouchableOpacity key={`tipo${index}`}
                                className={`w-[49%] h-[170px] rounded-xl border ${estilo} items-center justify-center flex`}
                                onPress={() => setTipoSelecionado(index)}>
                                <View className="mb-1">{item.icone}</View>
                                <Text className="text-xl font-bold">{item.titulo}</Text>
                                <Text className="text-center">{item.descricao}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>

                <Text className="text-xl font-bold mt-4">E-mail: </Text>
                <TextInput placeholder="Ex.: joao@gmail.com" className="text-xl p-3 border border-gray-500 rounded-xl py-4" multiline={true} textAlignVertical="center" />

                <Text className="text-xl font-bold mt-4">Senha: </Text>
                <TextInput placeholder="********" className="text-xl p-3 border border-gray-500 rounded-xl py-4" />

                <TouchableOpacity
                    className='rounded-xl p-2 w-full bg-blue-500 text-white text-center font-bold
                            h-[60px] mx-auto mt-5' onPress={() => navegar("necessidades")}>
                    <Text className='text-white font-bold text-xl m-auto'>Fazer Login</Text>
                </TouchableOpacity>
                <Text className="text-gray-500 text-center mt-2" >
                    Já tem uma conta? <TouchableOpacity onPress={() => navegar("cadastro")}>
                        <Text className="text-[#16a69c]"
                            style={{ textDecorationLine: 'underline' }}>Fazer Login</Text>
                    </TouchableOpacity>
                </Text>
            </ScrollView>
        </SafeAreaProvider>
    )
}