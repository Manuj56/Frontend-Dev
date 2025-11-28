import React, { useState } from "react";

function StudentList({ students, onLoad, onAdd, onEdit, onDelete, onViewDetails }) {
  const [search, setSearch] = useState("");
  const [sectionFilter, setSectionFilter] = useState("All");
  const [sortType, setSortType] = useState("none");

  const filteredStudents = students
    .filter((s) =>
      s.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((s) => (sectionFilter === "All" ? true : s.section === sectionFilter))
    .sort((a, b) => {
      if (sortType === "marks-desc") return b.marks - a.marks;
      if (sortType === "marks-asc") return a.marks - b.marks;
      if (sortType === "name-asc") return a.name.localeCompare(b.name);
      if (sortType === "name-desc") return b.name.localeCompare(a.name);
      return 0;
    });

  return (
    <div className="card">
      <div className="card-header">
        <h2>Students</h2>
        <div className="actions">
          <button onClick={onLoad}>Load Students</button>
          <button onClick={onAdd}>Add Student</button>
        </div>
      </div>

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search by name…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={sectionFilter}
          onChange={(e) => setSectionFilter(e.target.value)}
        >
          <option>All</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>

        <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
          <option value="none">Sort</option>
          <option value="marks-desc">Marks (High → Low)</option>
          <option value="marks-asc">Marks (Low → High)</option>
          <option value="name-asc">Name (A → Z)</option>
          <option value="name-desc">Name (Z → A)</option>
        </select>
      </div>

      {filteredStudents.length === 0 ? (
        <p>No matching students found.</p>
      ) : (
        <table className="student-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Section</th>
              <th>Marks</th>
              <th>Grade</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((stu) => (
              <tr
                key={stu.id}
                className={stu.marks >= 90 ? "topper-row" : ""}
              >
                <td>{stu.id}</td>
                <td>{stu.name}</td>
                <td>{stu.section}</td>
                <td>{stu.marks}</td>
                <td>
                  <span
                    className={
                      "grade-badge " +
                      (stu.grade === "A+" ? "grade-Aplus" :
                       stu.grade === "A" ? "grade-A" :
                       stu.grade === "B" ? "grade-B" :
                       stu.grade === "C" ? "grade-C" :
                       "grade-D")
                    }
                  >
                    {stu.grade}
                  </span>
                </td>

                <td>
                  <button onClick={() => onViewDetails(stu)}>View</button>
                  <button onClick={() => onEdit(stu)}>Edit</button>
                  <button onClick={() => onDelete(stu.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentList;
