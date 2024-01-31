import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const Layout = lazy(() => import("@/layouts/Layout"));
const Home = lazy(() => import("@/app/home"));
const Register = lazy(() => import("@/app/register"));
const Login = lazy(() => import("@/app/login"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/search"
            element={
              <Layout>
                <div>Search</div>
              </Layout>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
