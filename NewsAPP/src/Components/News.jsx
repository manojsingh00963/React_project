// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function News({ newsData }) {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {newsData.map((data, index) => (
        <div
          key={index}
          className="relative max-w-xs rounded-md shadow-md bg-black text-gray-100"
        >
          {/* Image */}
          <img
            src={data.urlToImage || "https://thumbs.dreamstime.com/b/online-news-article-tablet-screen-electronic-newspaper-magazine-latest-press-media-mockup-digital-portal-151771038.jpg?w=768"}
            alt={data.title}
            onClick={() => window.open(data.url)}
            className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
          />

          {/* Source Badge */}
          <div className="absolute top-0 bg-[#1c1c4690] rounded-sm right-0 z-1 py-[2px] px-0 " >
            <span
              className="text-base font-semibold text-white"
              style={{
                width: "100px",  // Set a fixed width for the badge
                display: "block",
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
            >
              {data.source.name}
            </span>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-wide">{data.title}</h2>
              <p className="text-gray-400">{data.description || 'No description available.'}</p>
            </div>
            <p className="card-text">
            <small className="text-muted">
              By {!data.author ? "Unknown" : data.author} on <i className='text-dark'>{new Date(data.publishedAt).toUTCString()}</i>
            </small>
          </p>
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
