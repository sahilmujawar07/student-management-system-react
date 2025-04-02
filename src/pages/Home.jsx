import React, { useState, useEffect } from "react";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import { Container, Row, Col, Alert } from "react-bootstrap";

const Home = () => {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: "", variant: "" });

  // Load students from localStorage on component mount
  useEffect(() => {
    const savedStudents = localStorage.getItem("students");
    if (savedStudents) {
      setStudents(JSON.parse(savedStudents));
    }
  }, []);

  // Save students to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    if (editingStudent) {
      // Update existing student
      setStudents(students.map((s) => (s.id === student.id ? student : s)));
      setAlert({
        show: true,
        message: "Student updated successfully!",
        variant: "success",
      });
    } else {
      // Add new student
      const newStudent = { ...student, id: Date.now() };
      setStudents([...students, newStudent]);
      setAlert({
        show: true,
        message: "Student added successfully!",
        variant: "success",
      });
    }
    setEditingStudent(null);
    setTimeout(() => setAlert({ show: false, message: "", variant: "" }), 3000);
  };

  const editStudent = (id) => {
    const studentToEdit = students.find((student) => student.id === id);
    setEditingStudent(studentToEdit);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
    setAlert({
      show: true,
      message: "Student deleted successfully!",
      variant: "danger",
    });
    setTimeout(() => setAlert({ show: false, message: "", variant: "" }), 3000);
  };

  return (
    <Container fluid className="py-4">
      {alert.show && (
        <Alert
          variant={alert.variant}
          onClose={() => setAlert({ show: false })}
          dismissible
        >
          {alert.message}
        </Alert>
      )}

      <Row>
        <Col md={5} lg={4} className="mb-4">
          <StudentForm
            addStudent={addStudent}
            editingStudent={editingStudent}
            setEditingStudent={setEditingStudent}
          />
        </Col>
        <Col md={7} lg={8}>
          <StudentList
            students={students}
            editStudent={editStudent}
            deleteStudent={deleteStudent}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
