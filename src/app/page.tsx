
import { HomeScreen } from "@/components/screens/HomeScreen";
import { HOME_CONFIG } from "@/config/content-config/home/home.config";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
	title: 'Главная',
}

const Home: NextPage = () => {
  return (
      <HomeScreen content={HOME_CONFIG} />
  );
};

export default Home;
