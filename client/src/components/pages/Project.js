import React from 'react';

function Project(props) {
  const { title, description, image, url, repo } = props;

  return (
    <div className="project">
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={image} alt={title} />
      <div className="links">
        <a href={url}>Live Demo</a>
        <a href={repo}>GitHub Repository</a>
      </div>
    </div>
  );
}

export default Project;
