import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';
import styles from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '~/routes';
import Button from '~/components/Button';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {getCurrentUser} from 'aws-amplify/auth';
import {login} from '~/services/api';
import Loading from '~/components/Loading';
import {Host} from 'react-native-portalize';

type LoginProps = NativeStackScreenProps<NavigationParamList, 'Login'>;

export default function Login({navigation}: LoginProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    getCurrentUser()
      .then(() => {
        navigation.navigate('Home');
      })
      .catch(() => {})
      .finally(() => setIsLoading(false));
  }, [navigation]);

  const performLogin = useCallback(() => {
    setIsLoading(true);
    login(username, password)
      .then(() => {
        navigation.navigate('Home');
      })
      .catch(() => setShowError(true))
      .finally(() => setIsLoading(false));
  }, [password, username, navigation]);

  const guestNavigate = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <Host>
      {isLoading && <Loading />}
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Hisnëk Shop</Text>
        <Text style={styles.heading}>Acesse sua conta</Text>
        <View style={[styles.input, showError && styles.inputError]}>
          <Text
            style={[styles.inputLabel, showError && styles.inputLabelError]}>
            Usuário
          </Text>
          <TextInput
            value={username}
            onChangeText={t => {
              setUsername(t);
              setShowError(false);
            }}
            style={styles.inputField}
          />
        </View>
        <View style={[styles.input, showError && styles.inputError]}>
          <Text
            style={[styles.inputLabel, showError && styles.inputLabelError]}>
            Senha
          </Text>
          <TextInput
            value={password}
            onChangeText={t => {
              setPassword(t);
              setShowError(false);
            }}
            secureTextEntry
            style={styles.inputField}
          />
        </View>
        {showError && <Text style={styles.error}>Credenciais inválidas</Text>}
        <Button
          style={styles.confirm}
          enabled={Boolean(username && password)}
          onPress={performLogin}>
          <Text style={styles.confirmText}>Entrar</Text>
        </Button>
        <TouchableOpacity onPress={guestNavigate}>
          <Text style={styles.guest}>ou acessar como convidado</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Host>
  );
}
