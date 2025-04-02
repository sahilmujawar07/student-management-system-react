import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";

const StudentForm = ({ addStudent, editingStudent, setEditingStudent }) => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
    grade: "",
  });

  useEffect(() => {
    if (editingStudent) {
      setStudent(editingStudent);
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!student.name || !student.email || !student.course) {
      alert("Please fill in all required fields");
      return;
    }
    addStudent(student);
    setStudent({ name: "", email: "", course: "", grade: "" });
  };

  const handleCancel = () => {
    setEditingStudent(null);
    setStudent({ name: "", email: "", course: "", grade: "" });
  };

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>
          {editingStudent ? "Edit Student" : "Add New Student"}
        </Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name *</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={student.name}
              onChange={handleChange}
              placeholder="Enter full name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email *</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={student.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Course *</Form.Label>
            <Form.Control
              type="text"
              name="course"
              value={student.course}
              onChange={handleChange}
              placeholder="Enter course"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Grade</Form.Label>
            <Form.Control
              type="text"
              name="grade"
              value={student.grade}
              onChange={handleChange}
              placeholder="Enter grade"
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">
              {editingStudent ? "Update Student" : "Add Student"}
            </Button>
            {editingStudent && (
              <Button variant="secondary" onClick={handleCancel}>
                Cancel
              </Button>
            )}
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default StudentForm;
