import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, Button, TextInput, } from 'react-native';

import RadioGroup from 'react-native-radio-buttons-group';

console.disableYellowBox = true;



export default class Start extends React.Component {
  state = {
    userType: '',
    data: [
      {
        label: 'Instructor',
        value: 'Instructor',
      },
      {
        label: 'Student',
        value: 'Student',
      },
    ],
};
  

onPress = data => this.setState({ data });

render() {
  let selectedButton = this.state.data.find(e => e.selected == true);
  selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
  

  return (
    <KeyboardAvoidingView style={styles.container}  behavior="padding">

      <Text>Enter Instructor or Student:</Text>
      {/* <TextInput 
        onChangeText={
          (text)=> this.setState({
            userType:text
          })
        }
      /> */}

      <Text style={{ fontSize: 18, marginBottom: 50 }}>
          userType = {selectedButton}
      </Text>
      <RadioGroup radioButtons={this.state.data} onPress={this.onPress}/>
    
    
      <Button style={styles.button}
          title="Access Account"
          color="#841584"
          accessibilityLabel="Access Account"
          onPress={()=>(selectedButton.label == 'Instructor')? this.props.navigation.navigate('InstructorView') : this.props.navigation.navigate('StudentView')}
      />
      <Text>userType: {selectedButton}</Text>
    </KeyboardAvoidingView>
    
  );
  
}
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},
button: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}
});