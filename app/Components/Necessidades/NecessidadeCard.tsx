import FontAwesome from "@expo/vector-icons/FontAwesome";
import { NecessidadeProps } from "app/Interfaces";
import { useRouter } from "expo-router";
import { View, Image, Text, TouchableOpacity } from "react-native";


export default function NecessidadeCard(props: NecessidadeProps) {
    let textoPrioridade: string
    let background: string
    let corTextoPrioridade: string
    let background2: string
    //Verificações de prioridade
    if (props.prioridade == 3) {
        background = "bg-[#fde9e9]"
        textoPrioridade = "Alta"
        corTextoPrioridade = "text-red-500"
        background2 = "bg-red-500"
    }
    else if (props.prioridade == 2) {
        background = "bg-[#fdf6e6]"
        textoPrioridade = "Média"
        corTextoPrioridade = "text-yellow-600"
        background2 = "bg-yellow-400"
    }
    else {
        background = "bg-[#e6f7f1]"
        textoPrioridade = "Baixa"
        corTextoPrioridade = "text-green-600"
        background2 = "bg-green-400"
    }

    //Verificações de categoria
    let imagem
    if (props.categoria == "todas") {
        imagem = require('./../../../assets/images/necessidades/todas.png')
    }
    else if (props.categoria == "alimentos") {
        imagem = require('./../../../assets/images/necessidades/alimentos.png')
    }
    else if (props.categoria == "brinquedos") {
        imagem = require('./../../../assets/images/necessidades/brinquedos.png')
    }
    else if (props.categoria == "roupas") {
        imagem = require('./../../../assets/images/necessidades/roupas.png')
    }
    else if (props.categoria == "tecnologia") {
        imagem = require('./../../../assets/images/necessidades/tecnologia.png')
    }

    //Verificações de tipo de quantidade
    let textoTipoQtd: string
    if (props.tipoQtd == "kg" && props.qtdNecessaria < 2) {
        textoTipoQtd = "kg necessário"
    }
    else if (props.tipoQtd == "kg" && props.qtdNecessaria > 2) {
        textoTipoQtd = "kg necessários"
    }
    else if (props.tipoQtd == "unidade" && props.qtdNecessaria < 2) {
        textoTipoQtd = "unidade necessária"
    }
    else {
        textoTipoQtd = "unidades necessárias"
    }

    //Verificações de distância
    let textoDitancia: string
    if (props.isKm) {
        textoDitancia = "km"
    }
    else {
        textoDitancia = "m"
    }

    const router = useRouter();
    function abrirNecessidade() {
        router.push(`/necessidades/${props.slug}`);
    };
    return (
        <TouchableOpacity className="rounded-3xl border border-gray-100 shadow-md p-4 flex flex-row gap-2 bg-white h-[108px]" onPress={abrirNecessidade}>
            <View className={`rounded-2xl ${background} w-[85px] h-full`}>
                <Image source={imagem} style={{ width: 45, height: 45 }} className="m-auto" />
            </View>

            <View className={`w-[15] h-[15] ${background2} rounded-full mt-1.5 ml-1.5`}></View>

            <View className="flex-1">
                <Text className="font-bold ">{props.necessidade}</Text>
                <Text className="text-gray-500">{props.qtdNecessaria} {textoTipoQtd}</Text>
                <View className="flex flex-row gap-1 items-center mb-1">
                    <FontAwesome name="building-o" color={'#757575'} size={13}/>
                    <Text className=" text-gray-600 text-sm">{props.ong}</Text>
                </View>
                <View className="flex flex-row gap-1 items-center">
                    <FontAwesome name="map-marker" color={'#757575'} size={15}/>
                    <Text className="text-gray-600 text-sm">{props.distancia} {textoDitancia} de cocê</Text>
                </View>
            </View>

            <View className="flex justify-between items-end">
                <View className={`${background} py-1 px-4 rounded-full`}>
                    <Text className={`text-sm ${corTextoPrioridade}`}>{textoPrioridade}</Text>
                </View>
                <FontAwesome name="heart-o" className="mr-2" size={20} style={{color: 'gray'}}/>
            </View>
        </TouchableOpacity>
    )
}