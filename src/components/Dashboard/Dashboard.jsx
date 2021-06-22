import React, { useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { withHistory } from "slate-history";
import { logoutActions } from "../../redux/actions";
import { DraggableArea } from "react-draggable-tags";

import "./dashboard.scss";

const Dashboard = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [value, setValue] = useState(initialValue);
  const [blocks, setBlocks] = useState([]);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const arr = blocks.map((item, index) => {
    return {
      id: index + 1,
      content: item,
    };
  });
  const onAddBoxClick = () => {
    setBlocks([...blocks, value[0].children[0].text]);
    setValue(initialValue);
  };

  const onLogout = () => {
    dispatch(logoutActions(history));
  };

  return (
    <div className="dashboard-container">
      <div className="logout-div">
        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </div>

      <div className="input-content">
        <Slate editor={editor} value={value} onChange={(value) => setValue(value)}>
          <Editable
            className="input"
            placeholder="Write..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
              }
            }}
          />
        </Slate>
        <div className="add-content">
          <button onClick={onAddBoxClick} className="add-btn">
            ADD
          </button>
        </div>
      </div>
      <div className="dashboard-container">
        <DraggableArea
          tags={arr}
          render={({ tag }) => <div className="dashboard-items">{tag.content}</div>}
          onChange={(tags) => tags}
        />
      </div>
    </div>
  );
};

const initialValue = [
  {
    children: [{ text: "" }],
  },
];
export default Dashboard;
