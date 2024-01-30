// HomeScreen.tsx
import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, Platform, BackHandler, ScrollView, TouchableOpacity } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { useFocusEffect } from '@react-navigation/native';
import DoctorCard from '../../components/DoctorCard';
import MainCard from '../../components/MainCard';
import TopContainer from '../../components/TopContainer';


type HomeScreenProps = {
    navigation: any;
};


const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const handleFocus = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    useFocusEffect(handleFocus);

    useEffect(() => {
        const handleBackPress = () => {
            return false;
        };
        BackHandler.addEventListener('hardwareBackPress', handleBackPress);

        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
        };
    }, []);

    return (
        <SafeAreaView style={styles.container}>

            {/* Search Doctor Input */}
                <TopContainer navigation={undefined} />
            <ScrollView>
                <View style={{ display: 'flex', paddingTop: 10 }}>
                    <View style={styles.cardContainer}>
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <MainCard />
                    </View>
                </View>
                <View style={{ display: 'flex', paddingTop: 30 }}>
                    <View style={styles.cardContainer}>
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <MainCard />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: Platform.OS === 'android' ? 15 : 0,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 16,
    },
    searchContainer: {
        marginTop: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        height: 40,
        width: '100%',
    },
    cardContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    profileContainer: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 25,
        overflow: 'hidden',
        marginRight: 10,
    }
});

export default HomeScreen;