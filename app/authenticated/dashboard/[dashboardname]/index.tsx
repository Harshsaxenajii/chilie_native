// import React from "react";
// import { Text, View } from "react-native";

// const index = () => {
//   return (
//     <View>
//       <Text>you are under the dashboardname</Text>
//       <Text>you are under the dashboardname</Text>
//     </View>
//   );
// };

// export default index;

import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const Page = () => {
  const { dashboardname } = useLocalSearchParams();

  return (
    <View>
      <Text>name: {dashboardname}</Text>
    </View>
  );
};

export default Page;
