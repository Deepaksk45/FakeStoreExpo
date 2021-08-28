import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';

import {
	Home,
	Login,
	ProductListing,
	SignUp,
	Splash,
	Product,
	// Rating,
	// Profile,
	// Settings,
	// BookRide,
	// AddMoney,
	// FairSheet,
	// SelectCar,
	// EditProfile,
	// RideChooser,
	// ChangeTheme,
	// PlaceSearch,
	// OngoingTrip,
	// SplashScreen,
	// TripSelector,
	// OutdoorTrips,
	// ChooseLocation,
	// ChooseLanguage,
	// OtpVerification,
	// DriverPickupDetail,
	// RideBids,
	// WebView,
} from '../screens';
// import {CustomMenuBar} from './components';

// const DrawerNav = createDrawerNavigator();
const StackNavigator = createNativeStackNavigator();

// const RootDrawer = () => (
// 	<DrawerNav.Navigator
// 		initialRouteName="Home"
// 		drawerStyle={{borderBottomEndRadius: 50, backgroundColor: '#0000'}}
// 		drawerContent={(props) => <CustomMenuBar {...props} />}>
// 		<DrawerNav.Screen name="Home" component={HomeStack} />
// 		<DrawerNav.Screen name="Home" component={Home} />
// 		<DrawerNav.Screen name="Profile" component={Profile} />
// 		<DrawerNav.Screen name="Settings" component={Settings} />
// 		<DrawerNav.Screen name="Outdoor Trips" component={OutdoorTrips} />
// 		<DrawerNav.Screen name="AddMoney" component={AddMoney} />
// 	</DrawerNav.Navigator>
// );
/*
const HomeStack = () => (
	<StackNavigator.Navigator initialRouteName="HomeScreen" headerMode="none">
		<StackNavigator.Screen name="HomeScreen" component={Home} />
		<StackNavigator.Screen name="BookRide" component={BookRide} />
		<StackNavigator.Screen name="SelectCar" component={SelectCar} />
		<StackNavigator.Screen name="FairSheet" component={FairSheet} />
		<StackNavigator.Screen name="RideChooser" component={RideChooser} />
		<StackNavigator.Screen name="ChangeTheme" component={ChangeTheme} />
		<StackNavigator.Screen name="PlaceSearch" component={PlaceSearch} />
		<StackNavigator.Screen
			name="TripSelector"
			component={TripSelector}
			initialParams={{
				location: {latitude: false, longitude: false},
				locationText: null,
				clickedButton: null,
			}}
		/>
		<StackNavigator.Screen name="ChooseLocation" component={ChooseLocation} />
		<StackNavigator.Screen name="DriverPickupDetail" component={DriverPickupDetail} />
		<StackNavigator.Screen name="Rating" component={Rating} />
		<StackNavigator.Screen name="OngoingTrip" component={OngoingTrip} />
		<StackNavigator.Screen name="RideBids" component={RideBids} />
		<StackNavigator.Screen name="WebView" component={WebView} />
	</StackNavigator.Navigator>
);
*/
export default () => (
	<NavigationContainer>
		<StackNavigator.Navigator initialRouteName="ProductListing" screenOptions={{ headerShown: false }} >
			<StackNavigator.Screen name="ProductListing" component={ProductListing} />
			<StackNavigator.Screen name="Splash" component={Splash} />
			<StackNavigator.Screen name="Login" component={Login} />
			<StackNavigator.Screen name="Home" component={Home} />
			<StackNavigator.Screen name="Product" component={Product} />
			{/* <StackNavigator.Screen name="RootDrawer" component={RootDrawer} /> */}
			{/* <StackNavigator.Screen name="Change Theme" component={ChangeTheme} />
			<StackNavigator.Screen name="EditProfile" component={EditProfile} />
			<StackNavigator.Screen name="SplashScreen" component={SplashScreen} />
			<StackNavigator.Screen name="Choose Language" component={ChooseLanguage} />
			<StackNavigator.Screen name="OtpVerification" component={OtpVerification} /> */}
		</StackNavigator.Navigator>
	</NavigationContainer>
);
