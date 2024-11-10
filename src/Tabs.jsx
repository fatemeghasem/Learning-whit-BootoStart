import { useState } from 'react';

const contentData = [
  { id: 1, title: <h3>content1</h3>, content: <p>...........I’d rather regret the things I’ve done than regret the things I haven’t done..........</p> },
  { id: 2, title: <h3>content2</h3>, content: <p>...........Without hustle, talent will only carry you so far..........</p> },
  { id: 3, title: <h3>content3</h3>, content: <p>...........When the going gets tough, the tough get going..........</p> },
  { id: 4, title: <h3>content4</h3>, content: <p>...........Decide where you want to be and don’t stop until you get there..........</p> },
];

function Tabs() {
  const [currentContent, setCurrentContent] = useState({ title: "", content: "" });
  const [activeTab, setActiveTab] = useState(null);

  const handleButtonClick = (id) => {
    const selectedContent = contentData.find(item => item.id === id);
    if (selectedContent) {
      setCurrentContent(selectedContent);
      setActiveTab(id);
    }
  };

  return (
    <>
      {contentData.map(item => (
        <button
        key={item.id}
          style={{
            color: activeTab === item.id ? "yellow" : "#fff",
            borderBottom: activeTab === item.id ? "1px solid" :"none",
            border: "none",
            padding: "10px",
            background: "#66d3fe",
            marginRight: "20px",
            cursor: "pointer",
          }}
          onClick={() => handleButtonClick(item.id)}
        >
          Tab{item.id}
        </button>
      ))}
      <div style={{ background: "#aa89f5", height: "600px" }}>
        <div style={{ margin: "20px", padding: "20px", color: "#fff" }}>
          {currentContent.title}
          {currentContent.content}
        </div>
      </div>
    </>
  );
}

export default Tabs;