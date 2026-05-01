import Calendar from "@/components/calendarView/Calendar";
import { Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;
  return (
    <Container>
      <Calendar />
    </Container>
  );
};

export default Index;
