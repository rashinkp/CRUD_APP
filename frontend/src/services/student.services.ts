import api from '../utils/api';

export const getStudents = async () => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
      console.error("Error fetching students:", error);
      throw error;
  }
}


export const addStudent = async (student:any) => {
  try {
    const response = await api.post('/', student);
    return response.data;
  } catch (error) {
      console.error("Error adding students:", error);
      throw error;
  }
}


export const editStudent = async (id: string, student: any) => {
  try {
    const response = await api.put(`/${id}`, student);
    return response.data;
  } catch (error) {
      console.error("Error updating students:", error);
      throw error;
  }
}


export const deleteStudent = async (id: string) => {
  try {
    const response = await api.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting student:", error);
    throw error;
  }
};