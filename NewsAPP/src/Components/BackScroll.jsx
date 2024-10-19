import { useEffect, useRef } from 'react';
import { FaArrowAltCircleUp } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
function BackScroll({darkMode}) {
  const BackScrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        BackScrollRef.current.style.display = 'block';
      } else {
        BackScrollRef.current.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      ref={BackScrollRef}
      onClick={handleClick}
      className={`fixed bottom-14 right-1 lg:right-10 p-1 border border-slate-400 rounded-full hidden text-gray-900 text-2xl fill-slate-900 bg-slate-400 `}
    >
    <FaArrowAltCircleUp/>
    </button>
  );
}

export default BackScroll;
