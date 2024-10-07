import React from 'react';
import PropTypes from 'prop-types';

function News({ newsData }) {
  console.log(newsData);

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {newsData.map((data, index) => (
        <div
          key={index}
          className="max-w-xs rounded-md shadow-md bg-black text-gray-100"
        >
          <img
            src={data.urlToImage || "https://source.unsplash.com/301x301/?news"}
            alt={data.title}
            onClick={()=>window.open(data.url)}
            className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-wide">{data.title}</h2>
              <p className="text-gray-400">
              onClick={()=>window.open(data.url)}
                {data.description || 'No description available.'}
              </p>
            </div>
            <a
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
            >
              Read more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

// PropTypes validation
News.propTypes = {
  newsData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      url: PropTypes.string.isRequired,
      urlToImage: PropTypes.string,
    })
  ).isRequired,
};

export default News;
