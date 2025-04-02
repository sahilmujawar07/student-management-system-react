import React from "react";
import { Card, Button, Badge } from "react-bootstrap";

const StudentCard = ({ student, editStudent, deleteStudent }) => {
  return (
    <Card className="shadow-sm h-100">
      <Card.Body>
        <Card.Title>{student.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {student.email}
        </Card.Subtitle>

        <div className="mb-2">
          <Badge bg="info" className="me-1">
            Course:
          </Badge>
          <span>{student.course}</span>
        </div>

        {student.grade && (
          <div className="mb-3">
            <Badge bg="success" className="me-1">
              Grade:
            </Badge>
            <span>{student.grade}</span>
          </div>
        )}

        <div className="d-grid gap-2">
          <Button
            variant="outline-primary"
            size="sm"
            onClick={() => editStudent(student.id)}
          >
            Edit
          </Button>
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => {
              if (
                window.confirm("Are you sure you want to delete this student?")
              ) {
                deleteStudent(student.id);
              }
            }}
          >
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default StudentCard;
