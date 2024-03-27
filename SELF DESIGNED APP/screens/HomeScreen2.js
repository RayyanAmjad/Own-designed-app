import *React from 'react';
import{Text,View,TextInput,StyleSheet,Button,TouchableOpacity} from 'react-native';
import AppHeader from "../Component/AppHeader"
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class TherapySessionScreen extends Component{

        gotoScreen3 =()=>{
            this.props.navigation.navigate('Screen3')
        }
	render(){
		return(
			<SafeAreaProvider>
			<View>
				<AppHeader/>
				<TouchableOpacity style={styles.button,{backgroundColor:"red"}} 
                onPress={this.gotoScreen3}>
					<Text style={styles.buttonText}>Rishi rajeev</Text>
				</TouchableOpacity>

				<TouchableOpacity style = {styles.button,{backgroundColor:"pruple"}} 
                onPress={this.gotoScreen3}>
					<Text style={styles.buttonText}>lakshmi tejash</Text>
				</TouchableOpacity>
			</View>

			<TouchableOpacity style={styles.button,{backgroundColor:"yellow"}} 
            onPress={this.gotoScreen3}>
					<Text style={styles.buttonText}>Jhon</Text>

			</TouchableOpacity>

			<TouchableOpacity style={styles.button,{backgroundColor:"green"}} 
            onPress={this.gotoScreen3}>
			<Text style={styles.buttonText}>Riya</Text>

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
