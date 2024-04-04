import { Input } from '@/components/input'
import { colors } from '@/styles/colors'
import { FontAwesome6, MaterialIcons } from '@expo/vector-icons'
import { View, Image, Alert } from 'react-native'
import { Button } from '@/components/button'
import { Link, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'

export default function Register(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  function handleRegister(){
    if(!name.trim() && !email.trim()){
      return Alert.alert("Inscrição" ,"Por favor digite os seus dados para realizar a inscrição!")
    }

    if(!name.trim()){
      return Alert.alert("Inscrição" ,"Por favor digite o seu nome completo!")
    }

    if(!email.trim()){
      return Alert.alert("Inscrição", "Por favor digite o seu email!")
    }

    router.push('/ticket') 
  }

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
          <Input.Field placeholder='Nome Completo' onChangeText={setName}/>
        </Input>

        <Input>
          <MaterialIcons 
            name='alternate-email'
            size={20}
            color={colors.green[200]}
          />
          <Input.Field placeholder='E-mail' keyboardType='email-address' onChangeText={setEmail}/>
        </Input>

        <Button 
        title='Realizar Inscrição'
        onPress={handleRegister}
        />

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