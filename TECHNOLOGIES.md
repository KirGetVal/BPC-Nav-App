[← Back to README](../README.md)

# 🛠️ Technologies Used

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Language | **Kotlin 2.0.21** | Type-safe native Android development |
| UI toolkit | **Jetpack Compose (Material 3)** | Declarative UI following Material Design 3 |
| Architecture | **Single Activity + Navigation Compose 2.8.8** | Navigation with a bottom navigation bar; StateFlow for reactive state |
| Map SDK | **OSMDroid 6.1.18** (`org.osmdroid:osmdroid-android`) | Free, open-source OpenStreetMap tile rendering |
| Satellite imagery | **ESRI World Imagery** | Free aerial satellite tiles |
| Location | **Android `LocationManager`** | GPS and network location listener |
| Persistence | **Android `SharedPreferences`** | Local JSON storage for accounts, reservations, favorites, and history |
| Algorithms | **Dijkstra's Shortest Path** | Route calculation over pedestrian path nodes |
| Distance | **Haversine formula** | Distances between coordinates in meters |
| Build | **Gradle 8.13 / Android Gradle Plugin 9.4.1** | Build automation and dependency management |
| IDE | **Android Studio Ladybug (2024.2.1)** | Development environment |
| Version control | **Git and GitHub** | Source management |

## Architecture

```
Presentation   CampusMapScreen · ExploreScreen · DirectionsScreen · Schedules · OsmMapView · DetailSheet · BookRoomDialog
     │  StateFlow and callbacks
Business logic AuthManager · ReservationManager · RouteGraph (Dijkstra) · CampusSearch · DistanceCalculator · AppLocationManager
     │  JSON serialization
Data           SharedPreferences (users, reservations, favorites, history) · OSMDroid tile cache
```
