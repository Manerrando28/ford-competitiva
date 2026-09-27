
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const LoginScreen = ({ onLogin }: { onLogin: () => void }) => {
  const [email, setEmail] = useState('gabriel@ford.com.br');
  const [password, setPassword] = useState('123456');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        {/* Marca */}
        <View style={styles.brandBox}>

          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/ford-logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <View />

          <Text style={styles.title}>
            Ford Competitive
          </Text>

          <Text style={styles.subtitle}>
            Acesso corporativo
          </Text>

          <Text style={styles.description}>
            Inteligência Automotiva
          </Text>
        </View>

        {/* Formulário */}
        <View style={styles.formCard}>

          <Text style={styles.formTitle}>
            Login
          </Text>

          <Text style={styles.formSubtitle}>
            Entre com suas credenciais para continuar
          </Text>

          {/* E-mail */}
          <Text style={styles.label}>
            EMAIL CORPORATIVO
          </Text>

          <View style={styles.inputBox}>
            <Ionicons
              name="mail-outline"
              size={20}
              color="#415A77"
            />

            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="seu.email@ford.com"
              placeholderTextColor="#7D8793"
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>

          {/* Senha */}
          <Text style={styles.label}>
            SENHA
          </Text>

          <View style={styles.inputBox}>
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color="#415A77"
            />

            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholder="••••••••"
              placeholderTextColor="#7D8793"
            />
          </View>

          {/* Botão */}
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={onLogin}
            activeOpacity={0.8}
          >
            <Text style={styles.loginBtnText}>
              Entrar
            </Text>

          </TouchableOpacity>

        </View>

        {/* Segurança */}
        <View style={styles.securityBox}>
          <Ionicons
            name="shield-checkmark-outline"
            size={15}
            color="#C7BEB6"
          />

          <Text style={styles.securityText}>
            Ambiente corporativo seguro
          </Text>
        </View>

        {/* Footer */}
        <Text style={styles.footerText}>
          FIAP Challenge • Desafio 01 Ford
        </Text>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  // =========================
  // FUNDO
  // =========================

  container: {
    flex: 1,
    backgroundColor: '#0D1B2A',
    justifyContent: 'center',
  },

  content: {
    paddingHorizontal: 24,
    width: '100%',
  },

  // =========================
  // MARCA
  // =========================

  brandBox: {
    alignItems: 'center',
    marginBottom: 28,
  },

logoContainer: {
  width: 280,
  height: 130, // diminui de 145 para 130
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 10, // era 8
},

logo: {
  width: 220,
  height: 105,
},

title: {
  fontSize: 27,
  fontWeight: '800',
  color: '#E0E1DD',
  letterSpacing: 0.5,
  marginTop: 0,
},

  subtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#C7BEB6',
    marginTop: 6,
    letterSpacing: 0.8,
  },

  description: {
    fontSize: 12,
    color: '#8D96A1',
    marginTop: 3,
  },


  formCard: {
    backgroundColor: '#1B263B',

    borderRadius: 20,

    padding: 22,

    borderWidth: 1,
    borderColor: '#415A77',

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 8,
    },

    shadowOpacity: 0.35,

    shadowRadius: 15,

    elevation: 8,
  },

  formTitle: {
    fontSize: 21,
    fontWeight: '700',
    color: '#E0E1DD',
    marginBottom: 4,
  },

  formSubtitle: {
    fontSize: 12,
    color: '#C7BEB6',
    marginBottom: 24,
  },

  // =========================
  // INPUTS
  // =========================

  label: {
    fontSize: 11,
    fontWeight: '800',

    color: '#C7BEB6',

    marginBottom: 7,

    letterSpacing: 0.8,
  },

  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',

    height: 50,

    borderWidth: 1,

    borderColor: '#415A77',

    borderRadius: 10,

    paddingHorizontal: 14,

    marginBottom: 18,

    backgroundColor: '#0D1B2A',
  },

  input: {
    flex: 1,

    paddingVertical: 10,

    paddingLeft: 10,

    fontSize: 14,

    color: '#E0E1DD',
  },

  // =========================
  // BOTÃO
  // =========================

  loginBtn: {
    backgroundColor: '#415A77',

    flexDirection: 'row',

    justifyContent: 'center',

    alignItems: 'center',

    height: 52,

    borderRadius: 20,

    gap: 10,

    marginTop: 4,

    shadowColor: '#415A77',

    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.3,

    shadowRadius: 8,

    elevation: 4,
  },

  loginBtnText: {
    color: '#E0E1DD',

    fontWeight: '800',

    fontSize: 15,
  },

  arrowCircle: {
    width: 25,

    height: 25,

    borderRadius: 13,

    backgroundColor: '#0D1B2A',

    justifyContent: 'center',

    alignItems: 'center',
  },

  // =========================
  // SEGURANÇA
  // =========================

  securityBox: {
    flexDirection: 'row',

    justifyContent: 'center',

    alignItems: 'center',

    marginTop: 18,

    gap: 6,
  },

  securityText: {
    color: '#7D8793',

    fontSize: 11,
  },

  // =========================
  // FOOTER
  // =========================

  footerText: {
    textAlign: 'center',

    color: '#596575',

    fontSize: 11,

    marginTop: 20,

    letterSpacing: 0.3,
  },
});

