[← Back to README](../README.md)

# 🧪 Testing

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
