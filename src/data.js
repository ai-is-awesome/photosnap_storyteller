import img from "./assets/Home/desktop/create-and-share.jpg";
import img2 from "./assets/Home/desktop/beautiful-stories.jpg";
import img3 from "./assets/Home/desktop/designed-for-everyone.jpg";

const data = {
  storyData: [],
  photoCardData: [
    {
      textSide: "left",
      textTheme: "dark",
      description:
        "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
      title: "CREATE AND SHARE YOUR PHOTO STORIES.",
      img: img,
    },
    {
      textSide: "right",
      textTheme: "light",
      description:
        "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
      title: "CREATE AND SHARE YOUR PHOTO STORIES.",
      img: img2,
    },
    {
      textSide: "left",
      textTheme: "dark",
      description:
        "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
      title: "CREATE AND SHARE YOUR PHOTO STORIES.",
      img: img3,
    },
  ],
  pricingCardsData: [
    {
      title: "Basic",
      description:
        "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
      pricePerMonth: "19.00",
      pricePerYear: "200.00",
      theme: "light",
    },
    {
      title: "Pro",
      description:
        "More advanced features available. Recommended for photography veterans and professionals.",
      pricePerMonth: "39.00",
      pricePerYear: "400.00",
      theme: "dark",
    },
    {
      title: "Business",
      description:
        "Additional features available such as more detailed metrics. Recommended for business owners.",
      pricePerMonth: "99.00",
      pricePerYear: "1000.00",
      theme: "light",
    },
  ],
};

export default data;
