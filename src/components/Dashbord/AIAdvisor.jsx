import React, { useState } from "react";
import axios from "axios";
import gsap from "gsap";

const AIAdvisor = () => {
  const [imageFile, setImageFile] = useState(null);
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);

  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImageFile(file);
  };


  const handleSendToAI = async () => {
    if (!imageFile){ 
      return alert("Please upload a crop image.");
    }
    setLoading(true);
    const formData = new FormData();
    formData.append("image", imageFile);

    try {

      const response = await axios.post(
        "https://your-ai-api-endpoint.com/analyze",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer YOUR_API_KEY`, 
          },
        }
      );

      console.log(response.data)
      setAdvice(response.data.advice);
      gsap.from("#advice-text", { opacity: 0, y: 20, duration: 0.8, ease: "power2.out" });

    } catch (error) {
      console.error("Error sending image to AI:", error);
      setAdvice("AI analysis failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col gap-5">
      <h2 className="text-2xl font-bold text-green-800 mb-3">🤖 AI Crop Advisor</h2>
      <p className="text-gray-700 mb-4">
        Upload a photo of your crop, and AI will provide growth tips and recommendations.
      </p>

      <div className="flex flex-col gap-3">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="px-4 py-2 border rounded-lg"
        />
        {imageFile && (
          <img
            src={URL.createObjectURL(imageFile)}
            alt="Crop Preview"
            className="h-40 object-contain mt-2 rounded-lg"
          />
        )}

        <button
          onClick={handleSendToAI}
          className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition-all mt-2"
        >
          {loading ? "Analyzing..." : "Analyze Crop"}
        </button>
      </div>

      {advice && (
        <div
          id="advice-text"
          className="mt-3 p-4 bg-green-50 rounded-lg text-green-800 font-medium"
        >
          {advice}
        </div>
      )}
    </div>
  );
};

export default AIAdvisor;
