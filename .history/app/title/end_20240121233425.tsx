/* eslint-disable @next/next/no-img-element */
"use client";

import { Typography } from "@mui/material";
import React from "react";

const End: React.FC = () => {
  return (
    <div style={{ backgroundColor: "black", height: "30vh" }}>
      <div style={{ marginLeft: "30px", paddingTop: "20px" }}>
        <div
          style={{
            display: "flex",
          }}
        >
          <img src="/logo.png" alt="" height="50" width="50" />
          <Typography
            variant="h1"
            style={{
              marginTop: "5px",
              color: "white",
              fontSize: "5vw", // Adjust font size based on screen size
              fontWeight: "600",
              marginLeft: "25px",
            }}
          >
            Lu Lab
          </Typography>
        </div>
        <div
          style={{
            marginTop: "20px",
            position: "relative",
            textAlign: "left",
          }}
        >
          <Typography
            variant="h2"
            style={{
              color: "grey",
              fontSize: "4vw", // Adjust font size based on screen size
              fontWeight: "600",
            }}
          >
            CONTACT INFO
          </Typography>
          <div
            style={{
              color: "grey",
              fontSize: "3vw", // Adjust font size based on screen size
              fontWeight: "400",
              marginLeft: "2px",
              textAlign: "left",
            }}
          >
            <br />
            admin@lulabs.org
            <br />
            <br />
            East Brokaw Road 310-F San Jose, CA 95112 USA <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default End;
