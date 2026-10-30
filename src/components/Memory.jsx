
import { useState } from "react";
import "./Memory.css";

const nodes = [
  { id: 1, x: 50, y: 20, type: "core", label: "Revenue Growth AI" },
  { id: 2, x: 25, y: 35, type: "doc", label: "Q3 Roadmap" },
  { id: 3, x: 70, y: 38, type: "entity", label: "Acme Corp" },
  { id: 4, x: 42, y: 55, type: "doc", label: "Revenue Report" },
  { id: 5, x: 80, y: 65, type: "entity", label: "Marketing Budget" },
  { id: 6, x: 18, y: 72, type: "entity", label: "Customer Insights" },
  { id: 7, x: 57, y: 82, type: "doc", label: "Strategy Document" },
  { id: 8, x: 35, y: 88, type: "entity", label: "Sales Forecast" },
  { id: 9, x: 88, y: 22, type: "doc", label: "Project Plan" },
  { id: 10, x: 12, y: 18, type: "entity", label: "Product Strategy" },
];

const connections = [
  [1, 2], [1, 3], [1, 4], [1, 5], [1, 7], [1, 9],
  [2, 4], [2, 6], [3, 5], [3, 9], [4, 7], [4, 8],
  [5, 7], [6, 8], [7, 8], [2, 10], [1, 10],
];

const nodeDetails = {
  1: {
    type: "Core Concept",
    title: "Revenue Growth AI",
    confidence: "98",
    importance: "Critical",
    extracted: "Oct 28, 2026",
    agent: "Strategy_Analyzer_v1",
    freshness: "Up to date",
  },
  2: {
    type: "Document Node",
    title: "Project_Q3_Roadmap.pdf",
    confidence: "94",
    importance: "High",
    extracted: "Oct 24, 2026",
    agent: "Data_Harvester_v2",
    freshness: "Up to date",
  },
  3: {
    type: "Entity Node",
    title: "Acme Corp Merger",
    confidence: "91",
    importance: "High",
    extracted: "Oct 22, 2026",
    agent: "Entity_Extractor",
    freshness: "Recently updated",
  },
};

function Memory() {
  const [selectedId, setSelectedId] = useState(2);
  const [showInspector, setShowInspector] = useState(true);
  const [entityFilter, setEntityFilter] = useState("All Models");
  const [importanceFilter, setImportanceFilter] = useState("> 80%");
  const [timeFilter, setTimeFilter] = useState("Last 30 Days");

  const selectedNode = nodes.find((node) => node.id === selectedId);
  const details = nodeDetails[selectedId] || {
    type: selectedNode?.type === "doc" ? "Document Node" : "Entity Node",
    title: selectedNode?.label || "Memory Node",
    confidence: "88",
    importance: "Medium",
    extracted: "Oct 20, 2026",
    agent: "Memory_Processor",
    freshness: "Up to date",
  };

  const handleAction = (action) => {
    alert(`${action} feature will be available soon.`);
  };

  return (
    <main className="memory-page">
      <div className="memory-filter-bar">
        <div className="memory-filter-title">
          <span className="material-symbols-outlined">filter_list</span>
          <strong>Filters</strong>
        </div>

        <label>
          Entity Type:
          <select value={entityFilter} onChange={(e) => setEntityFilter(e.target.value)}>
            <option>All Models</option>
            <option>Core Concepts</option>
            <option>Documents</option>
            <option>Entities</option>
          </select>
        </label>

        <label>
          Importance:
          <select value={importanceFilter} onChange={(e) => setImportanceFilter(e.target.value)}>
            <option>&gt; 80%</option>
            <option>&gt; 60%</option>
            <option>All</option>
          </select>
        </label>

        <label>
          Timeframe:
          <select value={timeFilter} onChange={(e) => setTimeFilter(e.target.value)}>
            <option>Last 30 Days</option>
            <option>Last 7 Days</option>
            <option>Last 90 Days</option>
            <option>All Time</option>
          </select>
        </label>
      </div>

      <section className="memory-graph-area">
        <div className="memory-graph-canvas">
          <div className="memory-graph-caption">
            <span>Memory Network</span>
            <small>Explore relationships between concepts, documents and entities</small>
          </div>

          <svg
            className="memory-network-svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-label="Interactive memory network graph"
          >
            {connections.map(([from, to]) => {
              const source = nodes.find((node) => node.id === from);
              const target = nodes.find((node) => node.id === to);

              return (
                <line
                  key={`${from}-${to}`}
                  x1={source.x}
                  y1={source.y}
                  x2={target.x}
                  y2={target.y}
                  className={
                    selectedId === from || selectedId === to
                      ? "memory-edge active"
                      : "memory-edge"
                  }
                />
              );
            })}
          </svg>

          {nodes.map((node) => (
            <button
              key={node.id}
              className={`memory-node ${node.type} ${selectedId === node.id ? "selected" : ""}`}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              title={node.label}
              onClick={() => {
                setSelectedId(node.id);
                setShowInspector(true);
              }}
            />
          ))}

          <div className="memory-legend">
            <span><i className="core-dot" /> Core Concept</span>
            <span><i className="doc-dot" /> Document / Source</span>
            <span><i className="entity-dot" /> Extracted Entity</span>
          </div>
        </div>

        <aside className={`memory-inspector ${showInspector ? "visible" : "hidden"}`}>
          <div className="memory-inspector-header">
            <div>
              <span className="memory-node-type">
                <span className="material-symbols-outlined">description</span>
                {details.type}
              </span>
              <h2>{details.title}</h2>
            </div>

            <button
              className="memory-close"
              onClick={() => setShowInspector(false)}
              aria-label="Close inspector"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className="memory-inspector-content">
            <div className="memory-metrics">
              <div>
                <span>Confidence</span>
                <strong>{details.confidence}<small>%</small></strong>
              </div>
              <div>
                <span>Importance</span>
                <strong className="importance-value">{details.importance}</strong>
              </div>
            </div>

            <section className="memory-detail-section">
              <h3>Metadata</h3>
              <div><span>Extracted</span><strong>{details.extracted}</strong></div>
              <div><span>Source Agent</span><strong>{details.agent}</strong></div>
              <div>
                <span>Freshness</span>
                <strong className="freshness-value">
                  <i /> {details.freshness}
                </strong>
              </div>
            </section>

            <section className="memory-detail-section">
              <h3>Strongest Connections</h3>

              <button className="memory-connection" onClick={() => setSelectedId(1)}>
                <span>
                  <strong>Q3 Revenue Projections</strong>
                  <small>Extracted financial entity mapping.</small>
                </span>
                <b>0.89</b>
              </button>

              <button className="memory-connection" onClick={() => setSelectedId(5)}>
                <span>
                  <strong>Marketing Budget Allocation</strong>
                  <small>Semantic link via strategy themes.</small>
                </span>
                <b>0.72</b>
              </button>
            </section>

            <div className="memory-inspector-actions">
              <button onClick={() => handleAction("Explore Path")}>Explore Path</button>
              <button onClick={() => handleAction("Open Source")}>Open Source</button>
            </div>
          </div>
        </aside>

        {!showInspector && (
          <button
            className="memory-open-inspector"
            onClick={() => setShowInspector(true)}
          >
            <span className="material-symbols-outlined">info</span>
            Show Details
          </button>
        )}
      </section>
    </main>
  );
}

export default Memory;
