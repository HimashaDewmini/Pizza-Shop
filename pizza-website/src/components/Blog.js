import React from "react";
import "./Blog.css"; 
import image1 from "../assets/image_1.jpg";
import image2 from "../assets/image_2.jpg";
import image3 from "../assets/image_3.jpeg";

const Blog = () => {
  const blogs = [
    {
      image: image1,  
      date: "Sept 6, 2018",
      author: "Admin",
      comments: 3,
      title: "The Delicious Spaghetti",
    },
    {
      image: image2, 
      date: "Sept 10, 2018",
      author: "Admin",
      comments: 3,
      title: "The Delicious Pasta",
    },
    {
      image: image3, 
      date: "Sept 15, 2018",
      author: "Admin",
      comments: 3,
      title: "The Delicious Pizza",
    },
  ];

  return (
    <section className="blog" id="blog">
      <h1 className="blog-title">Read Our Blog</h1>
      <p className="blog-description">
      Welcome to My Pizza Shop Blog, <br></br><br></br>where we share our love for delicious, handcrafted pizzas!<br></br>
       From classic flavors to innovative new toppings, we bring you the latest updates, mouthwatering recipes, and behind-the-scenes stories from our kitchen. <br></br>Whether you're a pizza enthusiast or just looking for the perfect slice, our blog is your go-to place for all things pizza. <br>
       </br>Stay tuned for special deals, customer favorites, and tips to make your pizza nights even better!
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
