import Image from "next/image";
import image2 from "public/image2.jpg";
export default function About() {
  return (
    <div>
      <h1>Hello, Dashboard Page!</h1>
      <Image src={image2} alt="" width={1800} height={200} />
    </div>
  );
}
