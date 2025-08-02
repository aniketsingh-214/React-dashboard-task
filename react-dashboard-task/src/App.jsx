import React from 'react';
import Dashboard from './components/Dashboard';

function App() {
  return (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-sans">
    <main className="max-w-6xl mx-auto px-4 py-10">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          COVID-19 Global Dashboard
        </h1>
        <p className="mt-3 text-base md:text-lg text-cyan-300">
          Live data powered by the disease.sh API.
        </p>
      </header>

      <section className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-lg border border-white/10">
        <Dashboard />
      </section>
    </main>

    <footer className="text-center py-6 text-sm text-gray-400">
      <p>
        Dashboard design updated at {new Date().toLocaleTimeString('en-IN')} in Bhiwadi, Rajasthan.
      </p>
    </footer>
  </div>
);

}

export default App;