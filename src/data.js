//USER STORY IMPORT
import mImg0 from "./assets/Stories/mobile/moon-of-appalacia.jpg";
import mImg1 from "./assets/Stories/mobile/mountains.jpg";
import mImg2 from "./assets/Stories/mobile/18-days-voyage.jpg";
import mImg3 from "./assets/Stories/mobile/cityscapes.jpg";
import mImg4 from "./assets/Stories/mobile/architecturals.jpg";
import mImg5 from "./assets/Stories/mobile/world-tour.jpg";
import mImg6 from "./assets/Stories/mobile/unforeseen-corners.jpg";
import mImg7 from "./assets/Stories/mobile/king-on-africa.jpg";
import mImg8 from "./assets/Stories/mobile/trip-to-nowhere.jpg";
import mImg9 from "./assets/Stories/mobile/rage-of-the-sea.jpg";
import mImg10 from "./assets/Stories/mobile/running-free.jpg";
import mImg11 from "./assets/Stories/mobile/behind-the-waves.jpg";
import mImg12 from "./assets/Stories/mobile/calm-waters.jpg";
import mImg13 from "./assets/Stories/mobile/milky-way.jpg";
import mImg14 from "./assets/Stories/mobile/dark-forest.jpg";
import mImg15 from "./assets/Stories/mobile/land-of-dreams.jpg";
import mImg16 from "./assets/Stories/mobile/somwarpet.jpg";

//desktop

import dImg0 from "./assets/Stories/desktop/moon-of-appalacia.jpg";
import dImg1 from "./assets/Stories/desktop/mountains.jpg";
import dImg2 from "./assets/Stories/desktop/18-days-voyage.jpg";
import dImg3 from "./assets/Stories/desktop/cityscapes.jpg";
import dImg4 from "./assets/Stories/desktop/architecturals.jpg";
import dImg5 from "./assets/Stories/desktop/world-tour.jpg";
import dImg6 from "./assets/Stories/desktop/unforeseen-corners.jpg";
import dImg7 from "./assets/Stories/desktop/king-on-africa.jpg";
import dImg8 from "./assets/Stories/desktop/trip-to-nowhere.jpg";
import dImg9 from "./assets/Stories/desktop/rage-of-the-sea.jpg";
import dImg10 from "./assets/Stories/desktop/running-free.jpg";
import dImg11 from "./assets/Stories/desktop/behind-the-waves.jpg";
import dImg12 from "./assets/Stories/desktop/calm-waters.jpg";
import dImg13 from "./assets/Stories/desktop/milky-way.jpg";
import dImg14 from "./assets/Stories/desktop/dark-forest.jpg";
import dImg15 from "./assets/Stories/desktop/land-of-dreams.jpg";
import dImg16 from "./assets/Stories/desktop/somwarpet.jpg";

//PHOTO CARD IMPORT
import pcimg from "./assets/Home/desktop/create-and-share.jpg";
import pcimg2 from "./assets/Home/desktop/beautiful-stories.jpg";
import pcimg3 from "./assets/Home/desktop/designed-for-everyone.jpg";


//FEATURES TYPO IMPORT 
import FEimg1 from "./assets/Features/desktop/responsive.svg"
import FEimg2 from "./assets/Features/desktop/no-limit.svg" 
import FEimg3 from "./assets/Features/desktop/embed.svg"
import FEimg4 from "./assets/Features/desktop/custom-domain.svg"
import FEimg5 from "./assets/Features/desktop/boost-exposure.svg"
import FEimg6 from "./assets/Features/desktop/drag-drop.svg"

const data = {
  FeaturedStory: {
    id:1,
    mImg: mImg0,
    dImg: dImg0,
    subTitle: "Last month's featured story",
    title: "Hazy full moon of Appalachia",
    date: "March 2nd 2020",
    author: "by John Appleseed",
    prevStory: 'The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.'
 },
  StoryPageData: [
    {
      id: 1,
      mImg: mImg1,
      dImg: dImg1,
      date: "April 16th 2020",
      heading: "The Mountains",
      author: "by John Appleseed"
   },
   {
      id: 2,
      mImg:mImg2,
      dImg: dImg2,
      date: "April 14th 2020",
      heading:"Sunset Cityscapes",
      author:"by Benjamin Cruz"
   },
   {
      id: 3,
      mImg: mImg3,
      dImg: dImg3,
      date: "April 11th 2020",
      heading:"18 Days Voyage",
      author:"by Alexei Borodin"
   },
   {
      id: 4,
      mImg: mImg4,
      dImg: dImg4,
      date: "April 9th 2020",
      heading: "Architecturals",
      author: "by Samantha Brooke",
   },
   {
      id: 5,
      mImg: mImg5,
      dImg: dImg5,
      date: " April 7th 2020",
      heading: "World Tour 2019",
      author: "by Timothy Wagner"
   },
   {
      id: 6,
      mImg:mImg6,
      dImg: dImg6,
      date: "April 3rd 2020",
      heading:"Unforeseen Corners",
      author:"by William Malcolm"
   },
   {
      id: 7,
      mImg: mImg7,
      dImg: dImg7,
      date: "March 29th 2020",
      heading:"King on Africa: Part II",
      author:"by Tim Hillenburg"
   },
   {
      id: 8,
      mImg: mImg8,
      dImg: dImg8,
      date: "March 21st 2020",
      heading: " The Trip to Nowhere",
      author: "by Felicia Rourke",
   },
   {
      id: 9,
      mImg: mImg9,
      dImg: dImg9,
      date: "March 19th 2020",
      heading: "Rage of The Sea",
      author: "by Mohammed Abdul"
   },
   {
      id: 10,
      mImg:mImg10,
      dImg: dImg10,
      date: "March 16th 2020",
      heading:"Running Frees",
      author:"by Michelle"
   },
   {
      id: 11,
      mImg: mImg11,
      dImg: dImg11,
      date: " March 11th 2020",
      heading:"Behind the Waves",
      author:"by Lamarr Wilson"
   },
   {
      id: 12,
      mImg: mImg12,
      dImg: dImg12,
      date: "March 9th 2020",
      heading: "Calm Waters",
      author: "by Samantha Brooke",
   },
   {
      id: 13,
      mImg: mImg13,
      dImg: dImg13,
      date: "March 5th 2020",
      heading: "The Milky Way",
      author: "by John Appleseed"
   },
   {
      id: 14,
      mImg:mImg14,
      dImg: dImg14,
      date: "March 4th 2020",
      heading:"Night at The Dark Forest",
      author:"by  Mohammed Abdul"
   },
   {
      id: 17,
      mImg: mImg16,
      dImg: dImg16,
      date: "March 1st 2020",
      heading:"Somwarpet's Beauty",
      author:"by Michelle"
   },
   {
      id: 18,
      mImg: mImg15,
      dImg: dImg15,
      date: "February 25th 2020",
      heading: "Land of Dreams",
      author: "by William Malcolm",
   }
  ],
  photoCardData: [
    {
      textSide: "left",
      textTheme: "dark",
      description:
        "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
      title: "CREATE AND SHARE YOUR PHOTO STORIES.",
      img: pcimg,
    },
    {
      textSide: "right",
      textTheme: "light",
      description:
        "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
      title: "CREATE AND SHARE YOUR PHOTO STORIES.",
      img: pcimg2,
    },
    {
      textSide: "left",
      textTheme: "dark",
      description:
        "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
      title: "CREATE AND SHARE YOUR PHOTO STORIES.",
      img: pcimg3,
    },
  ],
  compareData:[
    {
       id: 0,
       title: "Unlimited Story Posting",
       basic: true,
       pro:true,
       business: true,
    },
    {
       id: 1,
       title: "Unlimited Photo Upload",
       basic: true,
       pro:true,
       business: true,
    },
    {
       id: 2,
       title: "Embedding Custom Content",
       basic: false,
       pro:true,
       business: true,
    },
    {
       id: 3,
       title: "Customize Metadata",
       basic: false,
       pro:true,
       business: true,
    },
    {
       id: 4,
       title: "Advanced Metrics",
       basic: false,
       pro:false,
       business: true,
    },
    {
       id: 5,
       title: "Photo Downloads",
       basic: false,
       pro:false,
       business: true,
    },
    {
       id: 6,
       title: "Search Engine Indexing",
       basic: false,
       pro:false,
       business: true,
    },
    {
       id: 7,
       title: "Custom Analytics",
       basic: false,
       pro:false,
       business: true,
    },
 
 ],
 CompareTitles: ["the features", "basic", "pro", "business"],
 featuresData: [
   {
      id: 0,
      img: FEimg1,
      heading: "100% Responsive",
      para: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
   },
   {
      id: 1,
      img: FEimg2,
      heading: "No Photo Upload Limit",
      para: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
   },
   {
      id: 2,
      img: FEimg3,
      heading: "Available to Embed",
      para: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."
   },
   {
      id: 3,
      img: FEimg4,
      heading: "Custom Domain",
      para: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!"
   },
   {
      id: 4,
      img: FEimg5,
      heading: "Boost Your Exposure",
      para: "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list."
   },
   {
      id: 5,
      img: FEimg6,
      heading: "Drag & Drop Image",
      para: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."
   },
],
};

export default data;
