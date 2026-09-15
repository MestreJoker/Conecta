import FontAwesome from "@expo/vector-icons/FontAwesome";
import { NecessidadeProps } from "app/Interfaces";
import { useRouter } from "expo-router";
import { View, Image, Text, TouchableOpacity } from "react-native";


export default function NecessidadeCard(props: NecessidadeProps) {
    let textoPrioridade: string
    let background: string
    //Verificações de prioridade
    if (props.prioridade == 3) {
        background = "bg-[#fde9e9]"
        textoPrioridade = "Alta"
    }
    else if (props.prioridade == 2) {
        background = "bg-[#fdf6e6]"
        textoPrioridade = "Média"
    }
    else {
        background = "bg-[#e6f7f1]"
        textoPrioridade = "Baixa"
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
        <TouchableOpacity className="rounded-lg border border-gray-200 shadow-md p-2 flex flex-row gap-2 bg-white h-[110px]" onPress={abrirNecessidade}>
            <View className={`rounded-xl ${background} w-[85px] h-[85px]`}>
                <Image source={imagem} style={{ width: 50, height: 50 }} className="m-auto" />
            </View>

            <View className="flex-1">
                <Text className="font-bold text-2xl">{props.necessidade}</Text>
                <Text className="text-lg text-gray-500">{props.qtdNecessaria} {textoTipoQtd}</Text>
                <View className="flex flex-row gap-1 items-center mb-1">
                    <FontAwesome name="building-o" color={'#757575'} size={15}/>
                    <Text className=" text-gray-600">{props.ong}</Text>
                </View>
                <View className="flex flex-row gap-1 items-center">
                    <FontAwesome name="map-marker" color={'#757575'} size={17}/>
                    <Text className="text-gray-600">{props.distancia} {textoDitancia}</Text>
                </View>
            </View>

            <View className="flex justify-between items-end">
                <View className={`${background} px-3 rounded-full`}>
                    <Text className="text-lg">{textoPrioridade}</Text>
                </View>
                <FontAwesome name="heart-o" className="mr-2" size={20} />
            </View>
        </TouchableOpacity>
    )
}