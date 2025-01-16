import React from "react";
import "./Blog.css"; // Ensure this matches your CSS file name and path
import image1 from "../assets/image_1.jpg";
import image2 from "../assets/image_2.jpg";
import image3 from "../assets/image_3.jpeg";

const Blog = () => {
  const blogs = [
    {
      image: image1,  // Replace with your image path
      date: "Sept 6, 2018",
      author: "Admin",
      comments: 3,
      title: "The Delicious Spaghetti",
    },
    {
      image: image2, // Replace with your image path
      date: "Sept 10, 2018",
      author: "Admin",
      comments: 3,
      title: "The Delicious Pasta",
    },
    {
      image: image3, // Replace with your image path
      date: "Sept 15, 2018",
      author: "Admin",
      comments: 3,
      title: "The Delicious Pizza",
    },
  ];

  return (
    <section className="blog">
      <h1 className="blog-title">Read Our Blog</h1>
      <p className="blog-description">
      A small river named Duden flows by their place and supplies it with the necessary regelialia.
      </p>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} />
            <div className="blog-card-content">
              <p className="blog-date">
                {blog.date} | {blog.author} | {blog.comments} comments
              </p>
              <h2 className="blog-title-card">{blog.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
