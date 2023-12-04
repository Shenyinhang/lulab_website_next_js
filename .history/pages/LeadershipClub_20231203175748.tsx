import React from "react";
import Image from "next/image";
import "../app/globals.css"; // 引入全局样式文件
import Navbar from "@/app/title/page";
import End from "@/app/title/end";

const LeadershipClub: React.FC = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ position: "relative" }}>
          <Image src="/image2.jpg" alt="" width={1700} height={1000} />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              backgroundColor: "#BBBBBB",
              color: "#ffffff",
              padding: "10px",
              textAlign: "left",
              zIndex: 1,
            }}
          >
            <p style={{ margin: 20, fontSize: "36px", marginLeft: "320px" }}>
              THE LEADERSHIP CLUB, ORIGINATING FROM TSINGHUA UNIVERSITY
              <br /> AND LED BY PROFESSOR LU XIANGQIAN, NURTURES INNOVATION{" "}
              <br />
              AND LEADERSHIP.
            </p>
          </div>
          <div
            style={{
              position: "absolute",
              fontWeight: "800",

              backgroundColor: "#FFFFFF",
              color: "#000000",
              padding: "10px",
              marginLeft: "100px",
              textAlign: "left",
            }}
          >
            <div style={{ margin: "20px ", fontSize: "36px" }}>
              <div>
                The Leadership Club is set up by Tsinghua Professor Lu Xiangqian
                to encourage students to innovate and start businesses, broaden
                their horizons and improve their leadership. The club invites
                outstanding entrepreneurs, innovators, etc. to the club to talk
                with the students, and learns the successful experience of
                leaders in various industries in close communication. Strive to
                achieve the realm of &apos;talking with the king, winning the
                book for ten years&apos;. Organize online salons regularly to
                help participants understand industry information and clear
                career direction.
              </div>
              <div
                style={{
                  color: "black",
                  fontSize: "30px",
                  fontWeight: "500",
                  textAlign: "left",
                }}
              >
                Head of Lab, professor Lu
              </div>
            </div>
          </div>
        </div>{" "}
        <hr
          style={{
            marginBottom: "540px",
          }}
        />
        <End />
      </div>
    </>
  );
};

export default LeadershipClub;
