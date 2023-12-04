import React from "react";
import Image from "next/image";
import "../app/globals.css"; // 引入全局样式文件
import Navbar from "@/app/title/page";
import End from "@/app/title/end";

const MarketingClub: React.FC = () => {
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
          <Image src="/Marketing.jpg" alt="" width={1700} height={1000} />
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
              THIS IS A CRADLE FOR A GROUP OF CHILDREN&apos;S PROJECT
              COLLISIONS.
            </p>
          </div>
          <div
            style={{
              position: "absolute",
              fontWeight: "800",

              backgroundColor: "#FFFFFF",
              color: "#000000",
              padding: "10px",
              marginLeft: "300px",
              textAlign: "left",
            }}
          >
            <div style={{ margin: "20px ", fontSize: "36px" }}>
              <div>
                This club offers more than just programming;
                <br />
                it provides a range of skill development opportunities.
                <br />
                These include, but are not limited to, honing fundamental
                <br />
                search skills, enhancing communication abilities,
                <br />
                nurturing leadership qualities, and more.
                <br />
                Through hands-on experiences, members progressively
                <br />
                master the essential skills needed for project execution.
                <br />
                This prepares children for further personal development
                <br />
                as they aspire to excel in their future endeavors.
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
            marginBottom: "580px",
          }}
        />
        <End />
      </div>
    </>
  );
};

export default MarketingClub;
