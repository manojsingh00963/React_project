// eslint-disable-next-line no-unused-vars
import React from 'react';
import LoadingBar from 'react-top-loading-bar'

import Navbar from './Components/Navbar';
import { useEffect, useState } from 'react';
import './App.css';
import News from './Components/News';
import Spinner from './spinner/Spinner';

function NewsApp() {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0)


  const getData = async () => {
    setLoading(true);
    setProgress(0)
    setError(null);
    try {
      setProgress(10)
      const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${import.meta.env.VITE_REACT_NEWS_API}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setProgress(30)
      const data = await response.json();
      setProgress(70)
      console.log(data.articles);
      setNewsData(data.articles);
      setProgress(100)
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch news data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const userInput = (e) => {
    setSearch(e.target.value);
  };

  // Capitalize function
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      <Navbar search={search} handleInput={handleInput} getData={getData} userInput={userInput} />
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        />

      <div className="w-full border-b border-white py-2 ">
        <h2 className='text-neutral-200 font-mono text-center text-xl md:text-2xl mt-4 '>
        RapidNews - Top {capitalizeFirstLetter(search)} Headlines </h2>
      </div>

      <div className='container mx-auto flex flex-col md:flex-row flex-wrap gap-5 items-center justify-center mt-8'>
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
