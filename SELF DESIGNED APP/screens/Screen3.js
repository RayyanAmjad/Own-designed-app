
import *React from 'react';
import{Text,View,TextInput,StyleSheet,Button,TouchableOpacity} from 'react-native';
import AppHeader from "../Component/AppHeader"
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class TherapySessionScreen extends Component{
	render(){
		return(
			<SafeAreaProvider>
			<View>
				<AppHeader/>
				<TouchableOpacity style={styles.button,{backgroundColor:"red"}}>
					<Text style={styles.buttonText}>Video Call Screen</Text>
				</TouchableOpacity>

				<TouchableOpacity style = {styles.button,{backgroundColor:"pruple"}}>
					<Text style={styles.buttonText}>Call Screen</Text>
				</TouchableOpacity>
			</View>

			<TouchableOpacity style={styles.button,{backgroundColor:"yellow"}}>
					<Text style={styles.buttonText}Chat Screen></Text>

			</TouchableOpacity>

			<TouchableOpacity style={styles.button,{backgroundColor:"green"}}>
			<Text style={styles.buttonText}>Face to Face</Text>

			</TouchableOpacity>
				
			</SafeAreaProvider>
		)
	}
}

const styles = StyleSheet.create({
	container :{
		flex:1,
		backgroundColor:'#b8b8b8'
	},

	button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
  },

  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
})


