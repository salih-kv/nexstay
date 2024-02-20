import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { PrivateRoute } from "@/components/PrivateRoute";

const Layout = lazy(() => import("@/layouts/Layout"));
const DashBoardLayout = lazy(() => import("@/layouts/DashBoardLayout"));
const Register = lazy(() => import("@/app/register"));
const Login = lazy(() => import("@/app/login"));
const Home = lazy(() => import("@/app/home"));
const Search = lazy(() => import("@/app/search"));
const Booking = lazy(() => import("@/app/booking"));
const HotelDetailsPage = lazy(() => import("@/app/hotel-details"));
const MyBookings = lazy(() => import("@/app/my-bookings"));

const Dashboard = lazy(() => import("@/app/dashboard"));
const MyHotels = lazy(() => import("@/app/dashboard/MyHotels"));
const Bookings = lazy(() => import("@/app/dashboard/Bookings"));
const AddHotel = lazy(() => import("@/app/add-hotel"));
const EditHotel = lazy(() => import("@/app/edit-hotel"));

const Admin = lazy(() => import("@/app/admin"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />

          {/* LAYOUT START */}
          <Route element={<Layout />}>
            <Route path="/hotel/:hotelId" element={<HotelDetailsPage />} />
            {/* Admin 🔒 */}
            <Route element={<PrivateRoute roles={["Admin"]} />}>
              <Route path="/admin" element={<Admin />} />
            </Route>

            {/* HOST 🔒 */}
            <Route element={<PrivateRoute roles={["Host"]} />}>
              <Route path="/dashboard" element={<DashBoardLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="my-hotels" element={<MyHotels />} />
                <Route path="bookings" element={<Bookings />} />
              </Route>
              <Route path="add-hotel" element={<AddHotel />} />
              <Route path="hotel/:hotelId/edit" element={<EditHotel />} />
            </Route>
            {/* USER | HOST 🔒 */}
            <Route element={<PrivateRoute roles={["User", "Host"]} />}>
              <Route path="/my-bookings" element={<MyBookings />} />
              <Route path="/hotel/:hotelId/booking" element={<Booking />} />
            </Route>
          </Route>
          {/* LAYOUT END */}
        </Routes>
      </Suspense>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
