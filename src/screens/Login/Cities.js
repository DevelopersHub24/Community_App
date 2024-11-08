//import React, { useState, useEffect } from 'react';
//import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
//import { useRoute, useNavigation } from '@react-navigation/native';
//import Icon from 'react-native-vector-icons/Ionicons'; // Correct import for non-Expo projects
//
//const countries = [
//  {
//    id: '1',
//    name: 'United States',
//    flag: '🇺🇸',
//    cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix']
//  },
//  {
//    id: '2',
//    name: 'Canada',
//    flag: '🇨🇦',
//    cities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa']
//  },
//  {
//    id: '3',
//    name: 'Brazil',
//    flag: '🇧🇷',
//    cities: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza']
//  },
//  {
//    id: '4',
//    name: 'United Kingdom',
//    flag: '🇬🇧',
//    cities: ['London', 'Birmingham', 'Manchester', 'Glasgow', 'Liverpool']
//  },
//  {
//    id: '5',
//    name: 'Germany',
//    flag: '🇩🇪',
//    cities: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg', 'Stuttgart']
//  },
//  {
//    id: '6',
//    name: 'France',
//    flag: '🇫🇷',
//    cities: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice']
//  },
//  {
//    id: '7',
//    name: 'Italy',
//    flag: '🇮🇹',
//    cities: ['Rome', 'Milan', 'Naples', 'Turin', 'Palermo']
//  },
//  {
//    id: '8',
//    name: 'India',
//    flag: '🇮🇳',
//    cities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai']
//  },
//  {
//    id: '9',
//    name: 'China',
//    flag: '🇨🇳',
//    cities: ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Chongqing']
//  },
//  {
//    id: '10',
//    name: 'Japan',
//    flag: '🇯🇵',
//    cities: ['Tokyo', 'Osaka', 'Yokohama', 'Nagoya', 'Sapporo']
//  },
//  {
//    id: '11',
//    name: 'Australia',
//    flag: '🇦🇺',
//    cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide']
//  },
//  {
//    id: '12',
//    name: 'South Korea',
//    flag: '🇰🇷',
//    cities: ['Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon']
//  },
//  {
//    id: '13',
//    name: 'Mexico',
//    flag: '🇲🇽',
//    cities: ['Mexico City', 'Guadalajara', 'Monterrey', 'Puebla', 'Tijuana']
//  },
//  {
//    id: '14',
//    name: 'Russia',
//    flag: '🇷🇺',
//    cities: ['Moscow', 'Saint Petersburg', 'Novosibirsk', 'Yekaterinburg', 'Kazan']
//  },
//  {
//    id: '15',
//    name: 'South Africa',
//    flag: '🇿🇦',
//    cities: ['Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth']
//  },
//  {
//    id: '16',
//    name: 'Spain',
//    flag: '🇪🇸',
//    cities: ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Zaragoza']
//  },
//  {
//    id: '17',
//    name: 'Argentina',
//    flag: '🇦🇷',
//    cities: ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza', 'La Plata']
//  },
//  {
//    id: '18',
//    name: 'Turkey',
//    flag: '🇹🇷',
//    cities: ['Istanbul', 'Ankara', 'Izmir', 'Bursa', 'Antalya']
//  },
//  {
//    id: '19',
//    name: 'Saudi Arabia',
//    flag: '🇸🇦',
//    cities: ['Riyadh', 'Jeddah', 'Mecca', 'Medina', 'Dammam']
//  },
//  {
//    id: '20',
//    name: 'Netherlands',
//    flag: '🇳🇱',
//    cities: ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht', 'Eindhoven']
//  },
//  {
//    id: '21',
//    name: 'Sweden',
//    flag: '🇸🇪',
//    cities: ['Stockholm', 'Gothenburg', 'Malmö', 'Uppsala', 'Västerås']
//  },
//  {
//    id: '22',
//    name: 'Switzerland',
//    flag: '🇨🇭',
//    cities: ['Zurich', 'Geneva', 'Basel', 'Lausanne', 'Bern']
//  },
//  {
//    id: '23',
//    name: 'Norway',
//    flag: '🇳🇴',
//    cities: ['Oslo', 'Bergen', 'Trondheim', 'Stavanger', 'Drammen']
//  },
//  {
//    id: '24',
//    name: 'Denmark',
//    flag: '🇩🇰',
//    cities: ['Copenhagen', 'Aarhus', 'Odense', 'Aalborg', 'Esbjerg']
//  },
//  {
//    id: '25',
//    name: 'Finland',
//    flag: '🇫🇮',
//    cities: ['Helsinki', 'Espoo', 'Tampere', 'Vantaa', 'Oulu']
//  },
//  {
//    id: '26',
//    name: 'New Zealand',
//    flag: '🇳🇿',
//    cities: ['Auckland', 'Wellington', 'Christchurch', 'Hamilton', 'Tauranga']
//  },
//  {
//    id: '27',
//    name: 'Greece',
//    flag: '🇬🇷',
//    cities: ['Athens', 'Thessaloniki', 'Patras', 'Heraklion', 'Larissa']
//  },
//  {
//    id: '28',
//    name: 'Portugal',
//    flag: '🇵🇹',
//    cities: ['Lisbon', 'Porto', 'Amadora', 'Braga', 'Coimbra']
//  },
//  {
//    id: '29',
//    name: 'Israel',
//    flag: '🇮🇱',
//    cities: ['Jerusalem', 'Tel Aviv', 'Haifa', 'Ashdod', 'Rishon LeZion']
//  },
//  {
//    id: '30',
//    name: 'Egypt',
//    flag: '🇪🇬',
//    cities: ['Cairo', 'Alexandria', 'Giza', 'Shubra El-Kheima', 'Port Said']
//  }
//];
//
//
//const Cities = () => {
//  const route = useRoute();
//  const navigation = useNavigation();
//  const { countryId } = route.params;
//  const [cities, setCities] = useState([]);
//  const [searchText, setSearchText] = useState('');
//  const [isSearching, setIsSearching] = useState(false);
//
//  useEffect(() => {
//    const country = countries.find(item => item.id === countryId);
//    if (country) {
//      setCities(country.cities);
//    }
//  }, [countryId]);
//
//  const handleSearch = (text) => {
//    setSearchText(text);
//  };
//
//  const filteredCities = cities.filter(city =>
//    city.toLowerCase().includes(searchText.toLowerCase())
//  );
//
//  return (
//    <View style={styles.container}>
//      <View style={styles.header}>
//        {!isSearching ? (
//          <>
//            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
//              <Icon name="arrow-back" size={28} color="black" />
//            </TouchableOpacity>
//            <Text style={styles.title}>Select City</Text>
//            <TouchableOpacity
//              onPress={() => setIsSearching(true)} // Enable search mode
//              style={styles.searchIcon}
//            >
//              <Icon name="search" size={28} color="black" />
//            </TouchableOpacity>
//          </>
//        ) : (
//          <View style={styles.searchContainer}>
//            <TextInput
//              style={styles.searchBar}
//              placeholder="Search City..."
//              value={searchText}
//              onChangeText={handleSearch}
//              autoFocus
//            />
//            <TouchableOpacity onPress={() => setIsSearching(false)}>
//              <Text style={styles.cancelButton}>Cancel</Text>
//            </TouchableOpacity>
//          </View>
//        )}
//      </View>
//      <FlatList
//        data={filteredCities}
//        keyExtractor={(item, index) => index.toString()}
//        renderItem={({ item }) => (
//          <TouchableOpacity style={styles.cityItem}>
//            <Text style={styles.cityText}>{item}</Text>
//          </TouchableOpacity>
//        )}
//      />
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    paddingTop: 50,
//    backgroundColor: '#fff',
//  },
//  header: {
//    flexDirection: 'row',
//    justifyContent: 'center',
//    alignItems: 'center',
//    position: 'relative',
//    marginBottom: 10,
//    paddingTop:40,
//    borderBottomWidth: 1,
//    borderBottomColor: '#ddd',
//    backgroundColor: '#f8f8f8',
//    paddingHorizontal: 10,
//    paddingVertical: 15,
//  },
//  title: {
//    fontSize: 18,
//    fontWeight: 'bold',
//    zIndex: 1,
//    position: 'absolute',
//    color:'#000',
//  },
//  searchIcon: {
//    position: 'absolute',
//    right: 10,
//    zIndex: 2,
//  },
//  backIcon: {
//  padding:10,
//    position: 'absolute',
//    left: 1,
//    zIndex: 2,
//  },
//  searchContainer: {
//    flexDirection: 'row',
//    alignItems: 'center',
//    width: '100%',
//  },
//  searchBar: {
//    flex: 1,
//    borderWidth: 1,
//    borderColor: '#ddd',
//    borderRadius: 5,
//    padding: 5,
//    marginRight: 10,
//    marginTop:-20,
//  },
//  cancelButton: {
//    color: 'blue',
//  },
//  cityItem: {
//    paddingVertical: 15,
//    borderBottomWidth: 1,
//    borderBottomColor: '#ddd',
//    paddingHorizontal: 10,
//  },
//  cityText: {
//    fontSize: 16,
//  },
//});
//
//export default Cities;

//
//import React, { useState, useEffect } from 'react';
//import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
//import { useRoute, useNavigation } from '@react-navigation/native';
//import Icon from 'react-native-vector-icons/Ionicons'; // Correct import for non-Expo projects
//
//const countries = [
//  {
//    id: '1',
//    name: 'United States',
//    flag: '🇺🇸',
//    cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix']
//  },
//  {
//    id: '2',
//    name: 'Canada',
//    flag: '🇨🇦',
//    cities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa']
//  },
//  {
//    id: '3',
//    name: 'Brazil',
//    flag: '🇧🇷',
//    cities: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza']
//  },
//  {
//    id: '4',
//    name: 'United Kingdom',
//    flag: '🇬🇧',
//    cities: ['London', 'Birmingham', 'Manchester', 'Glasgow', 'Liverpool']
//  },
//];
//
//const Cities = () => {
//  const route = useRoute();
//  const navigation = useNavigation();
//  const { countryId } = route.params; // Get the countryId passed from the previous screen
//  const [cities, setCities] = useState([]);
//  const [searchText, setSearchText] = useState('');
//  const [isSearching, setIsSearching] = useState(false);
//
//  useEffect(() => {
//    const country = countries.find(item => item.id === countryId);
//    if (country) {
//      setCities(country.cities); // Set cities based on selected country
//    }
//  }, [countryId]);
//
//  const handleSearch = (text) => {
//    setSearchText(text); // Update search text
//  };
//
//  const filteredCities = cities.filter(city =>
//    city.toLowerCase().includes(searchText.toLowerCase()) // Filter cities based on search text
//  );
//
//  const handleCityClick = (city) => {
//    // Navigate to the next page with country and city details
//    const country = countries.find(item => item.id === countryId);
//    if (country) {
//      navigation.navigate('City', {
//        countryName: country.name,
//        cityName: city,
//      });
//    }
//  };
//
//  return (
//    <View style={styles.container}>
//      <View style={styles.header}>
//        {!isSearching ? (
//          <>
//            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
//              <Icon name="arrow-back" size={28} color="black" />
//            </TouchableOpacity>
//            <Text style={styles.title}>Select City</Text>
//            <TouchableOpacity
//              onPress={() => setIsSearching(true)} // Enable search mode
//              style={styles.searchIcon}
//            >
//              <Icon name="search" size={28} color="black" />
//            </TouchableOpacity>
//          </>
//        ) : (
//          <View style={styles.searchContainer}>
//            <TextInput
//              style={styles.searchBar}
//              placeholder="Search City..."
//              value={searchText}
//              onChangeText={handleSearch}
//              autoFocus
//            />
//            <TouchableOpacity onPress={() => setIsSearching(false)}>
//              <Text style={styles.cancelButton}>Cancel</Text>
//            </TouchableOpacity>
//          </View>
//        )}
//      </View>
//      <FlatList
//        data={filteredCities}
//        keyExtractor={(item, index) => index.toString()}
//        renderItem={({ item }) => (
//          <TouchableOpacity
//            style={styles.cityItem}
//            onPress={() => handleCityClick(item)} // Handle city click
//          >
//            <Text style={styles.cityText}>{item}</Text>
//          </TouchableOpacity>
//        )}
//      />
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    paddingTop: 50,
//    backgroundColor: '#fff',
//  },
//  header: {
//    flexDirection: 'row',
//    justifyContent: 'center',
//    alignItems: 'center',
//    position: 'relative',
//    marginBottom: 10,
//    paddingTop: 40,
//    borderBottomWidth: 1,
//    borderBottomColor: '#ddd',
//    backgroundColor: '#f8f8f8',
//    paddingHorizontal: 10,
//    paddingVertical: 15,
//  },
//  title: {
//    fontSize: 18,
//    fontWeight: 'bold',
//    zIndex: 1,
//    position: 'absolute',
//    color: '#000',
//  },
//  searchIcon: {
//    position: 'absolute',
//    right: 10,
//    zIndex: 2,
//  },
//  backIcon: {
//    padding: 10,
//    position: 'absolute',
//    left: 1,
//    zIndex: 2,
//  },
//  searchContainer: {
//    flexDirection: 'row',
//    alignItems: 'center',
//    width: '100%',
//  },
//  searchBar: {
//    flex: 1,
//    borderWidth: 1,
//    borderColor: '#ddd',
//    borderRadius: 5,
//    padding: 5,
//    marginRight: 10,
//    marginTop: -20,
//  },
//  cancelButton: {
//    color: 'blue',
//  },
//  cityItem: {
//    paddingVertical: 15,
//    borderBottomWidth: 1,
//    borderBottomColor: '#ddd',
//    paddingHorizontal: 10,
//  },
//  cityText: {
//    fontSize: 16,
//  },
//});
//
//export default Cities;


import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Correct import for non-Expo projects

const countries = [
  {
    id: '1',
    name: 'United States',
    flag: '🇺🇸',
    cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix']
  },
  {
    id: '2',
    name: 'Canada',
    flag: '🇨🇦',
    cities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa']
  },
  {
    id: '3',
    name: 'Brazil',
    flag: '🇧🇷',
    cities: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza']
  },
  {
    id: '4',
    name: 'United Kingdom',
    flag: '🇬🇧',
    cities: ['London', 'Birmingham', 'Manchester', 'Glasgow', 'Liverpool']
  },
  {
    id: '5',
    name: 'Germany',
    flag: '🇩🇪',
    cities: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg', 'Stuttgart']
  },
  {
    id: '6',
    name: 'France',
    flag: '🇫🇷',
    cities: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice']
  },
  {
    id: '7',
    name: 'Italy',
    flag: '🇮🇹',
    cities: ['Rome', 'Milan', 'Naples', 'Turin', 'Palermo']
  },
  {
    id: '8',
    name: 'India',
    flag: '🇮🇳',
    cities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai']
  },
  {
    id: '9',
    name: 'China',
    flag: '🇨🇳',
    cities: ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Chongqing']
  },
  {
    id: '10',
    name: 'Japan',
    flag: '🇯🇵',
    cities: ['Tokyo', 'Osaka', 'Yokohama', 'Nagoya', 'Sapporo']
  },
  {
    id: '11',
    name: 'Australia',
    flag: '🇦🇺',
    cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide']
  },
  {
    id: '12',
    name: 'South Korea',
    flag: '🇰🇷',
    cities: ['Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon']
  },
  {
    id: '13',
    name: 'Mexico',
    flag: '🇲🇽',
    cities: ['Mexico City', 'Guadalajara', 'Monterrey', 'Puebla', 'Tijuana']
  },
  {
    id: '14',
    name: 'Russia',
    flag: '🇷🇺',
    cities: ['Moscow', 'Saint Petersburg', 'Novosibirsk', 'Yekaterinburg', 'Kazan']
  },
  {
    id: '15',
    name: 'South Africa',
    flag: '🇿🇦',
    cities: ['Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth']
  },
  {
    id: '16',
    name: 'Spain',
    flag: '🇪🇸',
    cities: ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Zaragoza']
  },
  {
    id: '17',
    name: 'Argentina',
    flag: '🇦🇷',
    cities: ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza', 'La Plata']
  },
  {
    id: '18',
    name: 'Turkey',
    flag: '🇹🇷',
    cities: ['Istanbul', 'Ankara', 'Izmir', 'Bursa', 'Antalya']
  },
  {
    id: '19',
    name: 'Saudi Arabia',
    flag: '🇸🇦',
    cities: ['Riyadh', 'Jeddah', 'Mecca', 'Medina', 'Dammam']
  },
  {
    id: '20',
    name: 'Netherlands',
    flag: '🇳🇱',
    cities: ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht', 'Eindhoven']
  },
  {
    id: '21',
    name: 'Sweden',
    flag: '🇸🇪',
    cities: ['Stockholm', 'Gothenburg', 'Malmö', 'Uppsala', 'Västerås']
  },
  {
    id: '22',
    name: 'Switzerland',
    flag: '🇨🇭',
    cities: ['Zurich', 'Geneva', 'Basel', 'Lausanne', 'Bern']
  },
  {
    id: '23',
    name: 'Norway',
    flag: '🇳🇴',
    cities: ['Oslo', 'Bergen', 'Trondheim', 'Stavanger', 'Drammen']
  },
  {
    id: '24',
    name: 'Denmark',
    flag: '🇩🇰',
    cities: ['Copenhagen', 'Aarhus', 'Odense', 'Aalborg', 'Esbjerg']
  },
  {
    id: '25',
    name: 'Finland',
    flag: '🇫🇮',
    cities: ['Helsinki', 'Espoo', 'Tampere', 'Vantaa', 'Oulu']
  },
  {
    id: '26',
    name: 'New Zealand',
    flag: '🇳🇿',
    cities: ['Auckland', 'Wellington', 'Christchurch', 'Hamilton', 'Tauranga']
  },
  {
    id: '27',
    name: 'Greece',
    flag: '🇬🇷',
    cities: ['Athens', 'Thessaloniki', 'Patras', 'Heraklion', 'Larissa']
  },
  {
    id: '28',
    name: 'Portugal',
    flag: '🇵🇹',
    cities: ['Lisbon', 'Porto', 'Amadora', 'Braga', 'Coimbra']
  },
  {
    id: '29',
    name: 'Israel',
    flag: '🇮🇱',
    cities: ['Jerusalem', 'Tel Aviv', 'Haifa', 'Ashdod', 'Rishon LeZion']
  },
  {
    id: '30',
    name: 'Egypt',
    flag: '🇪🇬',
    cities: ['Cairo', 'Alexandria', 'Giza', 'Shubra El-Kheima', 'Port Said']
  }
];
const Cities = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { countryId } = route.params; // Get the countryId passed from the previous screen
  const [cities, setCities] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const country = countries.find(item => item.id === countryId);
    if (country) {
      setCities(country.cities); // Set cities based on selected country
    }
  }, [countryId]);

  const handleSearch = (text) => {
    setSearchText(text); // Update search text
  };

  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(searchText.toLowerCase()) // Filter cities based on search text
  );

  const handleCityClick = (city) => {
    // Navigate to the next page with country and city details
    const country = countries.find(item => item.id === countryId);
    if (country) {
      navigation.navigate('City', {
        countryName: country.name,
        cityName: city,
        countryid: countryId,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {!isSearching ? (
          <>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
              <Icon name="arrow-back" size={28} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>Select City</Text>
            <TouchableOpacity
              onPress={() => setIsSearching(true)} // Enable search mode
              style={styles.searchIcon}
            >
              <Icon name="search" size={28} color="black" />
            </TouchableOpacity>
          </>
        ) : (
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchBar}
              placeholder="Search City..."
              value={searchText}
              onChangeText={handleSearch}
              autoFocus
            />
            <TouchableOpacity onPress={() => setIsSearching(false)}>
              <Text style={styles.cancelButton}>Cancel</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <FlatList
        data={filteredCities}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cityItem}
            onPress={() => handleCityClick(item)} // Handle city click
          >
            <Text style={styles.cityText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 10,
    paddingTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    zIndex: 1,
    position: 'absolute',
    color: '#000',
  },
  searchIcon: {
    position: 'absolute',
    right: 10,
    zIndex: 2,
  },
  backIcon: {
    padding: 10,
    position: 'absolute',
    left: 1,
    zIndex: 2,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  searchBar: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 5,
    marginRight: 10,
    marginTop: -20,
  },
  cancelButton: {
    color: 'blue',
  },
  cityItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingHorizontal: 10,
  },
  cityText: {
    fontSize: 16,
  },
});

export default Cities;
