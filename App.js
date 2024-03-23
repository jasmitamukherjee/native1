import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import FlatCards from './component/FlatCards';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
    
      <Text>Hi</Text>
     
    <FlatCards/>
    
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
