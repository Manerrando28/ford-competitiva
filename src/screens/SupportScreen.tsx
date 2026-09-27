import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const SupportScreen = () => {
  const handleCallSupport = (type: string) => {
    Alert.alert(
      'Suporte Ford',
      `Iniciando atendimento para: ${type}`
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <View style={styles.header}>

          <View style={styles.headerIcon}>
            <Ionicons
              name="headset-outline"
              size={23}
              color="#E0E1DD"
            />
          </View>

          <View style={styles.headerContent}>

            <Text style={styles.title}>
              Suporte & Assistência
            </Text>

            <Text style={styles.subtitle}>
              Canais diretos da Ford Motor Company
            </Text>

          </View>

        </View>


        {/* ================================================= */}
        {/* ASSISTÊNCIA 24H */}
        {/* ================================================= */}

        <View style={styles.emergencyCard}>

          <View style={styles.emergencyTop}>

            <View style={styles.emergencyIcon}>
              <Ionicons
                name="call-outline"
                size={23}
                color="#E0E1DD"
              />
            </View>

            <View style={styles.availableBadge}>
              <View style={styles.availableDot} />

              <Text style={styles.availableText}>
                DISPONÍVEL 24H
              </Text>
            </View>

          </View>


          <Text style={styles.emergencyTitle}>
            Ford Assistance 24h
          </Text>

          <Text style={styles.emergencyDesc}>
            Atendimento para assistência emergencial,
            guincho, pane elétrica e suporte técnico.
          </Text>


          <TouchableOpacity
            style={styles.emergencyBtn}
            onPress={() =>
              handleCallSupport('Ford Assistance 0800')
            }
            activeOpacity={0.8}
          >

            <Ionicons
              name="call"
              size={17}
              color="#0D1B2A"
            />

            <Text style={styles.emergencyBtnText}>
              Ligar 0800 703 3673
            </Text>

          </TouchableOpacity>

        </View>


        {/* ================================================= */}
        {/* SERVIÇOS */}
        {/* ================================================= */}

        <Text style={styles.sectionTitle}>
          Serviços disponíveis
        </Text>

        <Text style={styles.sectionSubtitle}>
          Acesse rapidamente os principais recursos de suporte.
        </Text>


        {/* MANUAL */}

        <TouchableOpacity
          style={styles.optionCard}
          onPress={() =>
            handleCallSupport('Manual do Proprietário')
          }
          activeOpacity={0.8}
        >

          <View style={styles.optionIcon}>
            <Ionicons
              name="book-outline"
              size={21}
              color="#E0E1DD"
            />
          </View>

          <View style={styles.optionText}>

            <Text style={styles.optionTitle}>
              Manual Ranger Raptor
            </Text>

            <Text style={styles.optionSub}>
              Especificações, pressão e fluidos
            </Text>

          </View>

          <View style={styles.arrowContainer}>

            <Ionicons
              name="chevron-forward"
              size={18}
              color="#415A77"
            />

          </View>

        </TouchableOpacity>


        {/* AGENDAMENTO */}

        <TouchableOpacity
          style={styles.optionCard}
          onPress={() =>
            handleCallSupport('Agendamento de Revisão')
          }
          activeOpacity={0.8}
        >

          <View style={styles.optionIcon}>
            <Ionicons
              name="build-outline"
              size={21}
              color="#E0E1DD"
            />
          </View>

          <View style={styles.optionText}>

            <Text style={styles.optionTitle}>
              Agendamento de Serviço
            </Text>

            <Text style={styles.optionSub}>
              Rede de concessionárias autorizadas
            </Text>

          </View>

          <View style={styles.arrowContainer}>

            <Ionicons
              name="chevron-forward"
              size={18}
              color="#415A77"
            />

          </View>

        </TouchableOpacity>


        {/* FAQ */}

        <TouchableOpacity
          style={styles.optionCard}
          onPress={() =>
            handleCallSupport('Dúvidas do Desafio FIAP')
          }
          activeOpacity={0.8}
        >

          <View style={styles.optionIcon}>
            <Ionicons
              name="chatbubbles-outline"
              size={21}
              color="#E0E1DD"
            />
          </View>

          <View style={styles.optionText}>

            <Text style={styles.optionTitle}>
              FAQ de Inteligência Competitiva
            </Text>

            <Text style={styles.optionSub}>
              Guia de uso do aplicativo para a FIAP
            </Text>

          </View>

          <View style={styles.arrowContainer}>

            <Ionicons
              name="chevron-forward"
              size={18}
              color="#415A77"
            />

          </View>

        </TouchableOpacity>





        {/* ================================================= */}
        {/* FOOTER */}
        {/* ================================================= */}

        <Text style={styles.footer}>
          FORD CONNECT+ • INTELIGÊNCIA COMPETITIVA
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({

  // ==================================================
  // BASE
  // ==================================================

  safeArea: {
    flex: 1,
    backgroundColor: '#0D1B2A',
  },

  container: {
    paddingHorizontal: 18,
    paddingTop: 20,
    paddingBottom: 35,
  },


  // ==================================================
  // HEADER
  // ==================================================

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
  },

  headerIcon: {
    width: 46,
    height: 46,
    borderRadius: 13,

    backgroundColor: '#415A77',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 11,
  },

  headerContent: {
    flex: 1,
  },

  title: {
    fontSize: 21,
    fontWeight: '900',
    color: '#E0E1DD',
  },

  subtitle: {
    fontSize: 11,
    color: '#C7BEB6',
    marginTop: 4,
    lineHeight: 16,
  },


  // ==================================================
  // ASSISTÊNCIA 24H
  // ==================================================

  emergencyCard: {
    backgroundColor: '#1B263B',

    borderRadius: 17,

    padding: 18,

    marginBottom: 24,

    borderWidth: 1,
    borderColor: '#415A77',

    elevation: 6,
  },

  emergencyTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginBottom: 15,
  },

  emergencyIcon: {
    width: 46,
    height: 46,

    borderRadius: 13,

    backgroundColor: '#415A77',

    alignItems: 'center',
    justifyContent: 'center',
  },

  availableBadge: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#0D1B2A',

    borderWidth: 1,
    borderColor: '#415A77',

    paddingHorizontal: 8,
    paddingVertical: 6,

    borderRadius: 15,
  },

  availableDot: {
    width: 7,
    height: 7,

    borderRadius: 4,

    backgroundColor: '#415A77',

    marginRight: 5,
  },

  availableText: {
    color: '#C7BEB6',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 0.5,
  },

  emergencyTitle: {
    color: '#E0E1DD',
    fontWeight: '900',
    fontSize: 18,
  },

  emergencyDesc: {
    color: '#C7BEB6',

    fontSize: 11,
    lineHeight: 17,

    marginTop: 7,
    marginBottom: 17,
  },

  emergencyBtn: {
    height: 47,

    backgroundColor: '#E0E1DD',

    borderRadius: 10,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    gap: 8,
  },

  emergencyBtnText: {
    color: '#0D1B2A',
    fontWeight: '900',
    fontSize: 12,
  },


  // ==================================================
  // SERVIÇOS
  // ==================================================

  sectionTitle: {
    fontSize: 15,
    fontWeight: '900',
    color: '#E0E1DD',

    marginBottom: 4,
  },

  sectionSubtitle: {
    color: '#C7BEB6',

    fontSize: 10,

    marginBottom: 12,
  },


  // ==================================================
  // CARDS DE OPÇÃO
  // ==================================================

  optionCard: {
    backgroundColor: '#1B263B',

    flexDirection: 'row',
    alignItems: 'center',

    padding: 14,

    borderRadius: 14,

    marginBottom: 10,

    borderWidth: 1,
    borderColor: '#2E3C52',
  },

  optionIcon: {
    width: 43,
    height: 43,

    borderRadius: 12,

    backgroundColor: '#415A77',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 12,
  },

  optionText: {
    flex: 1,
  },

  optionTitle: {
    fontSize: 13,

    fontWeight: '900',

    color: '#E0E1DD',
  },

  optionSub: {
    fontSize: 9,

    color: '#C7BEB6',

    marginTop: 3,

    lineHeight: 14,
  },

  arrowContainer: {
    width: 29,
    height: 29,

    borderRadius: 9,

    backgroundColor: '#0D1B2A',

    alignItems: 'center',
    justifyContent: 'center',
  },


  // ==================================================
  // INFORMAÇÃO
  // ==================================================

  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#1B263B',

    borderRadius: 14,

    padding: 13,

    marginTop: 8,

    borderWidth: 1,
    borderColor: '#415A77',
  },

  infoIcon: {
    width: 38,
    height: 38,

    borderRadius: 11,

    backgroundColor: '#415A77',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 10,
  },

  infoContent: {
    flex: 1,
  },

  infoTitle: {
    color: '#E0E1DD',

    fontSize: 11,

    fontWeight: '900',

    marginBottom: 3,
  },

  infoText: {
    color: '#C7BEB6',

    fontSize: 9,

    lineHeight: 13,
  },


  // ==================================================
  // FOOTER
  // ==================================================

  footer: {
    textAlign: 'center',

    color: '#687587',

    fontSize: 8,

    fontWeight: '700',

    letterSpacing: 0.6,

    marginTop: 24,
  },
});