import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';

// Array data dummy untuk layanan tanpa ikon
const services = [
  { name: 'GoRide', emoji: '🏍️' },
  { name: 'GoCar', emoji: '🚗' },
  { name: 'GoFood', emoji: '🍔' },
  { name: 'GoSend', emoji: '📦' },
  { name: 'GoMart', emoji: '🛒' },
  { name: 'GoPulsa', emoji: '📱' },
  { name: 'GoBills', emoji: '🧾' },
  { name: 'GoBox', emoji: '🚚' },
];

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#00aa13" />
      
      <ScrollView>
        {/* Header dengan GoPay Balance dan Promo */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={styles.goPayBalance}>
              <Text style={styles.goPayLabel}>GoPay</Text>
              <Text style={styles.goPayAmount}>Rp 150.000.000</Text>
              <Text style={styles.goPayPromo}>Klik & cek promo di sini!</Text>
            </View>
            <View style={styles.goPayActions}>
              <TouchableOpacity style={styles.goPayButton}>
                <Text style={styles.goPayButtonText}>Bayar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.goPayButton}>
                <Text style={styles.goPayButtonText}>Isi Saldo</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Kotak Pencarian */}
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBarInput}
            placeholder="Cari layanan, makanan, & tujuan"
            placeholderTextColor="#888"
          />
        </View>
        
        {/* Bagian Ikon Layanan (sekarang menggunakan Emoji) */}
        <View style={styles.servicesContainer}>
          {services.map((service, index) => (
            <TouchableOpacity key={index} style={styles.serviceItem}>
              <View style={styles.iconBackground}>
                {/* Menggunakan emoji sebagai ganti ikon */}
                <Text style={styles.emojiText}>{service.emoji}</Text>
              </View>
              <Text style={styles.serviceText}>{service.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Placeholder untuk promo lainnya */}
        <View style={styles.promoSection}>
          <Text style={styles.promoTitle}>Ada yang baru nih! 🚀</Text>
          <Text style={styles.promoText}>Cek promo menarik buat kamu.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#00aa13', // Warna hijau Gojek
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: 20,
    paddingBottom: 60,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#008e0f',
    padding: 15,
    borderRadius: 15,
  },
  goPayBalance: {
    flex: 1,
  },
  goPayLabel: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  goPayAmount: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  goPayPromo: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.8,
    marginTop: 5,
  },
  goPayActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goPayButton: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginLeft: 10,
  },
  goPayButtonText: {
    color: '#008e0f',
    fontWeight: 'bold',
  },
  searchBarContainer: {
    marginTop: -45, // Menggeser ke atas agar tumpang tindih dengan header
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 8,
    paddingHorizontal: 20,
  },
  searchBarInput: {
    height: 50,
    fontSize: 16,
    color: '#333',
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 20,
  },
  serviceItem: {
    width: '23%', // Mengatur agar 4 item per baris
    alignItems: 'center',
    marginBottom: 20,
  },
  iconBackground: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#e6f7e9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emojiText: {
    fontSize: 28, // Ukuran emoji yang sesuai
  },
  serviceText: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  promoSection: {
    backgroundColor: '#f0f4f7',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 20,
  },
  promoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  promoText: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
});

export default App;
