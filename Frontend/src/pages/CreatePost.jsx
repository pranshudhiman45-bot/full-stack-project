import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);

  const handleFile = (file) => {
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const baseUrl = process.env.BASE_URL;
    axios
      .post(`${baseUrl}/create-post`, formData)
      .then((res) => {
        navigate("/post");
      })
      .catch((err) => {
        console.log(err);
        alert("Error Creating post");
      });
  };

  return (
    <section className="min-h-screen bg-linear-to-br from-blue-50 via-white to-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Create Post
        </h1>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Upload Image
            </label>

            <div
              className="relative flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 cursor-pointer 
              hover:border-blue-500 hover:bg-blue-50 transition"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                handleFile(e.dataTransfer.files[0]);
              }}
            >
              <span className="text-sm text-gray-500">
                Drag & drop or click to upload
              </span>

              <input
                type="file"
                name="image"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={(e) => handleFile(e.target.files[0])}
              />
            </div>

            {preview && (
              <div className="relative mt-4">
                <img
                  src={preview}
                  alt="preview"
                  className="w-full h-52 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => setPreview(null)}
                  className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 rounded-md text-xs hover:bg-black"
                >
                  Remove
                </button>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Caption
            </label>

            <textarea
              name="caption"
              rows="2"
              placeholder="Write your caption..."
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-linear-to-r from-blue-500 to-blue-600 
            text-white py-2.5 rounded-lg font-semibold shadow-md 
            hover:shadow-lg hover:scale-[1.02] active:scale-95 
            transition duration-200"
          >
            Post
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;
