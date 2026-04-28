import Month from "@/components/calendarView/Month";
import { Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;
  return (
    <Container>
      <Month date={new Date()} />
    </Container>
  );
};

export default Index;
