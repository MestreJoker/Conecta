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
            <ScrollView className="p-4">
                <View className="flex-row items-center justify-between">
                    <Image
                        source={require('../../assets/images/conecta.png')}
                        style={{ width: 110, height: 18.2 }}
                    />

                    <View className="flex-row items-center gap-3">
                        <FontAwesome name="bell" size={18} color="gray" />
                        <View className="h-8 w-8 items-center justify-center rounded-full bg-[#def3ed]">
                            <FontAwesome name="user" size={18} color="#129e84" />
                        </View>
                    </View>
                </View>

                <View className="mt-5 flex-row items-center rounded-xl border border-gray-300 shadow-sm bg-white h-[60px]">
                    <View className="px-3">
                        <FontAwesome name="search" size={24} color="gray" />
                    </View>

                    <View className="flex-1 h-[80px]">
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

                <Text className='mt-3 font-extrabold'>Categorias</Text>
                <View className="mt-2 flex-row gap-2">
                    {categoriasCard.map((item, index) => (
                        <CategoriaCard key={`categoria${index + 1}`}imagem={item.imagem} texto={item.texto} />
                    ))}
                </View>

                <Text className='mt-3 font-extrabold'>Necessidades próximas</Text>

                <View className='flex flex-row justify-between items-center'>
                    <View className='gap-1 flex flex-row'>
                        <FontAwesome name='map-marker' color={'#9E9E9E'} />
                        <Text className='text-gray-500 text-xs'>São Paulo - SP</Text>
                    </View>
                    <Text className='text-blue-500 text-xs'>Alterar localização</Text>
                </View>
                <View className="flex mt-2">
                    <ConteudoNecessidadesCard />
                </View>
            </ScrollView>
        </SafeAreaProvider>
    );
}