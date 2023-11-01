import React from "react";
import Item from "./Item";

function List(props) {
  return (
    <>
      <div>This user has {props.userRepos.length} public repositories</div>
      <ul>
        {props.userRepos.map((repo, index) => {
          return (
            <li key={index}>
              <Item key={index} repo={repo} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default List;
