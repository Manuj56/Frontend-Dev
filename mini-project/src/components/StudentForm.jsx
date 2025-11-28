import React, { useState } from "react";

function StudentForm({ mode, initialData, onCancel, onSubmit }) {
  const [name, setName] = useState(initialData?.name || "");
  const [section, setSection] = useState(initialData?.section || "");
  const [marks, setMarks] = useState(initialData?.marks || "");
  const [grade, setGrade] = useState(initialData?.grade || "");

  const isEdit = mode === "edit";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !section || !marks || !grade) {
      alert("Please fill in all fields.");
      return;
    }

    const studentData = {
      name,
      section,
      marks: Number(marks),
      grade,
    };

    onSubmit(studentData);
  };

  return (
    <div className="card">
      <h2>{isEdit ? "Edit Student" : "Add Student"}</h2>

      <form onSubmit={handleSubmit} className="form-grid">
        <label>
          Name
          <input
            type="text"
            placeholder="Enter student name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Section
          <input
            type="text"
            placeholder="A / B / C"
            value={section}
            onChange={(e) => setSection(e.target.value)}
          />
        </label>

        <label>
          Marks
          <input
            type="number"
            placeholder="0 - 100"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
          />
        </label>

        <label>
          Grade
          <input
            type="text"
            placeholder="A / B / C..."
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />
        </label>

        <div className="form-actions">
          <button type="submit">
            {isEdit ? "Save Changes" : "Add Student"}
          </button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
