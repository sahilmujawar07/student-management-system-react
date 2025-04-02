const StudentItem = ({ student, deleteStudent, editStudent }) => {
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.email}</td>
      <td>{student.course}</td>
      <td className="actions">
        <button onClick={() => editStudent(student)} className="edit-btn">
          Edit
        </button>
        <button
          onClick={() => deleteStudent(student.id)}
          className="delete-btn"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default StudentItem;
