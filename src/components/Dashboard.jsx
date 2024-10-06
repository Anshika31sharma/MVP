import React, { useState } from "react";
import Assesment from "./Assesment";

function Dashboard() {
  const [isNewAssessmentOpen, setIsNewAssessmentOpen] = useState(false);

  const handleNewAssessment = () => {
    setIsNewAssessmentOpen(true);
  };
  const closeNewAssessment = () => {
    setIsNewAssessmentOpen(false);
  };

  return (
    <div className="relative flex h-fit bg-gray-100">
      <div className="w-16 bg-gray-800 text-white flex flex-col items-center py-4 space-y-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
          />
        </svg>

        <div className="relative">
          <div className="w-10 h-10 rounded-full border-2 border-gray-500 flex items-center justify-center text-sm">
            0/5
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" text-red-600 size-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
          />
        </svg>
      </div>
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold">Assessments</h1>
            <p className="text-gray-600">
              View all assessments and create new ones
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700">
                SH
              </div>
              <span>Anshika Sharma</span>
            </div>
            <button
              onClick={handleNewAssessment}
              className="bg-gray-800 text-white px-4 py-2 rounded-md"
            >
              + New Assessment
            </button>
          </div>
        </div>
        <div className=" h-screen   bg-white rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal 0">
            <thead>
              <tr>
                {[
                  "Feature name",
                  "State",
                  "Risk Rank",
                  "Requirements",
                  "Open Questions",
                  "Type",
                  "Creator",
                  "Created At",
                ].map((header, index) => (
                  <th
                    key={index}
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className=" cursor-pointer ">
              {[
                {
                  name: "SAMPLE - Order Processing Feature",
                  state: "Completed",
                  riskRank: "High",
                  requirements: 10,
                  openQuestions: 10,
                  type: "Diagram",
                  creator: "Anshika Sharma",
                  createdAt: "04/10/2024",
                },
                {
                  name: "SAMPLE - Tech Spec - MVP",
                  state: "Completed",
                  riskRank: "High",
                  requirements: 9,
                  openQuestions: 7,
                  type: "Gsuite",
                  creator: "Anshika Sharma",
                  createdAt: "04/10/2024",
                },
              ].map((assessment, index) => (
                <tr key={index}>
                <td className="px-5 py-5 border-b border-gray-200 text-sm">
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>{assessment.name}</span>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {assessment.state}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {assessment.riskRank}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {assessment.requirements}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {assessment.openQuestions}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {assessment.type}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {assessment.creator}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {assessment.createdAt}
                </td>
              </tr>
              
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex  bg-white justify-between items-center mt-2 p-2">
                            <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded">Delete</button>
                            <div className="flex items-center">
                                <span className="text-gray-600 mr-2">Page Size:</span>
                                <select className="bg-white border border-gray-300 rounded px-2 py-1">
                                    <option>20</option>
                                    <option>10</option>
                                    <option>50</option>
                                </select>
                            </div>
                            <div className="flex items-center">
                                <span className="text-gray-600 mr-2">1 to 3 of 3</span>
                                <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded mr-2">&lt;</button>
                                <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded">&gt;</button>
                            </div>
      </div>
      </div>
      {isNewAssessmentOpen && (
        <>
          <Assesment />
        </>
      )}
    </div>
  );
}

export default Dashboard;
