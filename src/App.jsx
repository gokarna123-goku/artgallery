import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <main className="w-full min-h-screen bg-neutral-950 text-neutral-500 flex flex-col">
          This is the main page using react js and tailwind css.
        </main>
      </Router>
    </>
  )
}

export default App
