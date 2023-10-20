import NextImage from "next/image";
import { chakra } from "@chakra-ui/react";

const CustomNextImage = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      "width",
      "w",
      "h",
      "height",
      "src",
      "alt",
      "quality",
      "placeholder",
      "blurDataURL",
      "loader ",
    ].includes(prop),
});

export default CustomNextImage;