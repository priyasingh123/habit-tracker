import DayHeader from "@/components/calendarView/DayHeader";
import { Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;
  return (
    <Container>
      <DayHeader
        date={new Date()}
        setOpenDrawer={() => {}}
        setDrawerBody={() => {}}
        setMonthYear={() => {}}
      />
    </Container>
  );
};

export default Index;
