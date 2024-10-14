"use client";
import { useState, useEffect } from "react";
import { createPost } from "../data/actions";
import PostSubmitButton from "./PostSubmitButton";

export default function PostSection() {
  const [isExpanded, setIsExpanded] = useState(false); // For mobile expand state
  const [postContent, setPostContent] = useState(""); // Track post content
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

  // Function to update post content and character count
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostContent(e.target.value);
  };

  return (
    <div>
      {/* Error message display */}
      {errorMessage && (
        <div className="fixed top-0 left-0 right-0 bg-red-600 text-white text-center py-2">
          {errorMessage}
        </div>
      )}

      {/* Mobile View: Post Button when minimized */}
      <div className="md:hidden">
        {!isExpanded && (
          <div
            onClick={() => setIsExpanded(true)}
            className="fixed bottom-0 left-0 right-0 bg-dracula-purple text-dracula-foreground py-4 text-center cursor-pointer"
          >
            Create a Post
          </div>
        )}

        {/* Expanded Post Section on Mobile */}
        {isExpanded && (
          <form
            action={handleSubmit}
            className="fixed bottom-0 left-0 right-0 bg-dracula-background rounded-t-lg p-4 shadow-lg"
          >
            <div className="grid grid-rows-6 gap-2 mb-6 h-80">
              <div className="h-full row-span-5">
                <textarea
                  id="post"
                  name="post"
                  placeholder="What's up?"
                  value={postContent}
                  onChange={handleInputChange} // Track changes
                  className="block h-full w-full p-4 text-dracula-foreground border border-dracula-selection rounded-lg bg-dracula-background dark:text-dracula-foreground"
                />
                {/* Character counter */}
                <div className="text-right text-sm text-dracula-comment">
                  {postContent.length} / 280 characters
                </div>
              </div>
              <div className="h-full row-span-1 flex justify-between items-center">
                <PostSubmitButton />
                <button
                  type="button"
                  onClick={() => setIsExpanded(false)}
                  className="text-red-500"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        )}
      </div>

      {/* Desktop View: Always expanded */}
      <div className="hidden md:block">
        <form
          action={handleSubmit}
          className="bg-dracula-background border border-dracula-selection rounded-lg p-4"
        >
          <div className="grid grid-rows-6 gap-2 mb-6 h-100">
            <div className="h-full row-span-5">
              <textarea
                id="post"
                name="post"
                placeholder="What's up?"
                value={postContent}
                onChange={handleInputChange} // Track changes
                className="block h-full w-full p-4 text-dracula-foreground border border-dracula-selection rounded-lg bg-dracula-background dark:text-dracula-foreground"
              />
              {/* Character counter */}
              <div className="text-right text-sm text-dracula-comment ">
                {postContent.length} / 200 characters
              </div>
            </div>
            <div className="h-full row-span-1">
              <PostSubmitButton />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
