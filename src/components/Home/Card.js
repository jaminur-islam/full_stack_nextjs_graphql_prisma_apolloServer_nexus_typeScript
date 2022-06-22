import React from "react";
import { Toaster } from "react-hot-toast";

export const Card = ({ link }) => {
  const { category, id, description, title, url, imagesUrl } = link;
  console.log(imagesUrl);
  console.log(link);
  const isLoading = false;
  return (
    <div>
      <div className="prose container mx-auto px-8">
        <Toaster />
        <img src={link.imagesUrl} className="shadow-lg rounded-lg" />
        <button
          onClick={() => bookmark()}
          className="my-4 capitalize bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600"
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg
                className="w-6 h-6 animate-spin mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
              </svg>
              Saving...
            </span>
          ) : (
            <span>Bookmark</span>
          )}
        </button>
        <h1>{link.title}</h1>
        <img src={link.imageUrl} className="shadow-lg rounded-lg" />
        <p>{link.description}</p>
        <a className="text-blue-500" href={`${link.url}`}>
          {link.url}
        </a>
      </div>
    </div>
  );
};
