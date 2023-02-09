import * as React from "react";
import Fab from "@mui/material/Fab";
import { useNavigate } from "react-router-dom";

function GoCodiRecResult({ numberState }) {
  const navigate = useNavigate();
  let partChange = false;
  if (numberState <= 2 || numberState >= 7) {
    partChange = true;
  }

  return (
    <Fab
      variant="extended"
      onClick={() => {
        navigate("result");
      }}
      sx={{
        marginTop: 5,
        borderRadius: 3,
        border: 1,
        width: 500,
        height: 60,
        backgroundColor: "#8A37FF",
        color: "white",
        fontFamily: "NanumSquareAcb",
        fontSize: 30,
      }}
      disabled={partChange}>
      <a
        href="/"
        onClick={(event) => {
          event.preventDefault();
        }}
        style={{ color: "white" }}>
        {"코디 추천 받으러 가기"}
      </a>
    </Fab>
  );
}

export default GoCodiRecResult;
