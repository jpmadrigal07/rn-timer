import { StyleSheet, View } from 'react-native';
import CountDown from 'react-native-countdown-component';

export default function App() {
  return (
    <View style={styles.container}>
      <CountDown
        until={259200}
        size={20}
        timeLabels={{d: 'DAY(S)', h: 'HOUR(S)', m: 'MINUTE(S)', s: 'SECOND(S)'}}
        digitTxtStyle={{color: '#FFF', fontSize: '30px'}}
        digitStyle={{backgroundColor: '#000', height: '40px', marginLeft: '5px', marginRight: '5px'}}
        timeLabelStyle={{color: '#FFF', fontSize: '8px', marginTop: '8px'}}
        style={{padding: 0}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7900e5',
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
});
