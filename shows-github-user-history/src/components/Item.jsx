import React from "react";

function Item(props) {
  return (
    <div style={{ marginBottom: "100px" }}>
      <h2>{props.repo.name}</h2>
      <p>
        <small>
          {new Date(Date.parse(props.repo.created_at)).toLocaleDateString()}
        </small>
      </p>
      <a rel="noreferrer" href={props.repo.html_url} target="_blank">
        {props.repo.html_url}
      </a>
    </div>
  );
}

export default Item;
