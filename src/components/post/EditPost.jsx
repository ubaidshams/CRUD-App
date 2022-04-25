import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "../../apis/Axios";

const EditPost = () => {
  let [title, setTitle] = useState("");
  let [details, setDetails] = useState("");
  let [loading, setLoading] = useState(false);
  let { id } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    let fetchData = async () => {
      let { data } = await Axios.get(`/posts/${id}`);
      setTitle(data.title);
      setDetails(data.details);
    };
    fetchData();
  }, [id]);
  let handleSubmit = async e => {
    e.preventDefault();
    let payload = { title, details };
    try {
      await Axios.put(`/posts/${id}`, payload);
      navigate("/posts");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section id="editBlock" className="card">
      <article className="card-body col-4 mx-auto bg-light my-4">
        <h2 className="text-center font-weight-bold text-dark text-uppercase my-2">
          create post
        </h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className=" text-capitalize" htmlFor="title">
              title
            </label>
            <input
              id="title"
              type="text"
              className="form-control"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className=" text-capitalize" htmlFor="details">
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
              {loading === true ? "loading" : "Update Post"}
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default EditPost;
