[← Back to README](../README.md)

# ⚡ Installation and Setup Guide

## Option A: Install the APK (quickest)

1. Download `BPCCampusNav.apk` from the project website or the repository's **Releases** page.
2. On your Android phone, open the downloaded file.
3. If Android blocks the install, allow installs from your browser or file manager when prompted, then tap **Install**.
4. Open the app and allow **location access** so the map can center on you and plan routes from your position.

> Requires Android 7.0 (API 24) or higher. Only install APKs from sources you trust.

## Option B: Build from source

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

## 🔐 Demo Accounts

The sign-in screen has quick-login buttons. You can also type these credentials manually:

| Role | Email | Password |
|------|-------|----------|
| 👑 Admin | `admin@bpc.edu.ph` | `admin123` |
| 👨‍🏫 Teacher | `teacher@bpc.edu.ph` | `teacher123` |
| 🎓 Student | `student@bpc.edu.ph` | `student123` |

> These accounts are for testing and demonstration only.
