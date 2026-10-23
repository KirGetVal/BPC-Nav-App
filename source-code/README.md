# 📍 BPC Campus Navigator

**An interactive campus map, walking route planner, and room reservation system for Bulacan Polytechnic College, Main Campus (Malolos, Bulacan).**

![My Website](https://bpcnav.vercel.app/)
![Platform](https://img.shields.io/badge/platform-Android%207.0%2B-15803D)
![Kotlin](https://img.shields.io/badge/Kotlin-2.0.21-7F52FF)
![Jetpack Compose](https://img.shields.io/badge/Jetpack%20Compose-Material%203-4285F4)
![Version](https://img.shields.io/badge/version-1.0.0-D9AE45)

> **CT-MAD-213: Mobile Application Development, Final Project**
> Category 5: Maps and Geolocation Applications (Advanced complexity)

---

## 📖 Table of Contents

1. [Project Description](#-project-description)
2. [Features](#-features)
3. [Screenshots](#-screenshots)
4. [Technologies Used](#-technologies-used)
5. [Installation and Setup Guide](#-installation-and-setup-guide)
6. [Demo Accounts](#-demo-accounts)
7. [Project Structure](#-project-structure)
8. [Testing](#-testing)
9. [Limitations](#-limitations)
10. [Developer](#-developer)
11. [Version Information](#-version-information)

---

## 📝 Project Description

BPC Campus Navigator is a native Android app built for Bulacan Polytechnic College (BPC) Main Campus in Malolos. It works as a campus directory, a walking route planner, and a room schedule manager. Students, faculty, new enrollees, and visitors can explore campus facilities, plan routes, check room schedules, and request room reservations. Accounts, favorites, search history, and reservations are stored on the device, and the map uses free OpenStreetMap tiles.

### Problem Statement

Finding your way around a campus is hard for new enrollees, fresh students, and guests. Commercial map services such as Google Maps or Mapbox often lack detailed facility mapping for local schools, and they may need paid API keys and a constant internet connection. Room scheduling adds a second problem: with no central approval workflow, teachers and students run into schedule conflicts and double-bookings.

### Proposed Solution

BPC Campus Navigator addresses both problems in one app:

1. **Interactive OpenStreetMap map (OSMDroid):** zoom and pan tiles, an ESRI satellite toggle, and custom colored pins for 20 campus facilities.
2. **Dijkstra walking routes:** shortest paths along pedestrian pathways, with step-by-step waypoints.
3. **Role-based sign-in and admin approval:** Student, Teacher, and Admin accounts, with a central queue for approving or rejecting room requests.
4. **Schedule conflict prevention:** automatic time-overlap checks that block double-booking.
5. **On-device storage:** profiles, history, favorites, and reservations stay in Android `SharedPreferences`.

### Target Users

| User | What they do with the app |
|------|---------------------------|
| **Students and enrollees** | Find lecture rooms, ComLab 1, science labs, the NTT lab, printing services, and restrooms. Request rooms for study groups or events. |
| **Faculty and teachers** | Find academic offices and the medical clinic. Request rooms for makeup classes or department meetings. |
| **Campus administrators** | Review pending reservations (Approve ✓ / Reject ✗), view the user directory, and monitor room utilization. |
| **Visitors and guests** | Find the main arch gate, canteen, activity center, stage, and food stalls. |

---

## ✨ Features

### 🗺️ Interactive Campus Map
- OpenStreetMap tiles via OSMDroid with pinch-to-zoom, pan, and double-tap, centered on BPC Main Campus (14.8665° N, 120.8068° E)
- One-tap satellite layer using ESRI World Imagery
- 20 color-coded facility markers with a live 🔴 **BUSY** badge for rooms in a meeting
- Location detail sheet with floor, coordinates, description, notes, and your distance, plus copy coordinates, share location, and request reservation
- **Center BPC Campus** and **Pinpoint My Location** quick actions

### 🔍 Smart Search and Category Filters
- Case-insensitive search across names, categories, floors, descriptions, and keywords such as "CR", "ComLab", "canteen", and "printing"
- Floating search pill with an elevated dropdown of results
- Filter chips for Academic Buildings, Offices, Laboratories, Restrooms, Food and Dining, Stores, Health, and Amenities

### 🧭 Campus Route Planner
- Dijkstra shortest-path routing along verified pedestrian pathways
- Start from your GPS position or from any campus room
- If your GPS is more than 2 km from campus, the route starts at the BPC Main Entrance Arch Gate
- Turn-by-turn waypoint cards in a single continuous scroll

### 🔑 Role-Based Sign-In and Admin Dashboard
- Three roles: Student / Enrollee, Faculty / Teacher, and Campus Administrator
- Quick demo sign-in buttons for testing and demonstrations
- Admin dashboard stat cards: pending requests, active meetings, and registered users
- Approve ✓ / Reject ✗ controls directly on pending request cards
- System user directory with student and employee ID numbers

### 🛡️ Schedule Conflict Prevention
- Overlap validation: `start₁ < end₂ ∧ end₁ > start₂`
- A red conflict banner in the reservation dialog when a room is already booked
- Duplicate pending requests for the same room and time are blocked, and the submit button is disabled after one tap
- Users can only cancel their own pending requests

### 👤 Profile and Theme
- Circular avatar with user initials and a role color
- Edit profile: full name, student/employee ID, email, and password
- Material 3 theme in BPC forest green (`#15803D`) with light and dark modes

---

## 📸 Screenshots

> Add your final screenshots to the `screenshots/` folder using the filenames below.

| Map | Search and Filters | Location Details |
|:---:|:---:|:---:|
| ![Map](screenshots/map.png) | ![Search](screenshots/search.png) | ![Details](screenshots/location-details.png) |

| Route Planner | Reserve a Room | Admin Dashboard |
|:---:|:---:|:---:|
| ![Route](screenshots/route-planner.png) | ![Reserve](screenshots/reserve-room.png) | ![Admin](screenshots/admin-dashboard.png) |

| Profile | Dark Mode |
|:---:|:---:|
| ![Profile](screenshots/profile.png) | ![Dark](screenshots/dark-mode.png) |

---

## 🛠️ Technologies Used

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

---

## ⚡ Installation and Setup Guide

### Option A: Install the APK (quickest)

1. Download `BPCCampusNav.apk` from the project website or the repository's **Releases** page.
2. On your Android phone, open the downloaded file.
3. If Android blocks the install, allow installs from your browser or file manager when prompted, then tap **Install**.
4. Open the app and allow **location access** so the map can center on you and plan routes from your position.

> Requires Android 7.0 (API 24) or higher. Only install APKs from sources you trust.

### Option B: Build from source

**Requirements**

| Tool | Version |
|------|---------|
| Android Studio | Ladybug (2024.2.1) or newer |
| JDK | 17 |
| Gradle | 8.13+ (the included wrapper handles this) |
| Device / emulator | Android 7.0 (API 24) or higher |

**Steps**

1. **Clone the repository**
   ```bash
   git clone https://github.com/KirGetVal/BPCCampusNav2.git
   cd BPCCampusNav2
   ```

2. **Open in Android Studio**
   - Choose **File > Open** and select the `BPCCampusNav2` root folder.
   - Let Gradle sync dependencies.

3. **Verify the build**
   ```bash
   # Run unit tests
   ./gradlew app:testDebugUnitTest

   # Build a debug APK
   ./gradlew app:assembleDebug
   ```
   On Windows, use `gradlew.bat` instead of `./gradlew`. The debug APK is created at `app/build/outputs/apk/debug/`.

4. **Run on a device or emulator**
   - **Physical device:** enable USB debugging, connect it, and select it in Android Studio.
   - **Emulator:** create an Android Virtual Device (API 24 or higher) in Device Manager.
   - Click **Run 'app'** (`Shift + F10`).

---

## 🔐 Demo Accounts

The sign-in screen has quick-login buttons. You can also type these credentials manually:

| Role | Email | Password |
|------|-------|----------|
| 👑 Admin | `admin@bpc.edu.ph` | `admin123` |
| 👨‍🏫 Teacher | `teacher@bpc.edu.ph` | `teacher123` |
| 🎓 Student | `student@bpc.edu.ph` | `student123` |

> These accounts are for testing and demonstration only.

---

## 📂 Project Structure

```
BPCCampusNav2/
├── app/
│   ├── build.gradle.kts
│   └── src/
│       ├── main/
│       │   ├── AndroidManifest.xml
│       │   ├── java/com/kgvtech/bpccampusnav2/
│       │   │   ├── MainActivity.kt        # Single activity entry point
│       │   │   ├── data/                  # Location, Reservation, User, Preferences models
│       │   │   ├── location/              # GPS LocationManager wrapper
│       │   │   ├── map/                   # OsmMapView tile engine
│       │   │   ├── navigation/            # AppNavigation and screen routes
│       │   │   ├── routing/               # RouteGraph and DistanceCalculator
│       │   │   ├── search/                # CampusSearch engine
│       │   │   ├── ui/
│       │   │   │   ├── components/        # DetailSheet, BookRoomDialog, ProfileHeader, ...
│       │   │   │   ├── screens/           # Map, Explore, Directions, Schedules, Settings, Onboarding
│       │   │   │   └── theme/             # BPC green palette, colors, typography
│       │   │   └── utils/                 # Share and clipboard helpers
│       │   └── res/                       # Drawables, launcher icons, strings, colors, themes
│       └── test/                          # CampusDataAndRoutingTest.kt
├── gradle/                                # Wrapper and libs.versions.toml
├── build.gradle.kts
├── documentation/                         # Project documentation report
├── screenshots/                           # README screenshots
└── README.md
```

### Architecture

```
Presentation   CampusMapScreen · ExploreScreen · DirectionsScreen · Schedules · OsmMapView · DetailSheet · BookRoomDialog
     │  StateFlow and callbacks
Business logic AuthManager · ReservationManager · RouteGraph (Dijkstra) · CampusSearch · DistanceCalculator · AppLocationManager
     │  JSON serialization
Data           SharedPreferences (users, reservations, favorites, history) · OSMDroid tile cache
```

---

## 🧪 Testing

Run the suite with `./gradlew app:testDebugUnitTest`. All 8 tests pass.

| ID | Category | Target | Expected result | Status |
|----|----------|--------|-----------------|:------:|
| TC-01 | Dataset integrity | `CampusLocations.allLocations` | Exactly 20 locations (A–T) with unique IDs and valid GPS | ✅ |
| TC-02 | Restroom records | `LocationCategory.RESTROOM` | Exactly 4 restrooms (2 Boys CR, 2 Girls CR) | ✅ |
| TC-03 | Footprint geometry | `GeometryType.APPROXIMATE_FOOTPRINT` | Activity Center and Building B use opposite corner coordinates | ✅ |
| TC-04 | Search engine | `CampusSearch.search()` | Case-insensitive matches for "science", "comlab", "CR", "2nd floor" | ✅ |
| TC-05 | Distance | `DistanceCalculator` | Accurate Haversine distance between entrance and main building | ✅ |
| TC-06 | Dijkstra routing | `RouteGraph.findRoute()` | Walking path with step waypoints | ✅ |
| TC-07 | Ongoing meetings | `RoomReservation.isOngoing()` | True for active approved reservations | ✅ |
| TC-08 | Schedule conflict | `ReservationManager.hasTimeConflict` | Rejects overlapping bookings for the same room and time | ✅ |

---

## ⚠️ Limitations

- Map tiles (OpenStreetMap and ESRI satellite) need an internet connection the first time an area is displayed.
- GPS centering and routing from your position need location permission.
- The operating hours banner follows the general Asia/Manila campus schedule (7:00 AM to 9:00 PM).
- Data is stored locally, so accounts and reservations are not shared between devices.

## 🚀 Future Enhancements

- **Push notifications:** local alerts 15 minutes before a reserved meeting.
- **Indoor floor plans:** multi-floor overlays for buildings such as Building B and ComLab 1.
- **QR check-in:** scan a code at the room entrance to check in for a reserved slot.

---

## 👤 Developer

| Name | Role | GitHub |
|------|------|--------|
| **Kirby Vallinas** (KGV Tech) | Developer | [@KirGetVal](https://github.com/KirGetVal) |

**Course:** CT-MAD-213, Mobile Application Development
**Institution:** Bulacan Polytechnic College, Main Campus (Malolos, Bulacan)

## 🏷️ Version Information

| | |
|---|---|
| **Version** | 2.1.0 |
| **Branch** | `main` |
| **Min Android** | 7.0 (API 24) |
| **Package** | `com.kgvtech.bpccampusnav2` |

---

<p align="center">Made for the students of Bulacan Polytechnic College 💚</p>
