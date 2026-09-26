import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Cadastro() {
    const router = useRouter();
    function navegar(pagina: string) {
        router.push(`/${pagina}`);
    };

    const [tipoSelecionado, setTipoSelecionado] = useState<number>(0);
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);

    const tiposConta = [
        {
            icone: <FontAwesome name="user" size={40} color={'#2e7ff4'} />,
            titulo: "Usuário",
            descricao: "Quero ajudar e fazer a diferença."
        },
        {
            icone: <FontAwesome name="home" size={40} color={'#16a69c'} />,
            titulo: "ONG",
            descricao: "Quero cadastrar minha ONG no Conecta."
        }
    ];

    return (
        <SafeAreaProvider className="flex-1 bg-white">
                {/* Logo e Slogan */}
                <View className="items-center mt-4">
                    <Image source={require('../../assets/images/logoConecta.png')} style={{ width: 170, height: 150, resizeMode: 'contain' }} />
                    <View className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full mt-2" />
                </View>

                <View className="px-4">
                    <Text className="text-3xl font-bold mt-2 text-[#111827]">Criar conta</Text>
                    <Text className="text-base text-gray-500 mb-4">Escolha como você quer se cadastrar:</Text>

                    {/* Tipos de Conta */}
                    <View className="flex flex-row justify-between mb-4">
                        {tiposConta.map((item, index) => {
                            const selecionado = index === tipoSelecionado;
                            return (
                                <TouchableOpacity
                                    key={`tipo${index}`}
                                    className={`w-[48%] p-4 rounded-2xl border ${selecionado ? 'border-[2px] border-blue-500 bg-blue-50/40' : 'border-gray-200 bg-white'} items-center justify-center relative`}
                                    onPress={() => setTipoSelecionado(index)}
                                >
                                    {selecionado && (
                                        <View className="absolute top-3 right-3">
                                            <FontAwesome name="check-circle" size={18} color="#2e7ff4" />
                                        </View>
                                    )}
                                    <View className="mb-2">{item.icone}</View>
                                    <Text className="text-lg font-bold text-[#111827]">{item.titulo}</Text>
                                    <Text className="text-center text-xs text-gray-500 mt-1">{item.descricao}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>

                    {/* Nome completo */}
                    <Text className="font-semibold text-sm text-gray-700 mb-1">Nome completo:</Text>
                    <View className="rounded-xl border border-gray-200 bg-gray-50/50 flex flex-row items-center px-3 mb-3">
                        <FontAwesome name="user-o" size={18} color="#9ca3af" />
                        <TextInput
                            placeholder="Ex.: João da Silva"
                            placeholderTextColor="#9ca3af"
                            className="flex-1 text-base p-3 text-gray-800"
                        />
                    </View>

                    {/* E-mail */}
                    <Text className="font-semibold text-sm text-gray-700 mb-1">E-mail:</Text>
                    <View className="rounded-xl border border-gray-200 bg-gray-50/50 flex flex-row items-center px-3 mb-3">
                        <FontAwesome name="envelope-o" size={18} color="#9ca3af" />
                        <TextInput
                            placeholder="Ex.: joao@email.com"
                            placeholderTextColor="#9ca3af"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            className="flex-1 text-base p-3 text-gray-800"
                        />
                    </View>

                    {/* Senha */}
                    <Text className="font-semibold text-sm text-gray-700 mb-1">Senha:</Text>
                    <View className="rounded-xl border border-gray-200 bg-gray-50/50 flex flex-row items-center px-3 mb-3">
                        <FontAwesome name="lock" size={18} color="#9ca3af" />
                        <TextInput
                            placeholder="Mínimo de 6 caracteres"
                            placeholderTextColor="#9ca3af"
                            secureTextEntry={!mostrarSenha}
                            className="flex-1 text-base p-3 text-gray-800"
                        />
                        <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
                            <FontAwesome name={mostrarSenha ? "eye" : "eye-slash"} size={18} color="#9ca3af" />
                        </TouchableOpacity>
                    </View>

                    {/* Confirmar senha */}
                    <Text className="font-semibold text-sm text-gray-700 mb-1">Confirmar senha:</Text>
                    <View className="rounded-xl border border-gray-200 bg-gray-50/50 flex flex-row items-center px-3 mb-4">
                        <FontAwesome name="lock" size={18} color="#9ca3af" />
                        <TextInput
                            placeholder="Digite a senha novamente"
                            placeholderTextColor="#9ca3af"
                            secureTextEntry={!mostrarConfirmarSenha}
                            className="flex-1 text-base p-3 text-gray-800"
                        />
                        <TouchableOpacity onPress={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)}>
                            <FontAwesome name={mostrarConfirmarSenha ? "eye" : "eye-slash"} size={18} color="#9ca3af" />
                        </TouchableOpacity>
                    </View>

                    {/* Botão Cadastrar */}
                    <TouchableOpacity
                        className='rounded-xl w-full bg-blue-500 h-12 items-center justify-center shadow-sm mb-4'
                        onPress={() => navegar("necessidades")}
                    >
                        <Text className='text-white font-bold text-lg'>Cadastrar</Text>
                    </TouchableOpacity>

                    {/* Link Login */}
                    <View className="flex flex-row justify-center items-center gap-1">
                        <Text className="text-gray-500 text-sm">Já tem uma conta?</Text>
                        <TouchableOpacity onPress={() => navegar("cadastro")}>
                            <Text className="text-[#16a69c] font-medium underline text-sm">
                                Fazer login
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="-mt-[12px]">
                    <Image source={require('../../assets/images/backgroundRodape.png')} style={{ width: '100%', height: 150, resizeMode: 'contain' }} />
                </View>
        </SafeAreaProvider>
    );
}