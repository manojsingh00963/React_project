// eslint-disable-next-line no-unused-vars
import React from 'react';
const About = () => {
    return (
        <div className="container mx-auto py-8 px-4 text-slate-200 ">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">About Rapid News</h1>
      <p className="text-lg text-zinc-200 leading-relaxed">
        Welcome to <strong>Rapid News</strong>, your one-stop destination for the latest headlines
        and trending news stories from around the world. Our app allows users to search for news on
        various topics, including Technology, Sports, Politics, Health, Education, Lifestyle, and Business.
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-4">Features</h2>
      <ul className="list-disc list-inside text-lg text-gray-200 space-y-2">
        <li>Search for news articles by topic or keyword</li>
        <li>Explore different categories like Technology, Sports, Politics, and more</li>
        <li>Get up-to-date headlines from reliable news sources</li>
        <li>Responsive design for seamless browsing on mobile and desktop</li>
      </ul>

      <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-4">Why Choose Rapid News?</h2>
      <p className="text-lg text-gray-200 leading-relaxed">
        Our goal is to provide users with fast, accurate, and easy access to the news they care about.
        Whether you&apos;re looking for the latest updates in the tech world, political developments, or sports highlights,
        Rapid News has you covered. Stay informed, stay connected.
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-4">How to Use</h2>
      <p className="text-lg text-gray-200 leading-relaxed">
        Using Rapid News is simple. You can search for news by entering a topic or keyword in the search bar.
        You can also browse through the categories dropdown to explore news articles on specific topics.
        Click on an article to read more or visit the original source for detailed information.
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-4">Contact Us</h2>
      <p className="text-lg text-gray-200 leading-relaxed">
        If you have any questions, feedback, or suggestions, feel free to reach out to us. We’re constantly
        improving and would love to hear from you!
      </p>
    </div>
  );
};

export default About;
