import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const Page = () => {
  const { individualTaskName, dashboardname, id } = useLocalSearchParams();

  return (
    <View>
      <Text>dashboardname: {id}</Text>
      <Text>id: {dashboardname}</Text>
      <Text>individual Taskname: {individualTaskName}</Text>
    </View>
  );
};

export default Page;
