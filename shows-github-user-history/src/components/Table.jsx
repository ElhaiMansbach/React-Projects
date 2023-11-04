import React, { useState, useEffect } from "react";
import Row from "./Row";
import "../css/Table.css";

function Table(props) {
  const [repos, setRepos] = useState([...props.userRepos]);
  const [sortType, setSortType] = useState(null);

  const sortByName = (ascending) => {
    const sortedRepos = [...repos].sort((repo1, repo2) => {
      const name1 = repo1.name.toLowerCase();
      const name2 = repo2.name.toLowerCase();
      return ascending
        ? name1.localeCompare(name2)
        : name2.localeCompare(name1);
    });
    setRepos(sortedRepos);
    setSortType(ascending ? "nameUp" : "nameDown");
  };

  const sortByDate = (ascending) => {
    const sortedRepos = [...repos].sort((repo1, repo2) => {
      const date1 = new Date(repo1.created_at);
      const date2 = new Date(repo2.created_at);
      return ascending ? date1 - date2 : date2 - date1;
    });
    setRepos(sortedRepos);
    setSortType(ascending ? "dateUp" : "dateDown");
  };

  useEffect(() => {
    sortByDate("");
    // eslint-disable-next-line
  }, []);

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
            <th>
              Name
              <button
                onClick={() => sortByName(sortType !== "nameUp")}
                className={sortType === "nameUp" ? "active" : ""}
              >
                {sortType === "nameUp" ? "⇩" : "⇧"}
              </button>
            </th>
            <th>
              Date
              <button
                onClick={() => sortByDate(sortType !== "dateUp")}
                className={sortType === "dateUp" ? "active" : ""}
              >
                {sortType === "dateUp" ? "⇩" : "⇧"}
              </button>
            </th>
            <th>Link</th>
          </tr>
        </thead>
        {repos.map((repo, index) => {
          return <Row key={index} index={index} repo={repo} />;
        })}
      </table>
    </div>
  );
}

export default Table;

// import React, {useState} from "react";
// import Row from "./Row";
// import SortUp from "./SortUp";
// import SortDown from "./SortDown";
// import "../css/Table.css";

// function Table(props) {
//   const sortedRepos = [...props.userRepos].sort((repo1, repo2) => {
//     const date1 = new Date(repo1.created_at);
//     const date2 = new Date(repo2.created_at);
//     return date2 - date1;
//   });
//   return (
//     <div
//       style={{
//         display: "flex",
//         textAlign: "center",
//         justifyContent: "center",
//         alignItems: "center",
//         marginTop: "50px",
//         marginBottom: "50px",
//       }}
//     >
//       <table>
//         <thead>
//           <tr>
//             <th > </th>
//             <th className="centered-header"><SortUp /> Name <SortDown /></th>
//             <th className="centered-header"><SortUp /> Date <SortDown /></th>
//             <th>Link</th>
//           </tr>
//         </thead>
//         {sortedRepos.map((repo, index) => {
//           return <Row key={index} index={index} repo={repo} />;
//         })}
//       </table>
//     </div>
//   );
// }

// export default Table;
