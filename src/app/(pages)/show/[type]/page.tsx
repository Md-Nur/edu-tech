"use client";
import Title from "@/components/Title";
import { useParams } from "next/navigation";

const AddQuestions = () => {
  const { type } = useParams<{ type: string }>();
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <Title>All {type} Questions</Title>
    </div>
  );
};

export default AddQuestions;
