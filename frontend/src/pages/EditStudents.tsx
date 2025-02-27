import { useParams } from "react-router-dom";

const EditStudent = () => {
  const { id } = useParams();
  return <h1 className="text-2xl">Edit Student {id}</h1>;
};

export default EditStudent;
