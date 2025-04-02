import React from "react";
import StudentCard from "./StudentCard";
import { Row, Col, Container, Alert } from "react-bootstrap";

const StudentList = ({ students, editStudent, deleteStudent }) => {
  return (
    <div>
      <h4 className="mb-4">Student Records ({students.length})</h4>

      {students.length === 0 ? (
        <Alert variant="info">
          No students found. Please add some students.
        </Alert>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {students.map((student) => (
            <Col key={student.id}>
              <StudentCard
                student={student}
                editStudent={editStudent}
                deleteStudent={deleteStudent}
              />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default StudentList;
