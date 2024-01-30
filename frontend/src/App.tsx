import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const Layout = lazy(() => import("./layouts/Layout"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <div>Home</div>
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
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
