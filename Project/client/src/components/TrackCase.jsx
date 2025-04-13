import React, { useState } from "react";
import "../TrackCase.css";

const casesData = [
  {
    id: "FIR-2024-1001",
    filedDate: "2024-01-15",
    status: "Resolved",
    summary: "Case closed with penalty for theft.",
    documents: ["FIR", "Police Report"],
    progress: 100,
  },
  {
    id: "FIR-2024-1002",
    filedDate: "2024-03-04",
    status: "In Progress",
    summary: "Ongoing investigation on property dispute.",
    documents: ["FIR"],
    progress: 60,
  },
  {
    id: "FIR-2024-1003",
    filedDate: "2024-03-25",
    status: "Pending",
    summary: "Awaiting officer assignment.",
    documents: [],
    progress: 10,
  },
  {
    id: "FIR-2024-1004",
    filedDate: "2024-02-10",
    status: "Rejected",
    summary: "Insufficient evidence, case dismissed.",
    documents: ["FIR"],
    progress: 0,
  },
];

const TrackCase = () => {
  const [searchID, setSearchID] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredCases = casesData.filter((c) => {
    const matchID = c.id.toLowerCase().includes(searchID.toLowerCase());
    const matchStatus = filter === "All" || c.status === filter;
    return matchID && matchStatus;
  });

  return (
    <div className="track-container">
      <h1>📂 Track Your Case</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter Case ID..."
          value={searchID}
          onChange={(e) => setSearchID(e.target.value)}
        />
        <button>Search</button>
      </div>

      <div className="filter-tabs">
        {["All", "Resolved", "Pending", "In Progress", "Rejected"].map((status) => (
          <button
            key={status}
            className={filter === status ? "active" : ""}
            onClick={() => setFilter(status)}
          >
            {status === "Resolved" && "✅ "}
            {status === "Pending" && "🟡 "}
            {status === "In Progress" && "⏳ "}
            {status === "Rejected" && "❌ "}
            {status}
          </button>
        ))}
      </div>

      <div className="case-list">
        {filteredCases.length === 0 ? (
          <p className="no-result">No cases found.</p>
        ) : (
          filteredCases.map((caseItem) => (
            <div key={caseItem.id} className="case-card">
              <h3>🔎 Case ID: {caseItem.id}</h3>
              <p>📅 Filed On: {caseItem.filedDate}</p>
              <p>
                📌 Status:{" "}
                <span className={`status ${caseItem.status.toLowerCase().replace(" ", "-")}`}>
                  {caseItem.status === "Resolved" && "✅ "}
                  {caseItem.status === "Pending" && "🟡 "}
                  {caseItem.status === "In Progress" && "⏳ "}
                  {caseItem.status === "Rejected" && "❌ "}
                  {caseItem.status}
                </span>
              </p>
              <p>📝 Summary: {caseItem.summary}</p>
              <p>
                📎 Documents:
                {caseItem.documents.length > 0 ? (
                  caseItem.documents.map((doc, i) => (
                    <a key={i} href="#" className="doc-link">
                      {doc}
                    </a>
                  ))
                ) : (
                  " No files uploaded"
                )}
              </p>
              <p>
                📊 Progress:
                <progress value={caseItem.progress} max="100" />
              </p>
              <button className="track-btn">View / Track</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TrackCase;
