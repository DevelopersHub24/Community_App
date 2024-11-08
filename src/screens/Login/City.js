//import React from 'react';
//import { View, Text, StyleSheet } from 'react-native';
//import { useRoute } from '@react-navigation/native';
//
//const City = () => {
//  const route = useRoute();
//  const { country, city } = route.params; // Get the country and city from params
//
//  return (
//    <View style={styles.container}>
//      <Text style={styles.header}>Selected Location</Text>
//      <Text style={styles.text}>Country: {country}</Text>
//      <Text style={styles.text}>City: {city}</Text>
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    padding: 20,
//    justifyContent: 'center',
//  },
//  header: {
//    fontSize: 24,
//    fontWeight: 'bold',
//    marginBottom: 20,
//  },
//  text: {
//    fontSize: 18,
//    marginBottom: 10,
//  },
//});
//
//export default City;


//
//import React from 'react';
//import { View, Text, StyleSheet } from 'react-native';
//
//const City = ({ route }) => {
//  const { countryName, cityName } = route.params;
//
//  return (
//    <View style={styles.container}>
//      <Text style={styles.title}>Country: {countryName}</Text>
//      <Text style={styles.title}>City: {cityName}</Text>
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//    backgroundColor: '#fff',
//  },
//  title: {
//    fontSize: 24,
//    fontWeight: 'bold',
//    marginBottom: 20,
//  },
//});
//
//export default City;

//
//import React from 'react';
//import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';
//
//const City = ({ route, navigation }) => {
//  const { countryName, cityName } = route.params;
//
//  return (
//    <View style={styles.container}>
//      {/* Country Section */}
//      <TouchableOpacity
//        style={styles.inputContainer}
//        onPress={() => navigation.goBack()}
//      >
//        <Text style={styles.text}>{countryName}</Text>
//        <Icon name="caret-down" size={20} color="black" />
//      </TouchableOpacity>
//
//      {/* City Section */}
//      <TouchableOpacity
//        style={styles.inputContainer}
//        onPress={() => navigation.goBack()}
//      >
//        <Text style={styles.text}>{cityName}</Text>
//        <Icon name="caret-down" size={20} color="black" />
//      </TouchableOpacity>
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    paddingTop: 50,
//    paddingHorizontal: 20,
//    backgroundColor: '#fff',
//  },
//  inputContainer: {
//    flexDirection: 'row',
//    alignItems: 'center',
//    borderWidth: 1,
//    borderColor: '#ddd',
//    borderRadius: 5,
//    paddingHorizontal: 10,
//    paddingVertical: 8,
//    marginTop: 20,
//  },
//  text: {
//    flex: 1,
//    fontSize: 16,
//  },
//});
//
//export default City;


//import React from 'react';
//import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';
//
//const CityDetails = ({ route, navigation }) => {
//  const { countryName, cityName } = route.params;
//
//  return (
//    <View style={styles.container}>
//      {/* Country Section */}
//      <TouchableOpacity
//        style={styles.inputContainer}
//        onPress={() => navigation.navigate('Country')}
//      >
//        <Text style={styles.text}>{countryName}</Text>
//        <Icon name="caret-down" size={20} color="black" />
//      </TouchableOpacity>
//
//      {/* City Section */}
//      <TouchableOpacity
//        style={styles.inputContainer}
//        onPress={() => navigation.navigate('Cities', { countryName })} // Pass countryName to Cities component
//      >
//        <Text style={styles.text}>{cityName}</Text>
//        <Icon name="caret-down" size={20} color="black" />
//      </TouchableOpacity>
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    paddingTop: 50,
//    paddingHorizontal: 20,
//    backgroundColor: '#fff',
//  },
//  inputContainer: {
//    flexDirection: 'row',
//    alignItems: 'center',
//    borderWidth: 1,
//    borderColor: '#ddd',
//    borderRadius: 5,
//    paddingHorizontal: 10,
//    paddingVertical: 8,
//    marginTop: 20,
//  },
//  text: {
//    flex: 1,
//    fontSize: 16,
//  },
//});
//
//export default CityDetails;
//
//
//import React from 'react';
//import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon for the dropdown
//
//const City = ({ route, navigation }) => {
//  const { countryName, cityName } = route.params;
//
//  return (
//    <View style={styles.container}>
//      <View style={styles.row}>
//        <Text style={styles.label}>Country</Text>
//        <TouchableOpacity
//          style={styles.dropdown}
//          onPress={() => navigation.navigate('Country')} // Navigate to the Country screen
//        >
//          <Text style={styles.value}>{countryName}</Text>
//          <Icon name="chevron-down" size={20} color="black" />
//        </TouchableOpacity>
//      </View>
//
//      <View style={styles.row}>
//        <Text style={styles.label}>City</Text>
//        <TouchableOpacity
//          style={styles.dropdown}
//          onPress={() => navigation.navigate('Cities')} // Navigate to the City screen
//        >
//          <Text style={styles.value}>{cityName}</Text>
//          <Icon name="chevron-down" size={20} color="black" />
//        </TouchableOpacity>
//      </View>
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    padding: 20,
//    backgroundColor: '#fff',
//  },
//  row: {
//    flexDirection: 'row',
//    alignItems: 'center',
//    marginBottom: 20,
//  },
//  label: {
//    flex: 1,
//    fontSize: 18,
//    fontWeight: 'bold',
//  },
//  dropdown: {
//    flexDirection: 'row',
//    alignItems: 'center',
//    borderWidth: 1,
//    borderColor: '#ddd',
//    padding: 10,
//    width: '60%',
//    justifyContent: 'space-between',
//    borderRadius: 5,
//  },
//  value: {
//    fontSize: 16,
//    color: 'black',
//  },
//});
//
//export default City;


//import React from 'react';
//import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';
//
//const City = ({ route, navigation }) => {
//  const { countryName, cityName } = route.params;
//
//  const handleNavigateToCountry = () => {
//    console.log('Navigating to Country screen');  // Debugging line
//    navigation.navigate('Country');  // Navigate to the Country screen
//  };
//
//  const handleNavigateToCity = () => {
//    console.log('Navigating to City screen');  // Debugging line
//    navigation.navigate('Cities');  // Navigate to the City screen
//  };
//
//  return (
//    <View style={styles.container}>
//      <View style={styles.row}>
//        <Text style={styles.label}>Country</Text>
//        <TouchableOpacity
//          style={styles.dropdown}
//          onPress={handleNavigateToCountry} // Navigate to the Country screen
//        >
//          <Text style={styles.value}>{countryName}</Text>
//          <Icon name="chevron-down" size={20} color="black" />
//        </TouchableOpacity>
//      </View>
//
//      <View style={styles.row}>
//        <Text style={styles.label}>City</Text>
//        <TouchableOpacity
//          style={styles.dropdown}
//          onPress={handleNavigateToCity} // Navigate to the City screen
//        >
//          <Text style={styles.value}>{cityName}</Text>
//          <Icon name="chevron-down" size={20} color="black" />
//        </TouchableOpacity>
//      </View>
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    padding: 20,
//    backgroundColor: '#fff',
//  },
//  row: {
//    flexDirection: 'row',
//    alignItems: 'center',
//    marginBottom: 20,
//  },
//  label: {
//    flex: 1,
//    fontSize: 18,
//    fontWeight: 'bold',
//  },
//  dropdown: {
//    flexDirection: 'row',
//    alignItems: 'center',
//    borderWidth: 1,
//    borderColor: '#ddd',
//    padding: 10,
//    width: '60%',
//    justifyContent: 'space-between',
//    borderRadius: 5,
//  },
//  value: {
//    fontSize: 16,
//    color: 'black',
//  },
//});
//
//export default City;

//
//import React from 'react';
//import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';
//
//const CityDetails = ({ route, navigation }) => {
//  const { countryName, cityName, countryid } = route.params || {}; // Check for undefined or empty params
//
//  // Avoid errors if the countryid is not passed
//  if (!countryid) {
//    console.log('No country ID provided');
//  }
//
//  const handleNavigateToCountry = () => {
//    console.log('Navigating to Country screen');
//    navigation.navigate('Country'); // Navigate to the Country screen
//  };
//
//  const handleNavigateToCity = () => {
//    console.log('Navigating to City screen');
//    navigation.navigate('Cities'); // Navigate to the City screen
//  };
//
//  return (
//    <View style={styles.container}>
//      <View style={styles.row}>
//        <Text style={styles.label}>Country</Text>
//        <TouchableOpacity
//          style={styles.dropdown}
//          onPress={handleNavigateToCountry} // Navigate to the Country screen
//        >
//          <Text style={styles.value}>{countryName}</Text>
//          <Icon name="chevron-down" size={20} color="black" />
//        </TouchableOpacity>
//      </View>
//
//      <View style={styles.row}>
//        <Text style={styles.label}>City</Text>
//        <TouchableOpacity
//          style={styles.dropdown}
//          onPress={handleNavigateToCity} // Navigate to the City screen
//        >
//          <Text style={styles.value}>{cityName}</Text>
//          <Icon name="chevron-down" size={20} color="black" />
//        </TouchableOpacity>
//      </View>
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    padding: 20,
//    backgroundColor: '#fff',
//  },
//  row: {
//    flexDirection: 'row',
//    alignItems: 'center',
//    marginBottom: 20,
//  },
//  label: {
//    flex: 1,
//    fontSize: 18,
//    fontWeight: 'bold',
//  },
//  dropdown: {
//    flexDirection: 'row',
//    alignItems: 'center',
//    borderWidth: 1,
//    borderColor: '#ddd',
//    padding: 10,
//    width: '60%',
//    justifyContent: 'space-between',
//    borderRadius: 5,
//  },
//  value: {
//    fontSize: 16,
//    color: 'black',
//  },
//});
//
//export default CityDetails;


//import React from 'react';
//import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';
//
//const City = ({ route, navigation }) => {
//  // Destructure route.params with optional chaining to handle undefined params
//  const { countryName, cityName, countryid } = route.params || {}; // Check if params exist
//
//  // If countryid is undefined, show a default or an error message
//  if (!countryid) {
//    console.error("Country ID is missing!");
//  }
//
//  const handleNavigateToCountry = () => {
//    console.log('Navigating to Country screen');
//    navigation.navigate('Country'); // Navigate to Country screen
//  };
//
//  const handleNavigateToCity = () => {
//    console.log('Navigating to City screen');
//    navigation.navigate('Cities', { countryId:countryid}); // Navigate to City screen
//  };
//
//  return (
//    <View style={styles.container}>
//      <View style={styles.row}>
//        <Text style={styles.label}>Country</Text>
//        <TouchableOpacity
//          style={styles.dropdown}
//          onPress={handleNavigateToCountry} // Navigate to Country screen
//        >
//          <Text style={styles.value}>{countryName}</Text>
//          <Icon name="chevron-down" size={20} color="black" />
//        </TouchableOpacity>
//      </View>
//
//      <View style={styles.row}>
//        <Text style={styles.label}>City</Text>
//        <TouchableOpacity
//          style={styles.dropdown}
//          onPress={handleNavigateToCity} // Navigate to City screen
//        >
//          <Text style={styles.value}>{cityName}</Text>
//          <Icon name="chevron-down" size={20} color="black" />
//        </TouchableOpacity>
//      </View>
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    padding: 20,
//    backgroundColor: '#fff',
//  },
//  row: {
//    flexDirection: 'row',
//    alignItems: 'center',
//    marginBottom: 20,
//  },
//  label: {
//    flex: 1,
//    fontSize: 18,
//    fontWeight: 'bold',
//  },
//  dropdown: {
//    flexDirection: 'row',
//    alignItems: 'center',
//    borderWidth: 1,
//    borderColor: '#ddd',
//    padding: 10,
//    width: '60%',
//    justifyContent: 'space-between',
//    borderRadius: 5,
//  },
//  value: {
//    fontSize: 16,
//    color: 'black',
//  },
//});
//
//export default City;


import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const City = ({ route, navigation }) => {
  const { countryName, cityName, countryid } = route.params || {};

  if (!countryid) {
    console.error("Country ID is missing!");
  }

  const handleNavigateToCountry = () => {
    navigation.navigate('Country');
  };

  const handleNavigateToCity = () => {
    navigation.navigate('Cities', { countryId: countryid });
  };

  const handleSearchSociety = () => {
    console.log('Searching Society');
    // Add search logic here
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.homeButton}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Home</Text>
        <TouchableOpacity style={styles.searchIcon}>
          <Icon name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Country Dropdown */}
      <View style={styles.row}>
        <Text style={styles.label}>Country</Text>
        <TouchableOpacity style={styles.dropdown} onPress={handleNavigateToCountry}>
          <TextInput
            style={styles.input}
            value={countryName}
            editable={false}
            placeholder="Select Country"
          />
          <Icon name="chevron-down" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* City Dropdown */}
      <View style={styles.row}>
        <Text style={styles.label}>City</Text>
        <TouchableOpacity style={styles.dropdown} onPress={handleNavigateToCity}>
          <TextInput
            style={styles.input}
            value={cityName}
            editable={false}
            placeholder="Select City"
          />
          <Icon name="chevron-down" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* Society Input */}
      <View style={styles.row}>
        <Text style={styles.label}>Society</Text>
        <View style={styles.societyInputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Society Name"
          />
          <TouchableOpacity onPress={handleSearchSociety} style={styles.searchButton}>
            <Icon name="search" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop:50,
    marginBottom: 40,
    zIndex: 1,
    paddingHorizontal: 10,
       paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        backgroundColor: '#f8f8f8',
  },
  homeButton: {
    padding: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  searchIcon: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal:10,
    paddingTop:5,
  },
  label: {
    flex: 1,
    fontSize: 20,
    fontWeight: '800',
    color:'#000',
    marginHorizontal: 20,
//    marginVertical: 15,

  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: -10,
    width: '67%',
    justifyContent: 'space-between',
    borderRadius: 5,
  },
  input: {
    fontSize: 16,
    color: 'black',
    flex: 1,
//        marginHorizontal: 30,
        marginVertical: 5,

  },
  societyInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: -10,
    width: '67%',
    borderRadius: 5,
  },
  searchButton: {
    paddingLeft: 10,
  },
});

export default City;
