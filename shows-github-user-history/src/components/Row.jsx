import React from "react";

function Row(props) {
  return (
    <tbody>
      <tr>
        <td>{props.index + 1}</td>
        <td>{props.repo.name}</td>
        <td>
          {new Date(Date.parse(props.repo.created_at)).toLocaleDateString()}
        </td>
        <td>
          <a rel="noreferrer" href={props.repo.html_url} target="_blank">
            {props.repo.html_url}
          </a>
        </td>
      </tr>
    </tbody>
  );
}

export default Row;
