/* eslint-disable @next/next/no-img-element */
"use client";
import { Image } from "@nextui-org/react";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import App from "../title/page";
import End from "../title/end";
import { Grid, Typography } from "@mui/material";

export default function About() {
  return (
    <>
      <App />
      <Grid>
        <img
          src="/image2.jpg"
          alt=""
          style={{
            width: "100vw",
            height: "50vw",
          }}
        />
      </Grid>
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
        }}
      >
        <Typography
          variant="h1"
          style={{ fontSize: "4vw", fontWeight: "bold" }}
        >
          The New Education
        </Typography>
      </div>
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
        }}
      >
        <Typography
          variant="h2"
          style={{ fontSize: "3vw", fontWeight: "normal" }}
        >
          in AI age
        </Typography>
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
        }}
      >
        <Typography
          variant="h3"
          style={{ fontSize: "2.4vw", fontWeight: "normal" }}
        >
          All work and no play makes Jack a dull boy
        </Typography>
      </div>

      <div
        style={{
          height: "800px",
          width: "100%",
          backgroundColor: "white",
          textAlign: "center",
          position: "absolute",
          top: "82%",
          paddingBottom: "50px",
        }}
      >
        <Typography
          variant="h1"
          style={{ fontSize: "3vw", fontWeight: "bold", color: "#40A850" }}
        >
          Welcome From the Head of Lab
        </Typography>
        <div
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "#DDDDDD",
            textAlign: "center",
            padding: "10px",
          }}
        >
          <Grid>
            <img
              src="/LuXiangqian.png"
              alt=""
              style={{
                width: "80%",
                height: "auto",
                margin: "0 auto",
                display: "block",
              }}
            />
          </Grid>
          <div
            style={{
              color: "black",
              xs: { xs: "14px", md: "18px" },
              fontWeight: "400",
              textAlign: "left",
              marginTop: "10px",
            }}
          >
            <div
              style={{
                color: "black",
                fontSize: { xs: "16px", md: "20px" },
                fontWeight: "800",
                marginLeft: "0px",
                textAlign: "left",
              }}
            >
              Thank you for your interest in Lu Lab!
            </div>
            <br />
            So much has been accomplished since Lu Lab was founded in 1994. Our
            lab has grown in such tremendous ways, but I am so proud that our
            mission and our unique character have remained firmly in place.
            <br />
            <br />
            I invite you to explore our website, discover more about our
            worldwide learning community, and see what makes the Lu Lab
            experience so extraordinary.
            <br />
            <br />
            -Lewis X. Lu, Ph.D.
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "45px",
              color: "#40A850",
              textAlign: "center",
              marginTop: "40px",
            }}
          >
            Lu Lab Tuition Standard
          </div>
          <hr
            style={{
              border: "none",
              borderBottom: "1px solid black",

              width: "70%",
              margin: "auto",
              marginTop: "40px",
            }}
          />
          <div
            style={{
              color: "black",
              fontSize: "20px",
              fontWeight: "500",
              marginTop: "20px",
              textAlign: "center",
              textIndent: "-55px",
            }}
          >
            TYPE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INDIVIDUAL
            MEMBER(ADULT)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FAMILY
            MEMBER(MINOR)
          </div>
          <hr
            style={{
              border: "none",
              borderBottom: "1px solid black",

              width: "70%",
              margin: "auto",
              marginTop: "20px",
            }}
          />
          <div
            style={{
              color: "black",
              fontSize: "20px",
              fontWeight: "500",
              marginTop: "20px",
              textAlign: "center",
              textIndent: "-200px",
            }}
          >
            INDUSTRIAL
            GRADE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            ¥38,000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            ¥76,000
          </div>
          <hr
            style={{
              border: "none",
              borderBottom: "1px solid black",

              width: "70%",
              margin: "auto",
              marginTop: "20px",
            }}
          />
          <div
            style={{
              color: "black",
              fontSize: "20px",
              fontWeight: "500",
              marginTop: "20px",
              textAlign: "center",
              textIndent: "-195px",
            }}
          >
            METAVERSE
            GRADE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            ¥19,000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            ¥38,000
          </div>
          <hr
            style={{
              border: "none",
              borderBottom: "1px solid black",

              width: "70%",
              margin: "auto",
              marginTop: "20px",
              marginBottom: "50px",
            }}
          />
        </div>
        <End />
      </div>
    </>
  );
}
