import React, { useState } from "react";

function Assesment() {
  const [isFileUploadOpen, setIsFileUploadOpen] = useState(false);
  const [isDiagramOpen, setIsDiagramOpen] = useState(false);

  const handleFileUploadClick = () => {
    setIsFileUploadOpen(true);
  };

  const handleDiagramUpload = () => {
    setIsDiagramOpen(true);
  };
  const closeAllModals = () => {
    setIsFileUploadOpen(false);
    setIsDiagramOpen(false);
  };

  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg p-6 w-3/4">
          <div>
            <div className="flex justify-between items-center border-b pb-4 mb-4">
              <h2 className="text-xl font-semibold">Start a New Assessment</h2>
              <i
                className="fas fa-times cursor-pointer"
                onClick={closeAllModals}
              ></i>
            </div>
            <div className="flex justify-center items-center mb-6">
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full">
                  1
                </div>
                <span className="ml-2 text-blue-500">Step 1</span>
              </div>
              <div className="mx-4 border-t border-gray-300 flex-grow"></div>
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center bg-gray-300 text-gray-500 rounded-full">
                  2
                </div>
                <span className="ml-2 text-gray-500">Step 2</span>
              </div>
            </div>
            <div className="text-center mb-4">
              <p className="text-lg font-medium">Choose Assessment Type:</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
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
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white rounded-lg shadow-lg p-6 w-3/4 max-w-2xl">
                  <h2 className="text-xl font-semibold mb-4">File Upload</h2>
                  <p className="mb-4">This is the File Upload section.</p>
                  <div className="border-2 border-dashed border-gray-300 rounded p-6 text-center">
                    <i className="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-2"></i>
                    <p className="text-gray-500">
                      Drag & drop files here, or{" "}
                      <span className="text-blue-500 cursor-pointer">
                        browse
                      </span>{" "}
                      to upload
                    </p>
                  </div>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded mt-4"
                    onClick={closeAllModals}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
            {isDiagramOpen && (
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white rounded-lg shadow-lg p-6 w-3/4 max-w-2xl">
                  <h2 className="text-xl font-semibold mb-4">
                    Diagram Assessment
                  </h2>
                  <div className="border-2 border-dashed border-gray-300 rounded p-6 text-center">
                    <i className="fas fa-project-diagram text-4xl text-gray-400 mb-2"></i>
                    <p className="text-gray-500">
                      You can create or upload a diagram here.
                    </p>
                  </div>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded mt-4"
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
    </div>
  );
}

export default Assesment;
