import './../global.css';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View, Image, Dimensions, StyleSheet, Text, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
// Proporção exata para 1080x1920
const IMAGE_HEIGHT = SCREEN_WIDTH * (1920 / 1080);

export default function App() {
  const router = useRouter();
  function abrirNecessidade() {
    router.push('/necessidades');
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container} className='mb-10'>
        <Image
          source={require('./../assets/images/background.jpg')}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: SCREEN_WIDTH,
            height: IMAGE_HEIGHT,
          }}
          resizeMode="contain"
        />

        <View className='flex items-center gap-2 mt-[127%]'>
          <TouchableOpacity
            className='rounded-xl p-2 w-[80%] bg-blue-500 text-white text-center font-bold
            h-[60px]' onPress={abrirNecessidade}>
            <Text className='text-white font-bold text-xl m-auto'>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className='rounded-xl border-2 border-[#199795] p-2 w-[80%] text-center font-bold  h-[60px]'>
            <Text className='text-[#199795] text-xl font-bold m-auto'>Criar conta</Text>
          </TouchableOpacity>
        </View>

        <View className='flex flex-row justify-center gap-x-[35px] mt-auto w-[91%] mx-auto'>
          <View className='flex flex-row items-center w-[80px] gap-2'>
            <View className='w-11 h-11 rounded-full bg-[#e7f5ef] flex justify-center items-center'>
              <FontAwesome name="group" size={17} style={{ color: '#37ae80' }} />
            </View>
            <Text className='text-xs'>Conecte-se com ONGs</Text>
          </View>


          <View className='flex flex-row items-center w-[80px] gap-2'>
            <View className='w-11 h-11 rounded-full bg-[#e5effe] flex justify-center items-center'>
              <FontAwesome name="gift" size={17} style={{ color: '#095ae1' }} />
            </View>
            <Text className='text-xs'>Conecte-se com ONGs</Text>
          </View>


          <View className='flex flex-row items-center w-[80px] gap-2'>
            <View className='w-11 h-11 rounded-full bg-[#e7f5ef]  flex justify-center items-center'>
              <FontAwesome name="heart" size={17} style={{ color: '#37ae80' }} />
            </View>
            <Text className='text-xs'>Conecte-se com ONGs</Text>
          </View>
        </View>

        <StatusBar style="dark" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    overflow: 'hidden', // Corta qualquer excesso vertical sem criar rolagem
  },
});