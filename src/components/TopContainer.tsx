import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type TopContainerProps = {
    navigation: any;
};

const TopContainer: React.FC<TopContainerProps> = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const openDrawer = () => {
        navigation.openDrawer();
    };

    return (
        <View style={styles.searchContainer}>
            <TouchableOpacity onPress={openDrawer}>
                <View style={styles.profileContainer}>

                </View>
            </TouchableOpacity>
            <TextInput
                placeholder="Search for a Doctor"
                style={styles.searchInput}
                value={searchQuery}
                onChangeText={(text) => setSearchQuery(text)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
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
    profileContainer: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 25,
        overflow: 'hidden',
        marginRight: 10,
    },
});

export default TopContainer;