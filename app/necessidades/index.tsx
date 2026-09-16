import FontAwesome from '@expo/vector-icons/FontAwesome';
import CategoriaCard from '../Components/Necessidades/CategoriaCard';
import { View, Text, ScrollView, Image, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import ConteudoNecessidadesCard from 'app/Widgets/ConteudoNecessidadesCard';

export default function Necessidades() {
    const categoriasCard = [
        { imagem: require('../../assets/images/necessidades/todas.png'), texto: 'Todas' },
        { imagem: require('../../assets/images/necessidades/alimentos.png'), texto: 'Alimentos' },
        { imagem: require('../../assets/images/necessidades/brinquedos.png'), texto: 'Brinquedos' },
        { imagem: require('../../assets/images/necessidades/roupas.png'), texto: 'Roupas' },
        { imagem: require('../../assets/images/necessidades/tecnologia.png'), texto: 'Tecnologia' },
        { imagem: require('../../assets/images/necessidades/tecnologia.png'), texto: 'Outros' }
    ];
    return (
        <SafeAreaProvider>
            <ScrollView className="px-4 py-7">
                <View className="flex-row items-center justify-between">
                    <Image
                        source={require('../../assets/images/conecta.png')}
                        style={{ width: 160, height: 26.4 }}
                    />

                    <View className="flex-row items-center gap-7">
                        <FontAwesome name="bell" size={26} color="gray" />
                        <View className="h-12 w-12 items-center justify-center rounded-full bg-[#def3ed]">
                            <FontAwesome name="user" size={26} color="#129e84" />
                        </View>
                    </View>
                </View>

                <View className="mt-5 flex-row items-center rounded-xl border border-gray-300 shadow-sm bg-white h-[50px]">
                    <View className="px-3">
                        <FontAwesome name="search" size={24} color="gray" />
                    </View>

                    <View className="flex-1 hfull">
                        <TextInput
                            placeholder="O que você procura?"
                            placeholderTextColor="#9ca3af"
                            className="h-full z-100 px-2 text-lg"
                        />
                    </View>

                    <View className="border-l border-gray-300 px-3">
                        <FontAwesome name="filter" size={24} color="#1b6def" />
                    </View>
                </View>

                <Text className='mt-3 font-extrabold text-lg'>Categorias</Text>
                <ScrollView className="mt-2" horizontal
                contentContainerStyle={{ gap: 8, }}>
                    {categoriasCard.map((item, index) => (
                        <CategoriaCard key={`categoria${index + 1}`}imagem={item.imagem} texto={item.texto} />
                    ))}
                </ScrollView>

                <Text className='mt-7 font-extrabold text-lg my-1'>Necessidades próximas</Text>

                <View className='flex flex-row justify-between items-center'>
                    <View className='gap-1 flex flex-row items-center'>
                        <FontAwesome name='map-marker' color={'#9E9E9E'} size={15}/>
                        <Text className='text-gray-500'>São Paulo - SP</Text>
                    </View>
                    <Text className='text-blue-500'>Alterar localização</Text>
                </View>
                <View className="flex mt-6 mb-[45px]">
                    <ConteudoNecessidadesCard />
                </View>
            </ScrollView>
        </SafeAreaProvider>
    );
}