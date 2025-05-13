import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"

function App() {
  return (
    <>
      <Router>
        <main className="w-full min-h-screen bg-neutral-950 text-neutral-500 flex flex-col">
          {/* Navbar */}
          <Navbar />

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>


          {/* Footer */}
          {/* <Footer /> */}

        </main>
      </Router>
    </>
  )
}

export default App
