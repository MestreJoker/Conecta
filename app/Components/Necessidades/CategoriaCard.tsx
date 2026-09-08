import { useRouter } from 'expo-router';
import { View, Image, Text, TouchableOpacity } from 'react-native';

interface CategoriaCardProps {
  imagem: any;
  texto: string;
}

export default function CategoriaCard(props: CategoriaCardProps) {
  
  return (
    <TouchableOpacity className="flex-1 items-center gap-2 rounded-lg border border-gray-400 p-1">
      <Image source={props.imagem} style={{ width: 50, height: 50 }} />
      <Text className='text-[0.5rem] font-bold'>{props.texto}</Text>
    </TouchableOpacity>
  );
}