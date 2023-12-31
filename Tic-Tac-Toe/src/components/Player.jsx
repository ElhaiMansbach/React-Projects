import { useState } from "react";
import styles from "./Player.module.css";

export default function Player({
  initialName,
  symbol,
  isActive,
  onNameChange,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handaleChange(event) {
    setPlayerName(event.target.value);
    if (isEditing) onNameChange(symbol, event.target.value);
  }

  let editablePlayerName = (
    <span className={styles.playerName}>{playerName}</span>
  );
  if (isEditing)
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handaleChange} />
    );

  return (
    <div className={styles.container}>
      <li className={isActive ? styles.active : undefined}>
        <span className={styles.player}>
          {editablePlayerName}
          <span className={styles.playerSymbol}>{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </div>
  );
}
