import React, { useReducer } from "react";

const initialState = {
  isOn: false,
};

function lightReducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        isOn: !state.isOn,
      };
    default:
      return state;
  }
}

export function Light({ id }) {
  const [state, dispatch] = useReducer(lightReducer, initialState);

  const onToggle = () => {
    dispatch({ type: "TOGGLE" });
  };

  return (
    <button
      data-testid={`light-${id}`}
      id={id}
      style={{
        border: "solid 1px gray",
        padding: "2rem",
        fontSize: "3rem",
        background: state.isOn ? "#eee" : "#444",
      }}
      onClick={onToggle}
    >
      {state.isOn ? "💡" : "⚫️"}
    </button>
  );
}
