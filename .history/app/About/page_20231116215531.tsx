import Image from "next/image";
import image2 from "public/image2.jpg";

export default function About() {
  return (
    <div>
      <div style={{ height: "1000px", width: "1500px" }}>
        <Image src={image2} alt="" style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
  );
}
