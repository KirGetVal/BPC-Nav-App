# BPC Campus Navigator

**Bulacan Polytechnic College — Main Campus (Malolos, Bulacan)**

A modern native Android navigation and campus directory application designed for students, faculty, visitors, and enrollees of Bulacan Polytechnic College (BPC) Main Campus.

---

## 📌 Overview

**BPC Campus Navigator** is a campus directory, interactive map renderer, and walking route planner built with Kotlin and Jetpack Compose. The application enables users to locate academic offices, laboratories, restrooms (comfort rooms), canteens, food stalls, printing services, and campus landmarks for Bulacan Polytechnic College Main Campus in Malolos.

---

## 🎯 Problem Statement & Objectives

Navigating a college campus can be challenging for new enrollees, guest visitors, and fresh students. Traditional mapping services often lack detailed indoor/outdoor facility mapping for local academic institutions.

### Objectives:
1. Provide an intuitive campus map and location directory.
2. Render geographic locations accurately based on official campus GPS coordinates.
3. Offer smart, case-insensitive search and category filtering (including floor-based queries and local abbreviations like "CR" and "ComLab").
4. Provide walking route planning with clear distinctions between verified campus pathways and direct straight-line distance estimates.
5. Store user preferences (favorites, search history, room reservations, theme settings) locally on device.

---

## 👤 Target Users

- **Students & Enrollees**: Locate lecture rooms, computer laboratories (ComLab 1), science labs, NTT lab, printing services, and comfort rooms.
- **Faculty & Staff**: Find academic offices, clinic, and college facilities quickly.
- **Visitors & Guests**: Find the main campus arch gate, canteen, activity center, stage, and food carts.

---

## ✨ Key Features

- **Interactive Campus Map**:
  - Canvas-based map engine with Equirectangular local projection.
  - Custom pin markers with category color coding and pulse selection highlight.
  - Interactive approximate building footprints for Activity Center and Building B.
  - Layer toggle controls: Local aerial satellite view layer vs. vector canvas map.
  - Interactive gesture controls: Pinch-to-zoom, pan, double-tap zoom, reset view.

- **Smart Search Engine**:
  - Multi-attribute search matching facility names, categories, floor levels, descriptions, and keywords.
  - Category filter chips: Academic Buildings, Offices, Labs, Canteen/Food, Restrooms, Printing, Amenities.
  - Recent search history chips stored locally.

- **Campus Walking Route Planner**:
  - Pedestrian pathway graph over campus walking paths using Dijkstra's shortest path algorithm.
  - Fallback straight-line distance calculation when origin or destination falls outside verified pathways.
  - Step-by-step turn-by-turn waypoint guidance.
  - Out-of-bounds GPS handling with auto-fallback to BPC Main Entrance Arch Gate when > 2 km outside campus.

- **Role-Based Sign In & Admin Approval Dashboard**:
  - Local account registration and sign-in for Students, Teachers, and Campus Administrator.
  - Student / Teacher room reservation submission requiring Admin approval.
  - Professional Admin Dashboard for reviewing, approving, and rejecting room requests.
  - Real-time time conflict validation engine blocking room double-booking.

- **Personalization & Local Storage**:
  - Saved Favorites manager.
  - Circular Profile Avatar with user initials and profile editing modal.
  - Material 3 BPC Forest Green & Gold brand theme palette with Light/Dark mode support.
