import { gql, useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";

const ADD_LINK = gql`
  mutation Links(
    $title: String!
    $description: String!
    $userId: String!
    $url: String!
    $imagesUrl: String!
    $category: String!
  ) {
    links(
      title: $title
      description: $description
      userId: $userId
      url: $url
      imagesUrl: $imagesUrl
      category: $category
    ) {
      id
      title
      url
      description
      category
      imagesUrl
      userId
    }
  }
`;

const addLinks = () => {
  const [addLink, { data, loading, error }] = useMutation(ADD_LINK);
  const [cookies, setCookie, removeCookie] = useCookies(["user_id"]);
  const title = useRef();
  const description = useRef();
  const imagesUrl = useRef();
  const url = useRef();
  const category = useRef();
  const router = useRouter();
  // =================== LINK ADD FUNCTION ======================= //
  const handleLink = (e) => {
    e.preventDefault();
    const title2 = title.current.value;
    const description2 = description.current.value;
    const imagesUrl2 = imagesUrl.current.value;
    const url2 = url.current.value;
    const category2 = category.current.value;

    if (title2 && description2 && imagesUrl2 && url2 && category2) {
      addLink({
        variables: {
          title: title2,
          description: description2,
          imagesUrl: imagesUrl2,
          url: url2,
          category: category2,
          userId: cookies.user_id,
        },
      }).then((result) => {
        console.log(result);
        if (result.data.links.id) {
          toast.success("Successfully Add!");
          router.push("/links");
        }
      });
    } else {
      toast.error("Full fill the form!");
    }

    console.log({ title2, description2, imagesUrl2, url2, category2 });
  };
  return (
    <div>
      <h1 className="text-4xl text-center p-5">Add Link </h1>
      <form onSubmit={handleLink}>
        <div className="bg-gray-500 p-5 w-[100%] mx-auto text-center">
          <div className="w-[50%] mx-auto">
            <input
              ref={title}
              placeholder="Title"
              type="text"
              id="disabled-input"
              className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <textarea
              placeholder="Description"
              ref={description}
              type="text"
              id="disabled-input-2"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <input
              placeholder="ImagesUrl"
              ref={imagesUrl}
              type="url"
              id="disabled-input"
              className="mt-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <input
              ref={url}
              placeholder="Url"
              type="url"
              id="disabled-input"
              className="mt-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <input
              ref={category}
              placeholder="Category"
              type="text"
              id="disabled-input"
              className="mt-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <button
              type="submit"
              className="bg-gray-800 text-white px-20 py-1.5 mt-5 rounded-lg"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default addLinks;
