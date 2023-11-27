"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Home: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const imageUrls = ["image3.jpg", "xueyuan.jpg", "image1.jpg"];
    setImages(imageUrls);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ position: "relative" }}>
        {images.length > 0 && (
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            style={{ width: "1720px", height: "750px" }}
          />
        )}
        <div
          style={{
            position: "absolute",
            top: "375px",
            left: "0",
            right: "0",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button
            onClick={showPreviousImage}
            style={{ color: "green", fontWeight: "bold" }}
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              style={{ fontSize: "36px" }}
            />
          </button>
          <button
            onClick={showNextImage}
            style={{ color: "green", fontWeight: "bold" }}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ fontSize: "36px" }}
            />
          </button>
        </div>
      </div>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "45px",
          color: "#000000",
          textAlign: "center",
          marginTop: "40px",
          marginBottom: "40px",
        }}
      >
        Welcome to Lu Lab
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <div style={{ marginRight: "20px" }}>
          <Image
            src="/Overview.png"
            alt=""
            width={25}
            height={35}
            style={{ marginRight: "500px" }}
          />
          <p
            style={{
              color: "black",
              fontSize: "18px",
              fontWeight: "400",
              marginLeft: "50px",
              textAlign: "left",
            }}
          >
            In 1994, Professor Lu Xiangqian
            <br /> established a laboratory to test
            <br />
            his teaching methods, convinced that
            <br /> the Internet would change the world. <br />
          </p>
        </div>
        <div style={{ marginRight: "20px" }}>
          <Image
            src="/Edu.png"
            alt=""
            width={40}
            height={40}
            style={{ marginRight: "500px" }}
          />

          <p
            style={{
              color: "black",
              fontSize: "18px",
              fontWeight: "400",
              marginLeft: "50px",
              textAlign: "left",
            }}
          >
            It is better to learn theory than to learn cases;
            <br /> It is better to learn cases than to make cases;
            <br /> It is better to make a case than to play a case;
            <br /> One person is not as good as several;
            <br /> A few people to play is not as good as gathering
            <br /> the world&apos;s elite masters to play in a group.
          </p>
        </div>
        <div style={{ marginRight: "20px" }}>
          <Image
            src="/Person.png"
            alt=""
            width={35}
            height={35}
            style={{ marginRight: "400px" }}
          />
          <p
            style={{
              color: "black",
              fontSize: "18px",
              fontWeight: "400",
              marginLeft: "50px",
              textAlign: "left",
            }}
          >
            Students are divided into different clubs
            <br /> according to their age and interests.
            <br /> Respect students&apos; hobbiesand provide.
            <br /> development spacefor students&apos; growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
