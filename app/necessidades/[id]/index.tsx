import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import dadosNecessidade from "data/necessidades.json"
import dadosOng from "data/ongs.json"
import { NecessidadeProps, OngsProps } from 'app/Interfaces';

export default function DetalhesNecessidade() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const slug = String(id);

  const router = useRouter();
  function voltar() {
    router.push('/necessidades');
  };

  const [necessidade, setNecessidade] = useState<NecessidadeProps>({} as NecessidadeProps)
  const [ong, setOng] = useState<OngsProps>({})
  useEffect(() => {
    async function resgatarDados() {
      try {
        const itemNecessidade = dadosNecessidade.find(item => item.slug == slug)
        if (itemNecessidade) {
          setNecessidade(itemNecessidade)
          const itemOng = dadosOng.find(item => item.id == itemNecessidade.idOng)
          if (itemOng) {
            setOng(itemOng)
          }
        }
        console.log('ONG' + ong)
      }
      catch (erro) {
        console.log("Erro: " + erro)
      }
    }
    resgatarDados()
  }, [slug])

  let textoPrioridade: string
  let background: string
  let backgroundTexto: string
  let corTexto: string
  if (necessidade.prioridade == 3) {
    background = "bg-[#fef3f4]"
    backgroundTexto = "bg-[#fde9e9]"
    textoPrioridade = "🔴 URGENTE"
    corTexto = "text-red-600"
  }
  else if (necessidade.prioridade == 2) {
    background = "bg-[#fdf6e6]"
    backgroundTexto = "bg-[#]"
    textoPrioridade = "Média"
    corTexto = "text-"
  }
  else {
    background = "bg-[#e6f7f1]"
    backgroundTexto = "bg-[#]"
    textoPrioridade = "Baixa"
    corTexto = "text-"
  }

  //Verificações de categoria
  let imagem
  if (necessidade.categoria == "todas") {
    imagem = require('./../../../assets/images/necessidades/todas.png')
  }
  else if (necessidade.categoria == "alimentos") {
    imagem = require('./../../../assets/images/necessidades/alimentos.png')
  }
  else if (necessidade.categoria == "brinquedos") {
    imagem = require('./../../../assets/images/necessidades/brinquedos.png')
  }
  else if (necessidade.categoria == "roupas") {
    imagem = require('./../../../assets/images/necessidades/roupas.png')
  }
  else if (necessidade.categoria == "tecnologia") {
    imagem = require('./../../../assets/images/necessidades/tecnologia.png')
  }

  //Verificações de tipo de quantidade
  let textoTipoQtd: string
  if (necessidade.tipoQtd == "kg" && necessidade.qtdNecessaria < 2) {
    textoTipoQtd = "kg necessário"
  }
  else if (necessidade.tipoQtd == "kg" && necessidade.qtdNecessaria > 2) {
    textoTipoQtd = "kg necessários"
  }
  else if (necessidade.tipoQtd == "unidade" && necessidade.qtdNecessaria < 2) {
    textoTipoQtd = "unidade necessária"
  }
  else {
    textoTipoQtd = "unidades necessárias"
  }

  //Verificações de distância
  let textoDitancia: string
  if (necessidade.isKm) {
    textoDitancia = "km"
  }
  else {
    textoDitancia = "m"
  }

  return (
    <SafeAreaProvider>
      <ScrollView className="flex-1 p-4">
        <View className='flex flex-row justify-between'>
          <FontAwesome name='arrow-left' onPress={voltar} />
          <Text className='font-bold'>Detalhes da necessidade</Text>
          <FontAwesome name='heart-o' size={16} />
        </View>

        <View className={`rounded-lg ${background} p-3 flex flex-row justify-between h-[130px] mt-5`}>
          <View className='flex justify-between'>
            <View className={`px-2 py-0.5 w-fit rounded-full ${backgroundTexto}`}>
              <Text className={`${corTexto} font-extrabold text-[0.75rem]`}>{textoPrioridade}</Text>
            </View>
            <Text className='text-2xl font-bold'>{necessidade.necessidade}</Text>
            <Text className='text-[0.7rem] text-gray-600'>{necessidade.qtdNecessaria} {textoTipoQtd}</Text>
            <View className='flex flex-row gap-2 items-center'>
              <FontAwesome name='building-o' size={10} color={'gray'} />
              <Text className='text-[0.7rem] text-gray-600'>{necessidade.ong}</Text>
            </View>
            <View className='flex flex-row gap-2 items-center'>
              <FontAwesome name='map-marker' color={'gray'} />
              <Text className='text-[0.7rem] text-green-700'>{necessidade.distancia} {textoDitancia} de você</Text>
            </View>
          </View>

          <Image source={imagem} style={{ width: 100, height: 100 }} className='my-auto' />
        </View>

        <View className='flex flex-row gap-2 mt-4 items-center'>
          <FontAwesome name='exclamation-circle' size={18} />
          <Text className='font-bold'>Sobre a necessidade</Text>
        </View>
        <Text className='text-[0.7rem] text-gray-600 ml-6'>
          {necessidade.descricao}
        </Text>

        <View className='flex flex-row gap-2 mt-4 items-center'>
          <FontAwesome name='list' size={18} />
          <Text className='font-bold'>Informações</Text>
        </View>

        <View className='flex flex-row items-center gap-2 mt-4'>
          <FontAwesome name='building' size={18} />
          <Text className='font-bold'>Sobre a ONG</Text>
        </View>

        <View className='flex flex-row mt-2 w-full gap-4'>
          <View className='h-[70px] w-[70px] border rounded-full'></View>
          <View className='flex-1'>
            <Text className='font-bold'>{ong.nome}</Text>
            <Text>{ong.sobre}</Text>
            <View className='flex flex-row items-center gap-2'>
              <Text className='text-blue-500 text-xs font-bold mt-2'>Ver mais sobre a ONG</Text>
              <FontAwesome name='angle-right' size={14} className='mt-1.5' color={'blue'}/>
            </View>
          </View>

        </View>


        <TouchableOpacity className='rounded-lg bg-blue-500 w-full flex flex-row items-center justify-center h-10 mt-[50]'>
          <FontAwesome name='handshake-o' className='mr-2' size={23} color={'white'} />
          <Text className='font-bold text-white'>Tenho interesse em ajudar</Text>
        </TouchableOpacity>

        <View className='flez flex-row gap-2 justify-center mt-1 items-center'>
          <FontAwesome name='shield' color={'gray'} />
          <Text className='text-[0.6rem] text-gray-600'>Suas informações serão compartilhadas apenas com a ONG</Text>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}