import { useEffect, useState } from 'react';
import './App.css';
import { FiSearch, FiChevronDown } from "react-icons/fi";
import News from './news';
import Spinner from './Components/spninner/spinner';

function NewsApp() {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null); // New error state

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const API_KEY = "a75fb0ff93214c3fbc4bd3f08dfeba64";

  const getData = async () => {
    setLoading(true);
    setError(null); // Reset error state before fetching
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data.articles);
      setNewsData(data.articles);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch news data. Please try again.'); // Set error message
    } finally {
      setLoading(false);
    }
  };

  const handleInput = (e) => {
    setSearch(e.target.value); // Update search state
  };

  useEffect(() => {
    getData();
  },[search]); // Fetch data when search term changes

  const userInput = (e) => {
    setSearch(e.target.value);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <>
      <header className="bg-slate-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-around items-center">
          {/* Navigation Links */}
          <nav className="hidden md:flex text-xl space-x-6">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">About</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </nav>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center bg-[#171717] text-white px-4 py-2 rounded-md shadow-lg focus:outline-none"
              aria-expanded={isOpen} // Accessibility
            >
              Categories
              <FiChevronDown className="ml-2" />
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <ul className="py-1 text-gray-700">
                  {["Technology", "Sports", "Politics", "Health", "Education", "Lifestyle", "Business"].map((category) => (
                    <li key={category} className="hover:bg-gray-200 px-4 py-2">
                      <button onClick={userInput} value={category}>{category}</button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-full p-2 shadow-md outline-offset-[-4] outline-width-4 outline border-offset-[-10] border-2 border-black">
            <input
              value={search}
              onChange={handleInput}
              id="search"
              type="text"
              placeholder="Search..."
              className="w-64 px-4 py-2 bg-white text-gray-600 rounded-full outline-10  "
            />
            <button onClick={getData} className="text-gray-600 px-3">
              <FiSearch className="text-xl" />
            </button>
          </div>
        </div>
      </header>

      <div className="w-full border-b border-white py-2">
        <h2 className='text-neutral-200 font-mono text-center mt-5 text-5xl'>
          Top Headlines - Rapid News
        </h2>
      </div>

      <div className='container mx-auto flex flex-row flex-wrap gap-5 items-center justify-center mt-8'>
        {/* Conditional rendering for loading and error */}
        {loading ? (
          <Spinner /> // Loader component
        ) : error ? (
          <p className="text-red-500">{error}</p> // Display error message
        ) : (
          newsData ? <News newsData={newsData} /> : <p className="text-gray-400">No news available. Please search for something.</p>
        )}
      </div>
    </>
  );
}

export default NewsApp;
