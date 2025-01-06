import { useState } from "react";
import { BottomNavigation, Text } from "react-native-paper";
import Profile from "./Profile";
import Courses from "./Courses";
import Subjects from "./Subjects";

const Home = ({ route }) => {
  const { student } = route.params;

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "profile",
      title: "Profile",
      focusedIcon: "account",
      unfocusedIcon: "account-outline",
    },
    {
      key: "courses",
      title: "Courses",
      focusedIcon: "book",
      unfocusedIcon: "book-outline",
    },
    {
      key: "subjects",
      title: "Subjects",
      focusedIcon: "book-open",
      unfocusedIcon: "book-open-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    profile: () => <Profile student={student} />,
    courses: () => <Courses student={student} />,
    subjects: () => <Subjects student={student} />,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Home;
