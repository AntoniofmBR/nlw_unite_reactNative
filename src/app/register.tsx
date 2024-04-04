import { Input } from '@/components/input'
import { colors } from '@/styles/colors'
import { FontAwesome6, MaterialIcons } from '@expo/vector-icons'
import { View, Image } from 'react-native'
import { Button } from '@/components/button'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function Register(){
  return (
    <View className="flex-1 bg-green-500 items-center justify-center p-3">
      <StatusBar style='light'/>
      <Image 
      source={require("@/assets/logo.png")} 
      resizeMode='contain'
      className='h-16'
      />

      <View className='w-full mt-12 gap-3'>
        <Input>
          <FontAwesome6 
            name='user-circle'
            size={20}
            color={colors.green[200]}
          />
          <Input.Field placeholder='Nome Completo'/>
        </Input>

        <Input>
          <MaterialIcons 
            name='alternate-email'
            size={20}
            color={colors.green[200]}
          />
          <Input.Field placeholder='E-mail' keyboardType='email-address'/>
        </Input>

        <Button title='Realizar Inscrição'/>

        <Link 
        href="/"
        className='text-gray-100 text-base font-bold text-center mt-8'
        >
          Já possui ingresso?
        </Link>
      </View>
    </View>
  )
}