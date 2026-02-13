export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* HEADER */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-primary">Rencapi</h1>
          <nav className="space-x-6 font-medium">
            <a href="#" className="hover:text-secondary">Login</a>
            <a href="#" className="hover:text-secondary">Sign Up</a>
            <a href="#" className="hover:text-secondary">About</a>
            <a href="#" className="hover:text-secondary">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-20 text-center">
        <h2 className="text-4xl font-extrabold mb-4">The Rental Capital of Zimbabwe</h2>
        <p className="text-lg mb-8">Find houses, vehicles, land and venues anywhere in Zimbabwe</p>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6 grid md:grid-cols-4 gap-4 text-gray-700">
          <select className="p-3 border rounded">
            <option>Type of Rental</option>
            <option>Accommodation</option>
            <option>Vehicles</option>
            <option>Land</option>
            <option>Work Space</option>
            <option>Venues</option>
          </select>

          <select className="p-3 border rounded">
            <option>Select City</option>
            <option>Harare</option>
            <option>Bulawayo</option>
            <option>Kwekwe</option>
            <option>Mutare</option>
          </select>

          <select className="p-3 border rounded">
            <option>Neighbourhood</option>
          </select>

          <button className="bg-blue-700 text-white rounded p-3 font-semibold hover:bg-blue-800">
            Search
          </button>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h3 className="text-3xl font-bold text-center mb-10">Browse Categories</h3>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {["Accommodation","Vehicles","Land","Work Space","Venues"].map(cat => (
            <div key={cat} className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition">
              <p className="font-semibold">{cat}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-10 text-center">
        <p>© {new Date().getFullYear()} Rencapi — The Rental Capital</p>
      </footer>

    </div>
  )
}
