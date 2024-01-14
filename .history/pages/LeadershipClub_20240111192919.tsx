/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Grid, Typography } from "@mui/material";
import "../app/globals.css";
import Navbar from "@/app/title/page";
import End from "@/app/title/end";

export default function LeadershipClub() {
  return (
    <>
      <Navbar />
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <img
            src="/image2.jpg"
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          component="div"
          sx={{
            position: "relative",
            backgroundColor: "#BBBBBB",
            color: "#ffffff",
            padding: 2,
            textAlign: "left",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "20px", md: "32px" }, margin: "20px" }}
          >
            THE LEADERSHIP CLUB, ORIGINATING FROM TSINGHUA UNIVERSITY
            <br /> AND LED BY PROFESSOR LU XIANGQIAN, NURTURES INNOVATION <br />
            AND LEADERSHIP.
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          component="div"
          sx={{
            position: "relative",
            fontWeight: "800",
            backgroundColor: "#FFFFFF",
            color: "#000000",
            padding: 2,
            textAlign: "left",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "18px", md: "32px" },
              margin: "20px",
              marginBottom: 0,
              fontWeight: "bold",
            }}
          >
            The Leadership Club is set up by Tsinghua Professor
            <br /> Lu Xiangqian to encourage students to innovate and
            <br /> start businesses, broaden their horizons and improve
            <br />
            their leadership. The club invites outstanding entrepreneurs,
            <br />
            innovators, etc. to the club to talk with the students, and
            <br />
            learns the successful experience of leaders in various
            <br />
            industries in close communication. Strive to achieve the <br />{" "}
            realm of &apos;talking with the king, winning the book for ten
            <br />
            years&apos;. Organize online salons regularly to help participants{" "}
            <br /> understand industry information and clear career direction.
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: "black",
              fontSize: "30px",
              fontWeight: "500",
              textAlign: "left",
            }}
          >
            Head of Lab, Professor Lu
          </Typography>
        </Grid>
      </Grid>
      <hr
        style={{
          marginBottom: "650px",
        }}
      />
      <End />
    </>
  );
}
