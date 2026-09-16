import { useRouter } from 'expo-router';
import { View, Image, Text, TouchableOpacity } from 'react-native';

interface CategoriaCardProps {
  imagem: any;
  texto: string;
}

export default function CategoriaCard(props: CategoriaCardProps) {
  
  return (
    <TouchableOpacity className="items-center gap-2 rounded-2xl border border-gray-200 px-1 py-4 w-[75px]">
      <Image source={props.imagem} style={{ width: 30, height: 30 }} />
      <Text className='text-[0.6rem] font-bold'>{props.texto}</Text>
    </TouchableOpacity>
  );
}