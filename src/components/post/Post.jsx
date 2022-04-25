import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../../apis/Axios";

const Post = () => {
  let [state, setState] = useState(null);
  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  let deletePost = async id => {
    await Axios.delete(`/posts/${id}`);
    navigate("/");
  };
  useEffect(() => {
    let fetchPosts = async () => {
      try {
        let { data } = await Axios.get("/posts");
        setLoading(true);
        setState(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
    setLoading(false);
  }, []);
  return (
    <div className="container my-4">
      <table className="table table-bordered table-hovered">
        <thead className="thead-dark text-capitalize">
          <tr>
            <th>Title</th>
            <th>Details</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {state === null
            ? "Loading"
            : state.map(post => {
                let { id, title, details } = post;
                return (
                  <tr key={id}>
                    <td>{title}</td>
                    <td>{details}</td>
                    <td>
                      <Link to={`edit-post/${id}`} className="btn btn-primary ">
                        Edit
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          deletePost(id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
};

export default Post;
