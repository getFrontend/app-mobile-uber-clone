import { Redirect, RelativePathString } from "expo-router";

const path = "/(auth)/welcome" as RelativePathString;

const Home = () => {
  return <Redirect href={path} />;
};

export default Home;
