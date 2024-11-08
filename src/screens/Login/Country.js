//import React, { useState } from 'react';
//import { View, TextInput, Text, FlatList, StyleSheet } from 'react-native';
//import { Picker } from '@react-native-picker/picker';
//
//export default function Country() {
//  const countries = [
//    { label: 'United States', value: 'us' },
//    { label: 'Canada', value: 'ca' },
//    { label: 'United Kingdom', value: 'gb' },
//    { label: 'Australia', value: 'au' },
//    { label: 'India', value: 'in' },
//    // Add more countries as needed
//  ];
//
//  const [searchText, setSearchText] = useState('');
//  const [selectedCountry, setSelectedCountry] = useState(null);
//
//  // Filter countries based on search text
//  const filteredCountries = countries.filter(country =>
//    country.label.toLowerCase().includes(searchText.toLowerCase())
//  );
//
//  return (
//    <View style={styles.container}>
//      {/* Search Bar */}
//      <TextInput
//        style={styles.searchBar}
//        placeholder="Search countries"
//        value={searchText}
//        onChangeText={setSearchText}
//      />
//
//      {/* Country Select Dropdown */}
//      <Picker
//        selectedValue={selectedCountry}
//        onValueChange={(value) => setSelectedCountry(value)}
//        style={pickerSelectStyles.picker}
//      >
//        <Picker.Item label="Select a country..." value={null} />
//        {filteredCountries.map((country) => (
//          <Picker.Item key={country.value} label={country.label} value={country.value} />
//        ))}
//      </Picker>
//
//      {/* Display Selected Country */}
//      {selectedCountry && (
//        <Text style={styles.selectedCountry}>
//          Selected Country: {countries.find(c => c.value === selectedCountry)?.label}
//        </Text>
//      )}
//
//      {/* Country List Below Search Bar */}
//      <FlatList
//        data={filteredCountries}
//        renderItem={({ item }) => (
//          <Text style={styles.countryItem}>{item.label}</Text>
//        )}
//        keyExtractor={(item) => item.value}
//      />
//    </View>
//  );
//}
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    padding: 20,
//    backgroundColor: '#fff',
//  },
//  searchBar: {
//    height: 40,
//    borderColor: '#ccc',
//    borderWidth: 1,
//    paddingLeft: 10,
//    marginBottom: 10,
//    borderRadius: 5,
//  },
//  selectedCountry: {
//    marginTop: 10,
//    fontSize: 16,
//    fontWeight: 'bold',
//  },
//  countryItem: {
//    padding: 10,
//    fontSize: 16,
//    borderBottomColor: '#ddd',
//    borderBottomWidth: 1,
//  },
//});
//
//const pickerSelectStyles = StyleSheet.create({
//  picker: {
//    height: 50,
//    borderColor: '#ccc',
//    borderWidth: 1,
//    borderRadius: 5,
//    color: 'black',
//    fontSize: 16,
//    width: '100%',
//    marginBottom: 20,
//  },
//});
//
//
//import React, { useState } from 'react';
//import { View, TextInput, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//
//export default function Country() {
//  const countries = [
//    { label: 'United States', value: 'us' },
//    { label: 'Canada', value: 'ca' },
//    { label: 'United Kingdom', value: 'gb' },
//    { label: 'Australia', value: 'au' },
//    { label: 'India', value: 'in' },
//    // Add more countries as needed
//  ];
//
//  const [searchText, setSearchText] = useState('');
//  const [selectedCountry, setSelectedCountry] = useState(null);
//
//  // Filter countries based on search text
//  const filteredCountries = countries.filter(country =>
//    country.label.toLowerCase().includes(searchText.toLowerCase())
//  );
//
//  return (
//    <View style={styles.container}>
//      {/* Search and Select Row */}
//      <View style={styles.searchSelectRow}>
//        {/* Select Country Label */}
//        <Text style={styles.selectLabel}>Select Country</Text>
//
//        {/* Search Icon */}
//        <TouchableOpacity onPress={() => setSearchText('')}>
//          <MaterialIcons name="search" size={24} color="black" />
//        </TouchableOpacity>
//      </View>
//
//      {/* Search Bar */}
//      <TextInput
//        style={styles.searchBar}
//        placeholder="Search countries"
//        value={searchText}
//        onChangeText={setSearchText}
//      />
//
//      {/* Display Selected Country */}
//      {selectedCountry && (
//        <Text style={styles.selectedCountry}>
//          Selected Country: {selectedCountry}
//        </Text>
//      )}
//
//      {/* Country List (Scrollable) */}
//      <FlatList
//        data={filteredCountries}
//        renderItem={({ item }) => (
//          <TouchableOpacity onPress={() => setSelectedCountry(item.label)}>
//            <Text style={styles.countryItem}>{item.label}</Text>
//          </TouchableOpacity>
//        )}
//        keyExtractor={(item) => item.value}
//      />
//    </View>
//  );
//}
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    padding: 20,
//    backgroundColor: '#fff',
//  },
//  searchSelectRow: {
//    flexDirection: 'row',
//    alignItems: 'center',
//    justifyContent: 'space-between',
//    marginBottom: 10,
//  },
//  selectLabel: {
//    fontSize: 16,
//    fontWeight: 'bold',
//    color: 'black',
//  },
//  searchBar: {
//    height: 40,
//    borderColor: '#ccc',
//    borderWidth: 1,
//    paddingLeft: 10,
//    borderRadius: 5,
//    marginBottom: 10,
//  },
//  selectedCountry: {
//    marginTop: 10,
//    fontSize: 16,
//    fontWeight: 'bold',
//  },
//  countryItem: {
//    padding: 10,
//    fontSize: 16,
//    borderBottomColor: '#ddd',
//    borderBottomWidth: 1,
//  },
//});


//
//import React, { useState } from 'react';
//import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';
//import { useNavigation } from '@react-navigation/native';
//
//const countries = Array.from({ length: 30 }, (_, i) => ({
//  id: i.toString(),
//  name: `Country ${i + 1}`,
//  flag: '🌐',
//}));
//
//const SelectCountry = () => {
//  const [search, setSearch] = useState('');
//  const navigation = useNavigation();
//
//  const filteredCountries = countries.filter(country =>
//    country.name.toLowerCase().includes(search.toLowerCase())
//  );
//
//  return (
//    <View style={styles.container}>
//      {/* Header */}
//      <View style={styles.header}>
//        <TouchableOpacity onPress={() => navigation.goBack()}>
//          <Icon name="arrow-back" size={24} color="black" />
//        </TouchableOpacity>
//        <Text style={styles.title}>Select Country</Text>
//        <TouchableOpacity onPress={() => alert('Search icon clicked')}>
//          <Icon name="search" size={24} color="black" />
//        </TouchableOpacity>
//      </View>
//
//      {/* Search Bar */}
//      <TextInput
//        placeholder="Search Country"
//        value={search}
//        onChangeText={setSearch}
//        style={styles.searchBar}
//      />
//
//      {/* Country List */}
//      <FlatList
//        data={filteredCountries}
//        keyExtractor={(item) => item.id}
//        renderItem={({ item }) => (
//          <TouchableOpacity style={styles.countryItem} onPress={() => alert(`Selected ${item.name}`)}>
//            <Text style={styles.countryText}>{item.flag} {item.name}</Text>
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
//    paddingTop: 10,
//    backgroundColor: '#fff',
//  },
//  header: {
//    flexDirection: 'row',
//    alignItems: 'center',
//    justifyContent: 'space-between',
//    paddingHorizontal: 10,
//    paddingVertical: 15,
//    borderBottomWidth: 1,
//    borderBottomColor: '#ddd',
//    backgroundColor: '#f8f8f8',
//    zIndex: 1,
//  },
//  title: {
//    fontSize: 18,
//    fontWeight: 'bold',
//  },
//  searchBar: {
//    borderBottomWidth: 1,
//    borderColor: '#ddd',
//    padding: 8,
//    margin: 10,
//    fontSize: 16,
//  },
//  countryItem: {
//    paddingVertical: 15,
//    paddingHorizontal: 20,
//    borderBottomWidth: 1,
//    borderBottomColor: '#ddd',
//  },
//  countryText: {
//    fontSize: 16,
//  },
//});
//
//export default SelectCountry;

//
//import React, { useState } from 'react';
//import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';
//import { useNavigation } from '@react-navigation/native';
//
//const countries = Array.from({ length: 30 }, (_, i) => ({
//  id: i.toString(),
//  name: `Country ${i + 1}`,
//  flag: '🌐', // Placeholder flag
//}));
//
//const SelectCountry = () => {
//  const [search, setSearch] = useState('');
//  const [isSearching, setIsSearching] = useState(false); // State to toggle search view
//  const navigation = useNavigation();
//
//  // Filter countries based on search input
//  const filteredCountries = countries.filter(country =>
//    country.name.toLowerCase().includes(search.toLowerCase())
//  );
//
//  return (
//    <View style={styles.container}>
//      {/* Header or Search Bar */}
//      {!isSearching ? (
//        <View style={styles.header}>
//          <TouchableOpacity onPress={() => navigation.goBack('Finger')}>
//            <Icon name="arrow-back" size={36} color="black" />
//          </TouchableOpacity>
//          <Text style={styles.title}>Select Country</Text>
//          <TouchableOpacity onPress={() => setIsSearching(true)}>
//            <Icon name="search" size={34} color="black" />
//          </TouchableOpacity>
//        </View>
//      ) : (
//        <View style={styles.searchHeader}>
//          <TextInput
//            placeholder="Search Country"
//            value={search}
//            onChangeText={setSearch}
//            style={styles.searchBar}
//            autoFocus={true} // Focuses the search bar when it appears
//          />
//          <TouchableOpacity onPress={() => { setIsSearching(false); setSearch(''); }}>
//            <Text style={styles.cancelButton}>Cancel</Text>
//          </TouchableOpacity>
//        </View>
//      )}
//
//      {/* Country List */}
//      <FlatList
//        data={filteredCountries}
//        keyExtractor={(item) => item.id}
//        renderItem={({ item }) => (
//          <TouchableOpacity style={styles.countryItem} onPress={() => alert(`Selected ${item.name}`)}>
//            <Text style={styles.countryText}>{item.flag} {item.name}</Text>
//          </TouchableOpacity>
//        )}
//        showsVerticalScrollIndicator={true} // Shows the scroll bar
//      />
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    paddingTop: 10,
//    backgroundColor: '#fff',
//  },
//  header: {
//    flexDirection: 'row',
//    alignItems: 'center',
//    justifyContent: 'space-between',
//    paddingHorizontal: 15,
//    paddingVertical: 39,
//    borderBottomWidth: 1,
//    borderBottomColor: '#ddd',
//    backgroundColor: '#f8f8f8',
//    zIndex: 1,
//  },
//  searchHeader: {
//    flexDirection: 'row',
//    alignItems: 'center',
//    paddingHorizontal: 10,
//    paddingVertical: 15,
//    borderBottomWidth: 1,
//    borderBottomColor: '#ddd',
//    backgroundColor: '#f8f8f8',
//    zIndex: 1,
//  },
//  title: {
//    fontSize: 18,
//    fontWeight: 'bold',
//  },
//  searchBar: {
//    flex: 1,
//    borderBottomWidth: 1,
//    borderColor: '#ddd',
//    paddingLeft: 10,
//    fontSize: 16,
//  },
//  cancelButton: {
//    fontSize: 16,
//    color: '#007AFF',
//    marginLeft: 10,
//  },
//  countryItem: {
//    paddingVertical: 15,
//    paddingHorizontal: 20,
//    borderBottomWidth: 1,
//    borderBottomColor: '#ddd',
//  },
//  countryText: {
//    fontSize: 16,
//  },
//});
//
//export default SelectCountry;



import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const countries = [
  { id: '1', name: 'United States', flag: '🇺🇸' },
  { id: '2', name: 'Canada', flag: '🇨🇦' },
  { id: '3', name: 'Brazil', flag: '🇧🇷' },
  { id: '4', name: 'United Kingdom', flag: '🇬🇧' },
  { id: '5', name: 'Germany', flag: '🇩🇪' },
  { id: '6', name: 'France', flag: '🇫🇷' },
  { id: '7', name: 'Italy', flag: '🇮🇹' },
  { id: '8', name: 'India', flag: '🇮🇳' },
  { id: '9', name: 'China', flag: '🇨🇳' },
  { id: '10', name: 'Japan', flag: '🇯🇵' },
  { id: '11', name: 'Australia', flag: '🇦🇺' },
  { id: '12', name: 'South Korea', flag: '🇰🇷' },
  { id: '13', name: 'Mexico', flag: '🇲🇽' },
  { id: '14', name: 'Russia', flag: '🇷🇺' },
  { id: '15', name: 'South Africa', flag: '🇿🇦' },
  { id: '16', name: 'Spain', flag: '🇪🇸' },
  { id: '17', name: 'Argentina', flag: '🇦🇷' },
  { id: '18', name: 'Turkey', flag: '🇹🇷' },
  { id: '19', name: 'Saudi Arabia', flag: '🇸🇦' },
  { id: '20', name: 'Netherlands', flag: '🇳🇱' },
  { id: '21', name: 'Sweden', flag: '🇸🇪' },
  { id: '22', name: 'Switzerland', flag: '🇨🇭' },
  { id: '23', name: 'Norway', flag: '🇳🇴' },
  { id: '24', name: 'Denmark', flag: '🇩🇰' },
  { id: '25', name: 'Finland', flag: '🇫🇮' },
  { id: '26', name: 'New Zealand', flag: '🇳🇿' },
  { id: '27', name: 'Greece', flag: '🇬🇷' },
  { id: '28', name: 'Portugal', flag: '🇵🇹' },
  { id: '29', name: 'Israel', flag: '🇮🇱' },
  { id: '30', name: 'Egypt', flag: '🇪🇬' },
];
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

const Country = () => {
  const [search, setSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false); // State to toggle search view
  const navigation = useNavigation();

  // Filter countries based on search input
  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Header or Search Bar */}
      {!isSearching ? (
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={28} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Select Country</Text>
          <TouchableOpacity onPress={() => setIsSearching(true)}>
            <Icon name="search" size={28} color="black" />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.searchHeader}>
          <TextInput
            placeholder="Search Country"
            value={search}
            onChangeText={setSearch}
            style={styles.searchBar}
            autoFocus={true} // Focuses the search bar when it appears
          />
          <TouchableOpacity onPress={() => { setIsSearching(false); setSearch(''); }}>
            <Text style={styles.cancelButton}>Cancel</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Country List */}
      <FlatList
        data={filteredCountries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.countryItem}
            onPress={() => {
              // Navigate to cities screen with the selected country
              navigation.navigate('Cities', { countryId: item.id });
            }}
          >
            <Text style={styles.countryText}>{item.flag} {item.name}</Text>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={true} // Shows the scroll bar
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#f8f8f8',
    zIndex: 1,
    marginBottom: 10,
  },
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#f8f8f8',
    zIndex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#000',
  },
  searchBar: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingLeft: 10,
    fontSize: 16,
  },
  cancelButton: {
    fontSize: 16,
    color: '#007AFF',
    marginLeft: 10,
  },
  countryItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  countryText: {
    fontSize: 16,
  },
});

export default Country;
