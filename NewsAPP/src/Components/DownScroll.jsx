import { FaArrowCircleDown } from "react-icons/fa";
import { useEffect, useRef } from 'react';

function BackScroll() {
  const backScrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 200) {
        // Hide the button if the user is near the bottom
        backScrollRef.current.style.display = 'none';
      } else {
        // Show the button when the user is not near the bottom
        backScrollRef.current.style.display = 'block';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' }); // Scroll to the bottom
  };

  return (
    <button
      ref={backScrollRef}
      onClick={handleClick}
      className="fixed bottom-14 right-1 lg:right-10 p-1 border border-slate-400 rounded-full hidden text-gray-900 text-2xl fill-slate-900 bg-slate-400"
    >
      <FaArrowCircleDown />
    </button>
  );
}

export default BackScroll;
