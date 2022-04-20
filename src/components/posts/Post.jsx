import React from "react";

import "./post.sass";

const Post = () => {
  return (
    <div className="post__container">
      <div className="post__left__area">
        <div className="post__header__area">
          <h2>Post Head</h2>
          <div className="post__header__user">
            <span>İmage</span>
            <span>User Name</span>
          </div>
          <div className="post__body__area">
            <p>That will post Container</p>
            <button>Read More...</button>
          </div>
        </div>
      </div>
      <div className="post__bottom__area">
        <div className="post__bottom__views">
          <span>views icon</span>
          <span>views number</span>
        </div>
        <div className="post__bottom__likes">
          <span>icon</span>
          <span>number</span>
        </div>
        <div className="post__bottom__share">
          <span>icon</span>
          <span>share</span>
        </div>
      </div>
      <div className="post__right__area">
        <div className="post__share__buttons">
          <button>icon face</button>
          <button>icon twit </button>
          <button>icon linked</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
