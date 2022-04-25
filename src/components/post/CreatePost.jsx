import Axios from "../../apis/Axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  let navigate = useNavigate();
  let [title, setTitle] = useState("");
  let [details, setDetails] = useState("");
  let [loading, setLoading] = useState(false);
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      let payload = { title, details };
      await Axios.post("/posts", payload);
      navigate("/posts");
    } catch (err) {
      console.log(err);
    }

    setTitle("");
    setDetails("");
  };
  return (
    <section id="authBlock" className="card">
      <article className="card-body col-4 mx-auto bg-light my-4">
        <h2 className="text-center font-weight-bold text-dark text-uppercase my-2">
          create post
        </h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="text-capitalize" htmlFor="title">
              title
            </label>
            <input
              type="text"
              id="title"
              className="form-control"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="text-capitalize" htmlFor="details">
              details
            </label>
            <textarea
              name=""
              id="details"
              cols="30"
              rows="10"
              value={details}
              onChange={e => setDetails(e.target.value)}
              required
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-success btn-block my-2"
              onClick={handleSubmit}
            >
              {loading === true ? "loading" : "Create Post"}
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default CreatePost;
