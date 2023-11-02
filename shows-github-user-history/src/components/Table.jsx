import React from "react";
import Row from "./Row";
import "../css/Table.css";

function Table(props) {
  const sortedRepos = [...props.userRepos].sort((repo1, repo2) => {
    const date1 = new Date(repo1.created_at);
    const date2 = new Date(repo2.created_at);
    return date2 - date1;
  });
  return (
    <div
      style={{
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
      <table>
        <thead>
          <tr>
            <th> </th>
            <th>Name</th>
            <th>Date</th>
            <th>Link</th>
          </tr>
        </thead>
        {sortedRepos.map((repo, index) => {
          return <Row key={index} index={index} repo={repo} />;
        })}
      </table>
    </div>
  );
}

export default Table;
