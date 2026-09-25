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
  const [email, setEmail] = useState('gabriel@fiap.com.br');
  const [password, setPassword] = useState('123456');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Banner de Topo / Marca */}
        <View style={styles.brandBox}>
          <View style={styles.logoBadge}>
            <Text style={styles.logoBadgeText}>FORD</Text>
          </View>
          <Text style={styles.title}>Ford Competitive</Text>
          <Text style={styles.subtitle}>Acesso corporativo - Inteligência Automotiva</Text>
        </View>

        {/* Formulário */}
        <View style={styles.formCard}>
          <Text style={styles.label}>E-mail Corporativo</Text>
          <View style={styles.inputBox}>
            <Ionicons name="mail-outline" size={20} color="#64748B" />
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="seu.email@ford.com"
              autoCapitalize="none"
            />
          </View>

          <Text style={styles.label}>Palavra-passe</Text>
          <View style={styles.inputBox}>
            <Ionicons name="lock-closed-outline" size={20} color="#64748B" />
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholder="••••••••"
            />
          </View>

          <TouchableOpacity style={styles.loginBtn} onPress={onLogin}>
            <Text style={styles.loginBtnText}>Entrar no Sistema</Text>
            <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <Text style={styles.footerText}>FIAP Challenge • Desafio 01 Ford</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B1A30', justifyContent: 'center' },
  content: { padding: 24 },
  brandBox: { alignItems: 'center', marginBottom: 32 },
  logoBadge: { backgroundColor: '#002C6C', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20, borderWidth: 1, borderColor: '#1E3A8A', marginBottom: 12 },
  logoBadgeText: { color: '#FFFFFF', fontWeight: '900', letterSpacing: 3, fontSize: 16 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#FFFFFF' },
  subtitle: { fontSize: 13, color: '#94A3B8', marginTop: 4 },
  formCard: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 20, elevation: 4 },
  label: { fontSize: 12, fontWeight: 'bold', color: '#334155', marginBottom: 6 },
  inputBox: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 8, paddingHorizontal: 12, marginBottom: 16, backgroundColor: '#F8FAFC' },
  input: { flex: 1, paddingVertical: 12, paddingLeft: 8, fontSize: 14, color: '#0F172A' },
  loginBtn: { backgroundColor: '#002C6C', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 14, borderRadius: 8, gap: 8, marginTop: 8 },
  loginBtnText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 15 },
  footerText: { textAlign: 'center', color: '#64748B', fontSize: 12, marginTop: 24 },
});