"use client";
import TinyEditor from "@/components/TinyEditor";
import Title from "@/components/Title";
import { useParams } from "next/navigation";

const AddQuestions = () => {
  const { type } = useParams<{ type: string }>();
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <Title>Add {type} Question</Title>
      <TinyEditor />
      {type === "mcq" && (
        <div className="flex flex-wrap flex-col">
          {["a","b","c","d","e"].map((option) => (
            <div key={option} className="py-2 flex-1">
              <label className="block mb-2">Option: {option}</label>
              <TinyEditor height={150} />
            </div>
          ))}
        </div>
      )}
      {type === "short" && (
        <div className="py-2">
          <label className="block mb-2">Short Answer</label>
          <input className="input input-info" />
        </div>
      )}
      <button className="btn btn-primary my-2" type="submit">Submit</button>
    </div>
  );
};

export default AddQuestions;
