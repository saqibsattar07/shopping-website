import Image from "next/image";
import { Button } from "./ui/button";

const OurStory = () => {
  return (
    <div className="container pt-20 pb-36 px-4 lg:px-10 grid lg:grid-cols-2 gap-10">
      <div>
        <div className="relative h-fit w-fit">
          <Image
            src="/image-4.jpg"
            alt="a picture of house"
            width={400}
            height={400}
            className="object-cover"
          />
          <Image
            src="/image-3.jpg"
            alt="a picture of house"
            width={300}
            height={300}
            className="absolute top-1/2 left-1/2 border-4 object-cover hidden lg:block"
          />
        </div>
      </div>
      <div>
        <p className="font-semibold mb-1">Our Story</p>
        <p className="text-3xl mb-2">Efficiency. Transparency. Control.</p>
        <p className="text-muted-foreground mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, et
          quia unde minima assumenda facere accusantium eaque explicabo odio
          quod est suscipit quo maiores, error recusandae ipsum, nobis rerum
          eius. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Delectus, et quia unde minima assumenda facere accusantium eaque
          explicabo odio quod est suscipit quo maiores, error recusandae ipsum,
          nobis rerum eius.
        </p>
        <Button>Read More</Button>
      </div>
    </div>
  );
};

export default OurStory;
