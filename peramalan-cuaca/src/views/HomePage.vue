<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-title>Cuaca Jakarta (Open-Meteo)</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div v-if="loading" class="loading-container">
        <ion-spinner name="crescent"></ion-spinner>
        <p>Mengambil data cuaca...</p>
      </div>

      <div v-else-if="error" class="error-container">
        <p>Gagal memuat data. Silakan coba lagi.</p>
        <ion-button color="danger" @click="fetchWeatherData">Coba Lagi</ion-button>
      </div>

      <div v-else>
        <ion-card class="location-card">
          <ion-card-header>
            <ion-card-title>Jakarta, Indonesia</ion-card-title>
            <ion-card-subtitle>Latitude: -6.2 | Longitude: 106.8</ion-card-subtitle>
          </ion-card-header>
        </ion-card>

        <h3 class="section-title">Prakiraan Suhu Per Jam</h3>
        
        <div class="table-responsive">
          <table class="weather-table">
            <thead>
              <tr>
                <th>Waktu Pengukuran</th>
                <th>Suhu (°C)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in weatherData" :key="index">
                <td>{{ formatDateTime(item.time) }}</td>
                <td class="temp-cell"><strong>{{ item.temperature }}°C</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonSpinner, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardSubtitle,
  IonButton
} from '@ionic/vue';
import axios from 'axios';

// State Management
const weatherData = ref([]);
const loading = ref(true);
const error = ref(false);

// Fungsi Ambil Data dari API
const fetchWeatherData = async () => {
  loading.value = true;
  error.value = false;
  try {
    const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&hourly=temperature_2m';
    const response = await axios.get(apiUrl);
    
    // Memisahkan array 'time' dan 'temperature_2m' dari API
    const times = response.data.hourly.time;
    const temperatures = response.data.hourly.temperature_2m;
    
    // Gabungkan menjadi array of objects agar mudah di-looping
    weatherData.value = times.map((time, index) => ({
      time: time,
      temperature: temperatures[index]
    }));
  } catch (err) {
    console.error("Error fetching data:", err);
    error.value = true;
  } finally {
    loading.value = false;
  }
};

// Fungsi Format Waktu ke Gaya Indonesia (Contoh: 24 Mei 2026, 00:00)
const formatDateTime = (dateTimeStr) => {
  const date = new Date(dateTimeStr);
  return date.toLocaleString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

// Jalankan fungsi saat komponen dimuat
onMounted(() => {
  fetchWeatherData();
});
</script>

<style scoped>
.loading-container, .error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  margin-top: 50px;
}

.location-card {
  margin: 0 0 20px 0;
  background: linear-gradient(135deg, #3880ff, #529bff);
  color: white;
}

.location-card ion-card-title, .location-card ion-card-subtitle {
  color: white;
}

.section-title {
  margin-left: 5px;
  font-weight: 600;
  color: #333;
}

/* Styling Tabel */
.table-responsive {
  width: 100%;
  overflow-x: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.weather-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  text-align: left;
}

.weather-table th {
  background-color: #f4f5f8;
  color: #222428;
  font-weight: bold;
  padding: 12px;
  border-bottom: 2px solid #ddd;
}

.weather-table td {
  padding: 12px;
  border-bottom: 1px solid #eeeeee;
  color: #444;
  font-size: 0.95rem;
}

.weather-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.temp-cell {
  color: #3880ff;
}
</style>