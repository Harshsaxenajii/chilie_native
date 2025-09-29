import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const Page = () => {
  const { dashboardname, id } = useLocalSearchParams();
  //   const params = useLocalSearchParams();
  //   useEffect(() => {
  //     console.log(params);
  //   }, []);

  return (
    <View>
      <Text>name: {dashboardname}</Text>
      <Text>id: {id}</Text>
      <Text>hello</Text>
    </View>
  );
};

export default Page;
