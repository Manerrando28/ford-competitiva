import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { vehiclesDatabase } from '../data/mockData';

export const HomeScreen = ({ navigation }: any) => {
  const raptor = vehiclesDatabase[0];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >

        {/* ================= HEADER ================= */}

        <View style={styles.brandHeader}>

          <View>
            <Text style={styles.fordTitle}>
              FORD CONNECT+
            </Text>

            <Text style={styles.subtitle}>
              Inteligência Competitiva Automotiva
            </Text>
          </View>

          <View style={styles.statusBadge}>
            <View style={styles.statusDot} />

            <Text style={styles.statusText}>
              SYNC® 4 Connected
            </Text>
          </View>

        </View>


        {/* ================= HERO ================= */}

        <View style={styles.heroCard}>

          <Image
            source={{ uri: raptor.imageUrl }}
            style={styles.heroImage}
          />

          <View style={styles.heroContent}>

            <Text style={styles.raptorBadge}>
              PERFORMANCE RALLY
            </Text>

            <Text style={styles.heroTitle}>
              {raptor.brand} {raptor.model}
            </Text>

            <Text style={styles.heroVersion}>
              {raptor.version}
            </Text>

            <Text style={styles.heroPrice}>
              {raptor.priceEstimate}
            </Text>


            {/* ================= TELEMETRIA ================= */}

            {raptor.telemetry && (
              <View style={styles.telemetryGrid}>

                <View style={styles.telemetryItem}>
                  <Ionicons
                    name="speedometer-outline"
                    size={18}
                    color="#415A77"
                  />

                  <Text style={styles.telemetryLabel}>
                    Autonomia
                  </Text>

                  <Text style={styles.telemetryValue}>
                    {raptor.telemetry.range}
                  </Text>
                </View>


                <View style={styles.telemetryDivider} />


                <View style={styles.telemetryItem}>
                  <Ionicons
                    name="water-outline"
                    size={18}
                    color="#415A77"
                  />

                  <Text style={styles.telemetryLabel}>
                    Combustível
                  </Text>

                  <Text style={styles.telemetryValue}>
                    {raptor.telemetry.fuelLevel}
                  </Text>
                </View>


                <View style={styles.telemetryDivider} />


                <View style={styles.telemetryItem}>
                  <Ionicons
                    name="disc-outline"
                    size={18}
                    color="#415A77"
                  />

                  <Text style={styles.telemetryLabel}>
                    Pressão
                  </Text>

                  <Text style={styles.telemetryValue}>
                    {raptor.telemetry.tirePressure}
                  </Text>
                </View>

              </View>
            )}


            {/* ================= BOTÃO ================= */}

            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => navigation.navigate('Comparador')}
              activeOpacity={0.8}
            >

              <Ionicons
                name="search-outline"
                size={18}
                color="#0D1B2A"
              />

              <Text style={styles.primaryButtonText}>
                Iniciar Inteligência Competitiva
              </Text>

              <Ionicons
                name="arrow-forward"
                size={17}
                color="#0D1B2A"
              />

            </TouchableOpacity>

          </View>
        </View>


        {/* ================= MODOS G.O.A.T. ================= */}

        <Text style={styles.sectionHeader}>
          Modos de Terreno G.O.A.T.
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.goatScroll}
        >

          {[
            { name: 'Normal', icon: 'car-outline' },
            { name: 'Sport', icon: 'flash-outline' },
            { name: 'Escorregadio', icon: 'water-outline' },
            { name: 'Lama/Trilhos', icon: 'leaf-outline' },
            { name: 'Areia', icon: 'sunny-outline' },
            { name: 'Baja', icon: 'trophy-outline' },
            { name: 'Rochas', icon: 'compass-outline' },
          ].map((mode, index) => (

            <View
              key={index}
              style={styles.goatCardModern}
            >

              <View style={styles.goatIcon}>
                <Ionicons
                  name={mode.icon as any}
                  size={21}
                  color="#E0E1DD"
                />
              </View>

              <Text style={styles.goatNameModern}>
                {mode.name}
              </Text>

            </View>

          ))}

        </ScrollView>


        {/* ================= AÇÕES RÁPIDAS ================= */}

        <Text style={styles.sectionHeader}>
          Ações rápidas
        </Text>

        <View style={styles.actionGrid}>

          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => navigation.navigate('Comparador')}
            activeOpacity={0.8}
          >

            <View style={styles.actionIcon}>
              <Ionicons
                name="search-outline"
                size={23}
                color="#E0E1DD"
              />
            </View>

            <Text style={styles.actionTitle}>
              Comparar ficha
            </Text>

            <Text style={styles.actionDesc}>
              Busca rápida por atributos
            </Text>

          </TouchableOpacity>


          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => navigation.navigate('Catálogo')}
            activeOpacity={0.8}
          >

            <View style={styles.actionIcon}>
              <Ionicons
                name="car-sport-outline"
                size={23}
                color="#E0E1DD"
              />
            </View>

            <Text style={styles.actionTitle}>
              Ver modelos
            </Text>

            <Text style={styles.actionDesc}>
              Base de concorrentes
            </Text>

          </TouchableOpacity>

        </View>


        {/* ================= FOOTER ================= */}

        <Text style={styles.footer}>
          FORD CONNECT+ • FIAP CHALLENGE
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

  brandHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
  },

  fordTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#E0E1DD',
    letterSpacing: 1.3,
  },

  subtitle: {
    fontSize: 10,
    color: '#C7BEB6',
    marginTop: 4,
  },

  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#1B263B',

    paddingHorizontal: 10,
    paddingVertical: 7,

    borderRadius: 9,

    borderWidth: 1,
    borderColor: '#2E3C52',
  },

  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 4,

    backgroundColor: '#415A77',

    marginRight: 6,
  },

  statusText: {
    color: '#C7BEB6',
    fontSize: 9,
    fontWeight: '700',
  },


  // ==================================================
  // HERO
  // ==================================================

  heroCard: {
    backgroundColor: '#1B263B',

    borderRadius: 18,

    overflow: 'hidden',

    marginBottom: 24,

    borderWidth: 1,
    borderColor: '#415A77',

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 8,
    },

    shadowOpacity: 0.25,
    shadowRadius: 12,

    elevation: 7,
  },

  heroImage: {
    width: '100%',
    height: 205,

    resizeMode: 'cover',
  },

  heroContent: {
    padding: 17,
  },

  raptorBadge: {
    backgroundColor: '#415A77',

    color: '#E0E1DD',

    fontSize: 8,

    fontWeight: '900',

    paddingHorizontal: 9,
    paddingVertical: 6,

    borderRadius: 7,

    alignSelf: 'flex-start',

    marginBottom: 8,

    letterSpacing: 0.6,
  },

  heroTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#E0E1DD',
  },

  heroVersion: {
    fontSize: 11,
    color: '#C7BEB6',

    marginTop: 3,
  },

  heroPrice: {
    fontSize: 16,
    fontWeight: '900',

    color: '#E0E1DD',

    marginTop: 7,
    marginBottom: 14,
  },


  // ==================================================
  // TELEMETRIA
  // ==================================================

  telemetryGrid: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#0D1B2A',

    paddingVertical: 13,
    paddingHorizontal: 8,

    borderRadius: 12,

    marginBottom: 16,

    borderWidth: 1,
    borderColor: '#2E3C52',
  },

  telemetryItem: {
    flex: 1,
    alignItems: 'center',
  },

  telemetryDivider: {
    width: 1,
    height: 35,

    backgroundColor: '#2E3C52',
  },

  telemetryLabel: {
    fontSize: 8,

    color: '#9BA5B1',

    fontWeight: '700',

    marginTop: 4,
  },

  telemetryValue: {
    fontSize: 11,

    fontWeight: '900',

    color: '#E0E1DD',

    marginTop: 2,

    textAlign: 'center',
  },


  // ==================================================
  // BOTÃO PRINCIPAL
  // ==================================================

  primaryButton: {
    height: 48,

    backgroundColor: '#E0E1DD',

    borderRadius: 10,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',

    gap: 8,
  },

  primaryButtonText: {
    color: '#0D1B2A',

    fontWeight: '900',

    fontSize: 12,
  },


  // ==================================================
  // SEÇÕES
  // ==================================================

  sectionHeader: {
    fontSize: 15,

    fontWeight: '900',

    color: '#E0E1DD',

    marginBottom: 11,
  },


  // ==================================================
  // G.O.A.T.
  // ==================================================

  goatScroll: {
    marginBottom: 23,
  },

  goatCardModern: {
    backgroundColor: '#1B263B',

    paddingHorizontal: 15,
    paddingVertical: 13,

    borderRadius: 12,

    marginRight: 10,

    alignItems: 'center',

    minWidth: 92,

    borderWidth: 1,
    borderColor: '#2E3C52',
  },

  goatIcon: {
    width: 38,
    height: 38,

    borderRadius: 11,

    backgroundColor: '#415A77',

    alignItems: 'center',
    justifyContent: 'center',
  },

  goatNameModern: {
    color: '#E0E1DD',

    fontSize: 10,

    fontWeight: '800',

    marginTop: 7,

    textAlign: 'center',
  },


  // ==================================================
  // AÇÕES
  // ==================================================

  actionGrid: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 20,
  },

  actionCard: {
    backgroundColor: '#1B263B',

    width: '48%',

    padding: 15,

    borderRadius: 14,

    borderWidth: 1,
    borderColor: '#2E3C52',
  },

  actionIcon: {
    width: 42,
    height: 42,

    borderRadius: 12,

    backgroundColor: '#415A77',

    alignItems: 'center',
    justifyContent: 'center',
  },

  actionTitle: {
    fontWeight: '900',

    fontSize: 13,

    color: '#E0E1DD',

    marginTop: 9,
  },

  actionDesc: {
    fontSize: 9,

    color: '#9BA5B1',

    marginTop: 3,

    lineHeight: 13,
  },


  // ==================================================
  // FOOTER
  // ==================================================

  footer: {
    textAlign: 'center',

    color: '#687587',

    fontSize: 9,

    fontWeight: '700',

    letterSpacing: 0.6,

    marginTop: 4,
  },

});


