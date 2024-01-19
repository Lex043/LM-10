import { useState } from "react";
import Image from "next/image";

const ImageComponent = ({ data }: any) => {
  const [isImageLoading, setImageLoading] = useState<boolean>(true);
  return (
    <div>
      <Image
        src={data.imageUrl}
        height={200}
        width={300}
        alt={data.name}
        onLoad={() => setImageLoading(false)}
        className={`${
          isImageLoading ? "blur" : "remove-blur"
        } w-full h-72 object-cover`}
      />
    </div>
  );
};

export default ImageComponent;
