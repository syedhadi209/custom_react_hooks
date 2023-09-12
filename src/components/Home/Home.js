import React from "react";
import "./Home.css";
import useFetchTodos from "../../hooks/useFetchTodos";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Home = () => {
  const { data } = useFetchTodos("https://jsonplaceholder.typicode.com/users");
  return (
    <div
      style={{
        backgroundColor: "gray",
        width: "100%",
        height: "100vh",
      }}
    >
      {data &&
        data.map((user, index) => {
          return (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{user.username}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{user.name}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
    </div>
  );
};

export default Home;
