import { Project } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import styles from "./ProjectItem.module.css";
import React from "react";

export default function ProjectItem(props: {
  project: Project;
  onDelete: Function;
  onEdit: Function;
}) {
  const editHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    props.onEdit(event);
  };
  const deleteHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    props.onDelete(event);
  };

  return (
    <tr>
      <td>{props.project.title}</td>
      <td className={styles.actions}>
        <button
          className={styles.button}
          value={props.project.id}
          onClick={editHandler}
        >
          <FontAwesomeIcon icon={faPen} />
        </button>
        <button
          className={styles.button}
          value={props.project.id}
          onClick={deleteHandler}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </td>
    </tr>
  );
}
