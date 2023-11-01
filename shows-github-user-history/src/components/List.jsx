import React from "react";
import Item from "./Item";

function List(props) {
  const sortedRepos = [...props.userRepos].sort((repo1, repo2) => {
    const date1 = new Date(repo1.created_at);
    const date2 = new Date(repo2.created_at);
    return date2 - date1;
  });
  return (
    <div style={{ marginTop: "80px" }}>
      {sortedRepos.map((repo, index) => {
        return <Item key={index} repo={repo} />;
      })}
    </div>
  );
}

export default List;
