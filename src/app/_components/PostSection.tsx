// PostSection Component
"use client";
import { useState, useEffect } from "react";
import { createPost } from "../data/actions";
import PostSubmitButton from "./PostSubmitButton";

export default function PostSection() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setErrorMessage(null);

    const result = await createPost(formData);
    if (result?.error) {
      const { formErrors, fieldErrors } = result.error;
      if (formErrors.length > 0) {
        setErrorMessage(formErrors[0]);
      }
      if (fieldErrors.post && fieldErrors.post.length > 0) {
        setErrorMessage(fieldErrors.post[0]);
      }
    } else {
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => setErrorMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  return (
    <form action={handleSubmit} className="bg-gray-900 rounded-lg p-4 shadow-lg">
      {errorMessage && (
        <div className="fixed top-0 left-0 right-0 bg-red-600 text-white text-center py-2">
          {errorMessage}
        </div>
      )}
      <div className="grid grid-rows-6 gap-2 mb-6 h-80">
        <div className="h-full row-span-5">
          <textarea
            id="post"
            name="post"
            placeholder="What's up?"
            className="block h-full w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          />
        </div>
        <div className="h-full row-span-1">
          <PostSubmitButton />
        </div>
      </div>
    </form>
  );
}
