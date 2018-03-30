import React, {Component} from 'react';
import { ActivityIndicator, ListView, Alert, Button, StyleSheet, TextInput, Text, View, ScrollView, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Hamburger from 'react-native-hamburger';
import Hamburger1 from './hamburger1';

var username = " ";
var passwrd = " ";
var eventDetails = " ";

const LoginScreen = ({ navigation }) => (
	<View style={styles.wholeApp}>
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<View style={styles.insertNameLine}>
				<View style={styles.textInput}>
					<TextInput
						maxLength = {20}
						autoCapitalize='words'
						placeholder="Username"
						onChangeText={(text) => username = text}
					/>
					<TextInput
						maxLength = {20}
						autoCapitalize='words'
						placeholder="Password"
						onChangeText={(text) => passwrd = text}
					/>
				</View>
			</View>
			<Button style={styles.buttonDefaultColor}
				onPress={() => navigation.navigate('MainScreen')}
				title="Login"
				color="#77c8ce"
			/>
		</View>
    </View>
);

const MainScreen = ({ navigation }) => (
    <View style={styles.wholeApp}>
        <View style={styles.topContent}>
			<View style={{flex: 0.1, padding: 8}}>
				<Hamburger1 onPress={()=> this.setState({active: !this.state.active})} />
			</View>
			<View style={{flex: 0.4, padding: 8}}>
				<Button
					onPress={() => boardButton()}
					title="Board"
					color="#77c8ce"
				/>
			</View>
			<View style={{flex: 0.4, padding: 8}}>
				<Button
					onPress={() => aroundMeButton()}
					title="Around Me"
					color="#77c8ce"
				/>
			</View>
			<View style={{flex: 0.1, padding: 8}}>
				<Button
					onPress={() => filtersButton()}
					title="Y"
					color="#77c8ce"
				/>
			</View>
		</View>
        <ScrollView style={styles.mainContent}>
			<View style={{padding: 5}}>
				<Button
					onPress={() => eventExpand()}
					title="..."
					color="#b3dde0"
				/>
			</View>
			<View style={{padding: 5}}>
				<Button
					onPress={() => eventExpand()}
					title="..."
					color="#b3dde0"
				/>
			</View>
			<View style={{padding: 5}}>
				<Button
					onPress={() => eventExpand()}
					title="..."
					color="#b3dde0"
				/>
			</View>
			<View style={{padding: 5}}>
				<Button
					onPress={() => eventExpand()}
					title="..."
					color="#b3dde0"
				/>
			</View>
			<View style={{padding: 5}}>
				<Button
					onPress={() => eventExpand()}
					title="..."
					color="#b3dde0"
				/>
			</View>
			<View style={{padding: 5}}>
				<Button
					onPress={() => eventExpand()}
					title="..."
					color="#b3dde0"
				/>
			</View>
			<View style={{padding: 5}}>
				<Button
					onPress={() => eventExpand()}
					title="..."
					color="#b3dde0"
				/>
			</View>
			<View style={{padding: 5}}>
				<Button
					onPress={() => eventExpand()}
					title="..."
					color="#b3dde0"
				/>
			</View>
			<View style={{padding: 5}}>
				<Button
					onPress={() => eventExpand()}
					title="..."
					color="#b3dde0"
				/>
			</View>
			<View style={{padding: 5}}>
				<Button
					onPress={() => eventExpand()}
					title="..."
					color="#b3dde0"
				/>
			</View>
			<View style={{padding: 5}}>
				<Button
					onPress={() => eventExpand()}
					title="..."
					color="#b3dde0"
				/>
			</View>
			<View style={{padding: 5}}>
				<Button
					onPress={() => eventExpand()}
					title="..."
					color="#b3dde0"
				/>
			</View>
			<View style={{padding: 5}}>
				<Button
					onPress={() => eventExpand()}
					title="..."
					color="#b3dde0"
				/>
			</View>
			<View style={{padding: 5}}>
				<Button
					onPress={() => eventExpand()}
					title="..."
					color="#b3dde0"
				/>
			</View>
			<View style={{padding: 5}}>
				<Button
					onPress={() => eventExpand()}
					title="..."
					color="#b3dde0"
				/>
			</View>
        </ScrollView>
		<View style={styles.bottomContent}>
			<Button
				onPress={() => navigation.navigate('NewEventScreen')}
				title="New Event"
				color="#77c8ce"
			/>
			<Text style={styles.allRightsReserved}> © Roy Koren, Gal Rotenberg, Yotam Boaz 2018</Text>
		</View>
    </View>
);

const NewEventScreen = ({ navigation }) => (
	<View style={{backgroundColor: '#E2FCFF', flex: 1}}>
		<View style={{flex: 0.8}}>
			<TextInput
				maxLength = {20}
				autoCapitalize='words'
				placeholder="Event Details"
				onChangeText={(text) => eventDetails = text}
			/>
		</View>
		<View style={{flex: 0.2, alignItems: 'center', justifyContent: 'center'}}>
			<Button
				onPress={() => eventPost(navigation)}
				title="Submit"
				color="#77c8ce"
			/>
		</View>
	</View>
);

function aroundMeButton() {}

function boardButton() {}

function filtersButton() {}

function eventExpand() {}

function eventPost(navigation) {
	// post json
	navigation.navigate('MainScreen');
}

const styles = StyleSheet.create({
  wholeApp: {
    flexDirection: 'column', //default
    flex: 1,
    backgroundColor: '#E2FCFF',
  },
  insertNameLine: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between'
  },
  textInput: {
	flex: 1
  },
  topContent: {
	flexDirection: 'row',
    flex: 0.1,
	backgroundColor: '#E2FCFF'
  },
  mainContent: {
    flex: 0.75,
    //justifyContent: 'space-around',
    //alignItems: 'center',
  },
  bottomContent: {
    flex: 0.15,
    padding: 5,
    justifyContent: 'flex-end',
  },
  allRightsReserved: {
	color: 'black',
    fontSize: 10,
    textAlign: 'right',
	paddingTop: 20,
  }
});

const RootNavigator = StackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
		headerTitle: 'Login',
    },
  },
  MainScreen: {
    screen: MainScreen,
    navigationOptions: {
		headerTitle: 'Main Screen',
    },
  },
  NewEventScreen: {
	screen: NewEventScreen,
    navigationOptions: {
		headerTitle: 'New Event',
    },
  },
});

export default RootNavigator;
