import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GifState } from "../context/GifContext";
import FilterGif from "../components/FilterGif";
import Gif from "../components/Gif";

const Search = () => {
  const [searchResult, setSearchResult] = useState([]);
  const { gf, filter } = GifState();

  //query form app.jsx search route
  const { query } = useParams();

  const fetchSearchResults = async () => {
    const { data } = await gf.search(query, {
      sort: "relevant",
      lang: "en",
      type:filter,
      limit:20,
    });
    setSearchResult(data);
  };

  useEffect(()=>{
    fetchSearchResults();
  },[query,filter])

  return <div className="my-4">
    <h2 className="text-5xl pb-3 font-extrabold"> {query}</h2>
    <FilterGif alignLeft={true}/>
    {searchResult.length >0?(
      <div className="columns-2 md:columns-3 lg:columns-4 gap-2">
        {searchResult.map((gif)=>(
          <Gif gif={gif} key={gif.id}/>
        ))

        }
      </div>
    ): (
      <span>
        No GIFs found for {query}. Try searching for sticker instead?
      </span>
    )

    }
  </div>;
};

export default Search;
