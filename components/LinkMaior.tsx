import { View } from "react-native";

interface LinkMaiorProps {
    icone: React.ReactNode
    texto: string
    corFundo: string
}

export default function LinkMaior(props: LinkMaiorProps){
    return(
        <View className={`w-[45%] rounded-xl flex flex-col items-center justify-center gap-2 ${props.corFundo} text-white font-bold p-1`}>
            <View>
                {props.icone}
            </View>
            {props.texto}
        </View>
    )
}