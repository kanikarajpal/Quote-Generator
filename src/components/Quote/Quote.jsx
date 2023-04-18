import React from 'react'
import { deletequote } from '../Misc/quoteSlice';
import { useDispatch } from 'react-redux'

const Quote = ({ quote: {desc, author,  id} }) => {
    const dispatch = useDispatch();

  return (
    <div className="bookmark-main-div">
      <div className="quote-div">
        {" "}
        <div className="delete-icon">
          <i
            className="fas fa-times icon"
            onClick={() => dispatch(deletequote(id))}
          ></i>
        </div>
        <p className="quote-content">{desc}</p>{" "}
        <div className="content-btm">
          <p className="author-text">-{author}</p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Quote;