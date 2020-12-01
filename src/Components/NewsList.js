import React from 'react';

const NewsList = (props) => {
  return (
    <div className="layout">
    {props.relatedArticles.map(story => (
        <div className="card margin-bottom" style={{ width: "20rem" }}>
            <div className="card-body" key={story.objectID}>
                <h5 className="card-title">{story.title}</h5>
                <p className="card-text">Author: {story.author}</p>
                <button type="button" className="btn btn-primary"><a href={story.url} target="_blank" rel="noreferrer" >Visit Website</a></button>
            </div>
        </div>
    ))}
</div>
)
}

export default NewsList;