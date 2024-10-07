import React, { useState } from "react";

function Assessment({ onSubmit }) {
  const [isFileUploadOpen, setIsFileUploadOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDiagramOpen, setIsDiagramOpen] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const [selectedDiagram, setSelectedDiagram] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredImages, setFilteredImages] = useState([]);
  const [featureName, setFeatureName] = useState("");

  const images = [
    {
      id: "image1",
      name: "Random Diagram 1",
      src: "https://via.placeholder.com/150",
    },
    {
      id: "image2",
      name: "Random Diagram 2",
      src: "https://via.placeholder.com/150",
    },
  ];

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query) {
      const filtered = images.filter((image) =>
        image.name.toLowerCase().includes(query)
      );
      setFilteredImages(filtered);
    } else {
      setFilteredImages(images);
    }
  };

  const handleDiagramSubmit = () => {
    if (selectedDiagram && featureName.trim() !== "") {
      const selectedImage = images.find((img) => img.id === selectedDiagram);
      const newAssessment = {
        featureName: featureName,
        state: "In Progress",
        riskRank: "Low",
        requirements: `${selectedImage.name}`,
        openQuestions: "None",
        type: "Diagram Upload",
        creator: "Anshika Sharma",
        createdAt: new Date().toLocaleString(),
      };
      onSubmit(newAssessment);
      closeAllModals();
    }
  };

  const handleSearchClick = () => {
    setShowImages(true);
  };

  const handleFileUploadClick = () => {
    setIsFileUploadOpen(true);
  };

  const handleDiagramUpload = () => {
    setIsDiagramOpen(true);
  };

  const closeAllModals = () => {
    setIsFileUploadOpen(false);
    setIsDiagramOpen(false);
    setFeatureName("");
    setSelectedDiagram(null);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    if (selectedFile) {
      const newAssessment = {
        featureName: selectedFile.name,
        state: "In Progress",
        riskRank: "Low",
        requirements: "Uploaded file",
        openQuestions: "None",
        type: "File Upload",
        creator: "Anshika Sharma",
        createdAt: new Date().toLocaleString(),
      };
      onSubmit(newAssessment);
      closeAllModals();
    }
  };

  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-50  flex justify-center items-center p-4 md:p-0">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <h2 className="text-xl font-semibold">Start a New Assessment</h2>
            <i
              className="fas fa-times cursor-pointer"
              onClick={closeAllModals}
            ></i>
          </div>

          <div className="text-center mb-4">
            <p className="text-lg font-medium">Choose Assessment Type:</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              className="border rounded-lg p-4 flex flex-col items-center cursor-pointer hover:bg-gray-100"
              onClick={handleFileUploadClick}
            >
              <i className="fas fa-upload text-2xl mb-2"></i>
              <span className="font-medium">File Upload</span>
            </div>
            <div className="border rounded-lg p-4 flex flex-col items-center cursor-pointer hover:bg-gray-100">
              <i className="fas fa-file-alt text-2xl mb-2"></i>
              <span className="font-medium">GSuite</span>
            </div>
            <div
              className="border rounded-lg p-4 flex flex-col items-center cursor-pointer hover:bg-gray-100"
              onClick={handleDiagramUpload}
            >
              <i className="fas fa-project-diagram text-2xl mb-2"></i>
              <span className="font-medium">Diagram</span>
            </div>
            <div className="border rounded-lg p-4 flex flex-col items-center cursor-pointer hover:bg-gray-100">
              <i className="fas fa-tasks text-2xl mb-2"></i>
              <span className="font-medium">JIRA</span>
            </div>
          </div>

          {isFileUploadOpen && (
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center p-4 md:p-0">
              <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
                <h2 className="text-xl font-semibold mb-4">File Upload</h2>
                <div className="border-2 border-dashed border-gray-300 rounded p-6 text-center">
                  <i className="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-2"></i>
                  <p className="text-gray-500">
                    Drag & drop files here, or{" "}
                    <span className="text-blue-500 cursor-pointer">browse</span>{" "}
                    to upload
                  </p>
                  <input
                    type="file"
                    className="mt-4"
                    onChange={handleFileChange}
                  />
                </div>
                {selectedFile && (
                  <p className="mt-2 text-green-500">
                    Selected file: {selectedFile.name}
                  </p>
                )}
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded mt-4 ml-2"
                  onClick={closeAllModals}
                >
                  Close
                </button>
              </div>
            </div>
          )}
          {isDiagramOpen && (
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center p-4 md:p-0">
              <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
                <h2 className="text-xl font-semibold mb-4">Diagram Upload</h2>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    Feature Name: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={featureName}
                    onChange={(e) => setFeatureName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    Search for a Diagram:
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg"
                    placeholder="Type to search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </div>
                {filteredImages.length > 0 && (
                  <div className="mb-4">
                    <p className="text-gray-700 font-medium mb-2">
                      Choose a Diagram:
                    </p>
                    <div className="flex space-x-4 overflow-auto">
                      {filteredImages.map((image) => (
                        <div
                          key={image.id}
                          className={`border-2 p-2 cursor-pointer ${
                            selectedDiagram === image.id
                              ? "border-blue-500"
                              : "border-gray-300"
                          }`}
                          onClick={() => setSelectedDiagram(image.id)}
                        >
                          <img
                            src={image.src}
                            alt={image.name}
                            className="w-24 h-24 object-cover"
                          />
                          <p className="text-center">{image.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                  onClick={handleDiagramSubmit}
                >
                  Submit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded mt-4 ml-2"
                  onClick={closeAllModals}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Assessment;
