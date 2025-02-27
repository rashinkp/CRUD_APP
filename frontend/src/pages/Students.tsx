import { useEffect, useState } from "react";
import { addStudent, deleteStudent, editStudent, getStudents } from "../services/student.services";
import { useNavigate } from "react-router-dom";

import {student as studentType} from '../types/student'

const Students = () => {
  const [students, setStudents] = useState<studentType[]>([]);
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentStudent, setCurrentStudent] = useState({
    _id:"",
    name: "",
    age: 0,
    course: "",
  });
  const [isEditing, setIsEditing] = useState(false);


  useEffect(() => {
    fetchStudents();
  }, [])
  

  const fetchStudents = async () => {
    try {
      const data = await getStudents();
      setStudents(data);
    } catch (error) {
      console.error("Failed to load students", error);
    }
  }

  const handleAddClick = () => {
    setCurrentStudent({_id: "" , name: "", age: 0, course: "" });
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const handleEditClick = (student: studentType) => {
    setCurrentStudent(student);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleDelete = async () => {
    try {
      await deleteStudent(currentStudent._id);
      const updatedStudents = await getStudents();
      setStudents(updatedStudents);
      setIsDeleting(false);
      navigate('/students');
    } catch (error) {
      console.error("Failed to delete students", error);
    }
  };

  const handleSubmit = async(e:React.FormEvent) => {
    e.preventDefault();

    if (!currentStudent.name || isNaN(currentStudent.age) || currentStudent.age < 0 || !currentStudent.course) {
      alert("Please fill in all fields");
      return;
    }

    try {
      if (isEditing) {
        await editStudent(currentStudent._id, currentStudent);
      } else {
        await addStudent(currentStudent);
      }
    } catch (error) {
      console.error("Failed to update student", error);
    }

    const updatedStudents = await getStudents();
    setStudents(updatedStudents);
    navigate('/students');

    setIsModalOpen(false);
    setCurrentStudent({ _id:"" , name: "", age: 0, course: "" });
  };

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCurrentStudent({
      ...currentStudent,
      [name]: name === "age" ? parseInt(value) ||0 : value,
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Student List</h1>
        <button
          onClick={handleAddClick}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Add Student
        </button>
      </div>

      {/* Student Table */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Age
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map((student : studentType) => (
                <tr key={student._id} className="hover:bg-gray-50">
                  
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {student.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {student.age}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {student.course}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleEditClick(student)}
                      className="text-indigo-600 hover:text-indigo-900 mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        setIsDeleting(true);
                        setCurrentStudent(student);
                      }}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {students.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-4 text-center text-sm text-gray-500"
                  >
                    No students found. Click "Add Student" to add a new student.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Student Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="px-6 py-4 border-b">
              <h2 className="text-xl font-semibold text-gray-800">
                {isEditing ? "Edit Student" : "Add New Student"}
              </h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={currentStudent.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Age
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={currentStudent.age}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter age"
                    min="1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Course
                  </label>
                  <input
                    type="text"
                    name="course"
                    value={currentStudent.course}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter course name"
                  />
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t flex justify-end space-x-3 rounded-b-lg">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-700"
                >
                  {isEditing ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isDeleting && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="p-6">
              <div className="flex items-center justify-center mb-4 text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-14 w-14"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-center text-gray-800 mb-2">
                Confirm Deletion
              </h3>
              <p className="text-center text-gray-600 mb-6">
                Are you sure you want to delete{" "}
                <span className="font-semibold">{currentStudent.name}</span>?
                This action cannot be undone.
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => setIsDeleting(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete()}
                  className="px-4 py-2 bg-red-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Students;
