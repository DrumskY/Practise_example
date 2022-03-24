
import * as React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const deviceslist = []




const Item = ({ data: { nameDevice, namePlace, nameCommand, color } }) => (
    <View style={{ justifyContent: 'center', margin: 20, alignItems: 'center', height: 150, width: 150, backgroundColor: color }}>
        <Text style={{ fontSize: 30 }}>{nameDevice}</Text>
        <Text>{namePlace}</Text>

    </View>
);



function DevicesScreen({ route, navigation }) {



    if (route.params != null) {
        let newDevice = route.params;
        console.log(newDevice);
        deviceslist.push(newDevice);
    }
    const renderItem = ({ item }) => (
        <Item data={item} />
    );

    return (
        <SafeAreaView style={styles.container}>

            <TouchableHighlight onPress={() => navigation.navigate('Connection')} style={styles.th}>
                <Text style={styles.txt}>+</Text>
            </TouchableHighlight>

            <FlatList
                horizontal={true}

                data={deviceslist}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />




        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        flexDirection: 'row'
    },

    th: {
        margin: 20,
        height: 150,
        width: 150,
        borderWidth: 3,
        borderStyle: 'dotted',
        borderColor: 'black',


    },
    th1: {


    },
    txt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 100,
    },
    text: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 10,
    }
});



export default DevicesScreen;