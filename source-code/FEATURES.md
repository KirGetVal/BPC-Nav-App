[← Back to README](../README.md)

# ✨ Features

## 🗺️ Interactive Campus Map
- OpenStreetMap tiles via OSMDroid with pinch-to-zoom, pan, and double-tap, centered on BPC Main Campus (14.8665° N, 120.8068° E)
- One-tap satellite layer using ESRI World Imagery
- 20 color-coded facility markers with a live 🔴 **BUSY** badge for rooms in a meeting
- Location detail sheet with floor, coordinates, description, notes, and your distance, plus copy coordinates, share location, and request reservation
- **Center BPC Campus** and **Pinpoint My Location** quick actions

## 🔍 Smart Search and Category Filters
- Case-insensitive search across names, categories, floors, descriptions, and keywords such as "CR", "ComLab", "canteen", and "printing"
- Floating search pill with an elevated dropdown of results
- Filter chips for Academic Buildings, Offices, Laboratories, Restrooms, Food and Dining, Stores, Health, and Amenities

## 🧭 Campus Route Planner
- Dijkstra shortest-path routing along verified pedestrian pathways
- Start from your GPS position or from any campus room
- If your GPS is more than 2 km from campus, the route starts at the BPC Main Entrance Arch Gate
- Turn-by-turn waypoint cards in a single continuous scroll

## 🔑 Role-Based Sign-In and Admin Dashboard
- Three roles: Student / Enrollee, Faculty / Teacher, and Campus Administrator
- Quick demo sign-in buttons for testing and demonstrations
- Admin dashboard stat cards: pending requests, active meetings, and registered users
- Approve ✓ / Reject ✗ controls directly on pending request cards
- System user directory with student and employee ID numbers

## 🛡️ Schedule Conflict Prevention
- Overlap validation: `start₁ < end₂ ∧ end₁ > start₂`
- A red conflict banner in the reservation dialog when a room is already booked
- Duplicate pending requests for the same room and time are blocked, and the submit button is disabled after one tap
- Users can only cancel their own pending requests

## 👤 Profile and Theme
- Circular avatar with user initials and a role color
- Edit profile: full name, student/employee ID, email, and password
- Material 3 theme in BPC forest green (`#15803D`) with light and dark modes
