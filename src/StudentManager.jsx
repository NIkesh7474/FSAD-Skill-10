import React, { useState } from 'react';
import './StudentManager.css';

const StudentManager = () => {

  // Task 2 & 3a -- initial students array with 5 objects
  const [students, setStudents] = useState([
    { id: 1, name: 'Adithya',  course: 'Full Stack Dev'  },
    { id: 2, name: 'Ravi',     course: 'Java Backend'    },
    { id: 3, name: 'Priya',    course: 'UI/UX Design'    },
    { id: 4, name: 'Kiran',    course: 'Cloud Computing' },
    { id: 5, name: 'Sneha',    course: 'Data Science'    },
  ]);

  // Task 3b -- newStudent object state
  const [newStudent, setNewStudent] = useState({ id: '', name: '', course: '' });

  // Task 4 -- handle input change (updates newStudent fields)
  const handleChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  // Task 5 -- Add student to array and clear inputs
  const addStudent = () => {
    if (!newStudent.id || !newStudent.name || !newStudent.course) return;
    setStudents([...students, newStudent]);
    setNewStudent({ id: '', name: '', course: '' });
  };

  // Task 7 -- Delete student by id
  const deleteStudent = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };

  return (
    <div className='container'>
      <h2>Student Manager</h2>

      {/* Task 4 -- Input fields */}
      <div className='input-row'>
        <input
          name='id'
          placeholder='ID'
          value={newStudent.id}
          onChange={handleChange}
        />
        <input
          name='name'
          placeholder='Name'
          value={newStudent.name}
          onChange={handleChange}
        />
        <input
          name='course'
          placeholder='Course'
          value={newStudent.course}
          onChange={handleChange}
        />
        <button className='btn-add' onClick={addStudent}>
          + Add Student
        </button>
      </div>

      {/* Task 6, 8 -- Display list or empty message */}
      {students.length === 0 ? (
        <p className='empty'>No students available</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.course}</td>
                <td>
                  <button
                    className='btn-del'
                    onClick={() => deleteStudent(s.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentManager;
