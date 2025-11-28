import React, { useState } from "react";
import StudentList from "./components/StudentList.jsx";
import StudentForm from "./components/StudentForm.jsx";
import StudentDetails from "./components/StudentDetails.jsx";
import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "./services/studentService.js";

function App() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [view, setView] = useState("list"); // "list" | "add" | "edit" | "details"

  // Load all students (manual – via button)
  const handleLoadStudents = async () => {
    try {
      const data = await getStudents();
      setStudents(data);
    } catch (error) {
      console.error(error);
      alert("Failed to load students.");
    }
  };

  const handleAddClick = () => {
    setSelectedStudent(null);
    setView("add");
  };

  const handleEditClick = (student) => {
    setSelectedStudent(student);
    setView("edit");
  };

  const handleDeleteClick = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );
    if (!confirmDelete) return;

    try {
      await deleteStudent(id);
      alert("Student deleted successfully. Click 'Load Students' to refresh.");
    } catch (error) {
      console.error(error);
      alert("Failed to delete student.");
    }
  };

  const handleViewDetailsClick = (student) => {
    setSelectedStudent(student);
    setView("details");
  };

  // Called when Add/Edit form is submitted
  const handleFormSubmit = async (formData) => {
    try {
      if (view === "add") {
        await addStudent(formData);
        alert("Student added successfully! Click 'Load Students' to refresh.");
      } else if (view === "edit" && selectedStudent) {
        await updateStudent(selectedStudent.id, formData);
        alert("Student updated successfully! Click 'Load Students' to refresh.");
      }
      setView("list");
      setSelectedStudent(null);
    } catch (error) {
      console.error(error);
      alert("Failed to save student.");
    }
  };

  const handleCancelForm = () => {
    setView("list");
    setSelectedStudent(null);
  };

  const handleBackFromDetails = () => {
    setView("list");
    setSelectedStudent(null);
  };

  // Screen switching
  let content;
  if (view === "list") {
    content = (
      <StudentList
        students={students}
        onLoad={handleLoadStudents}
        onAdd={handleAddClick}
        onEdit={handleEditClick}
        onDelete={handleDeleteClick}
        onViewDetails={handleViewDetailsClick}
      />
    );
  } else if (view === "add" || view === "edit") {
    content = (
      <StudentForm
        mode={view} // "add" or "edit"
        initialData={selectedStudent}
        onCancel={handleCancelForm}
        onSubmit={handleFormSubmit}
      />
    );
  } else if (view === "details" && selectedStudent) {
    content = (
      <StudentDetails student={selectedStudent} onBack={handleBackFromDetails} />
    );
  }

  return (
    <div className="app-container">
      <h1 className="app-title">Student Result Management</h1>
      {content}
    </div>
  );
}

export default App;
