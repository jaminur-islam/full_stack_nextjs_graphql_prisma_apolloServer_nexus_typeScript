import React from "react";

export const Card = ({ link, userLink }) => {
  const isLoading = false;
  return (
    <div>
      <div className="prose container mx-auto px-8">
        <img src={link.imagesUrl} className="shadow-lg rounded-lg" />

        <h1 className="mt-2">{link.title}</h1>
        <img src={link.imageUrl} className="shadow-lg rounded-lg" />
        <p>{link.description}</p>
        <a className="text-blue-500" href={`${link.url}`}>
          {link.url}
        </a>
        <br />
        {userLink && (
          <button className="px-5 py-1.5 bg-blue-500 rounded-lg mt-2 text-white">
            Delete
          </button>
        )}
      </div>
    </div>
  );
};
