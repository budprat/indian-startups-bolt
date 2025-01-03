import { useState } from 'react'
import { Link } from 'react-router-dom'
import { startups } from '../data/startups'

function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSector, setSelectedSector] = useState('')

  const filteredStartups = startups.filter(startup => {
    const matchesSearch = startup.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSector = !selectedSector || startup.sector === selectedSector
    return matchesSearch && matchesSector
  })

  const sectors = [...new Set(startups.map(startup => startup.sector))]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Discover Indian Startups</h1>
        
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="Search startups..."
            className="input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <select
            className="input"
            value={selectedSector}
            onChange={(e) => setSelectedSector(e.target.value)}
          >
            <option value="">All Sectors</option>
            {sectors.map(sector => (
              <option key={sector} value={sector}>{sector}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStartups.map(startup => (
          <Link
            key={startup.id}
            to={`/startup/${startup.id}`}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-bold mb-2">{startup.name}</h2>
            <p className="text-gray-600 mb-2">{startup.sector}</p>
            <p className="text-sm text-gray-500 mb-4">Founded: {startup.foundingYear}</p>
            <p className="text-gray-700">{startup.description}</p>
            {startup.funding && (
              <div className="mt-4 inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                {startup.funding}: {startup.fundingAmount}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
