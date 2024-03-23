import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import FlatCards from './component/FlatCards';
import ElevatedCards from './component/ElevatedCards';
import FancyCard from './component/FancyCard';
import ActionCard from './component/ActionCard';
import ContactList from './component/ContactList';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
    
     
     
    <FlatCards/>
    <ElevatedCards/>
    <FancyCard/>
    <ActionCard/>
    <ContactList/>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
