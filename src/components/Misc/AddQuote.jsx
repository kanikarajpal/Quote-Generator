import React, { useState, useEffect } from "react";
import { addquote } from "./quoteSlice";
import { useDispatch } from "react-redux";
import { quoteAPI } from "../API/quoteAPI";

const AddQuote = () => {
  const [loader, setLoader] = useState(true);
  const [quote, setQuote] = useState("");
  const [tags, setTags] = useState([]);
  const [currentType, setCurrentType] = useState("");

  async function getRandomQuote() {
    const { data, isLoading } = await quoteAPI("random");
    setLoader(isLoading);
    setQuote(data);
  }
  async function getTags() {
    const { data } = await quoteAPI("tags");
    setTags(data);
  }
  useEffect(() => {
    getRandomQuote();
    getTags();
  }, []);
  async function getTagQuote(tag) {
    let str = `random?tags=${tag}`;
    const { data } = await quoteAPI(str);
    setQuote(data);
  }
  const dispatch = useDispatch();
  function handleChange(e) {
    setCurrentType(e.target.value);
    getTagQuote(currentType);
  }

  const submitquote = (quote) => {
    // Create a new quote
    const newquote = {
      id: quote._id,
      desc: quote.content,
      author: quote.author,
    };

    // Dispatch the new quote to the store
    dispatch(addquote(newquote));
  };

  return (
    <div className="home-container">
      {loader ? (
        <div>LOADING...</div>
      ) : (
        <div className="home-main-div">
          <div className="quote-div">
            <p className="content">{quote.content}</p>
            <div className="content-btm">
              <p className="author-text">-{quote.author}</p>

              <i
                onClick={() => submitquote(quote)}
                className="fa-solid fa-bookmark fa-2xs"
              ></i>
            </div>
          </div>
          <div className="tag-div">
            <select
              value={currentType}
              onChange={(e) => {
                handleChange(e);
              }}
              className="tag-div"
            >
              {tags.map((item, index) => {
                return (
                  <option value={item.slug} key={index} className="tag-div">
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <button
            onClick={() => {
              getRandomQuote();
            }}
            className="btn-div"
          >
            Next Quote
          </button>{" "}
        </div>
      )}
    </div>
  );
};

export default AddQuote;
