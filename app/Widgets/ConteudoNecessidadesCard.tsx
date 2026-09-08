import { useEffect, useState } from "react";
import { View } from "react-native";
import dadosNecessidades from './../../data/necessidades.json'
import NecessidadeCard from "app/Components/Necessidades/NecessidadeCard";

interface ConteudoProps {
    id: number
    slug: string
    necessidade: string,
    qtdNecessaria: number,
    tipoQtd: string,
    ong: string,
    endereco: string,
    distancia: number,
    isKm: true,
    prioridade: number,
    categoria: string
}

export default function ConteudoNecessidadesCard() {
    const [conteudoNecessidades, setConteudoNecessidades] = useState<ConteudoProps[]>([])

    useEffect(() => {
        const dados: ConteudoProps[] = dadosNecessidades
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setConteudoNecessidades(dados)
    }, [])
    return (
        <View className="flex gap-3">
            {conteudoNecessidades.map((item, index) => {
                return (
                    <NecessidadeCard key={`necessidade${index + 1}`} id={item.id} slug={item.slug} necessidade={item.necessidade} qtdNecessaria={item.qtdNecessaria} tipoQtd={item.tipoQtd} ong={item.ong} endereco={item.endereco} distancia={item.distancia} isKm={item.isKm} prioridade={item.prioridade} categoria={item.categoria} />
                )
            })}
        </View>
    )
}