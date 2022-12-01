import BG1 from "../assets/img/bg-1.jpg";
import BG2 from "../assets/img/bg-2.jpg";
import BG3 from "../assets/img/bg-3.png";
import BG4 from "../assets/img/bg-4.jpg";
import BG5 from "../assets/img/bg-5.jpg";
import BG7 from "../assets/img/bg-7.jpg";

const getRandomElement = () => {
  const randomBackgroundImage = [
    { vale: 3, Image: BG3 },
    { vale: 4, Image: BG4 },
    { vale: 5, Image: BG5 },
    { value: 7, Image: BG7 },
  ];

  return randomBackgroundImage[
    Math.floor(Math.random() * randomBackgroundImage.length)
  ];
};

export { getRandomElement };
