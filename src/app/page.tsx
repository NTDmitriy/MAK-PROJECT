import { HomeScreen } from "@/components/screens/HomeScreen";
import { HOME_CONTENT } from "@/content/home/home.content";
import { NextPage } from "next";


const Home: NextPage = () => {
  return <HomeScreen content={HOME_CONTENT} />;
};

export default Home;
