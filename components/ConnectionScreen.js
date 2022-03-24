import * as React from 'react';
import { SafeAreaView, View, StyleSheet, Text, TextInput, TouchableHighlight } from 'react-native';



function ConnectionScreen({ navigation }) {


    const [name, setName] = React.useState(null);
    const [place, setPlace] = React.useState(null);
    const [command, setCommand] = React.useState(null);
    const [color, setColor] = React.useState(null);


    function getParams() {
        const params = {
            nameDevice: name,
            namePlace: place,
            nameCommand: command,
            color: color,
        };
        navigation.navigate('Devices', params);
    }

    return (

        <SafeAreaView style={{ flex: 1 }}>
            <TextInput
                placeholder="Name"
                style={styles.input}
                value={name}
                onChangeText={setName}
            />
            <TextInput
                placeholder="Place"
                style={styles.input}
                value={place}
                onChangeText={setPlace}
            />
            <TextInput
                placeholder="Command"
                style={styles.input}
                value={command}
                onChangeText={setCommand}

            />
            <TextInput
                placeholder="Color"
                style={styles.input}
                value={color}
                onChangeText={setColor}

            />



            <View style={{ height: 40, flexDirection: "row" }}>
                <TouchableHighlight style={styles.th1} onPress={() => navigation.navigate('Devices')}><
                    Text style={styles.txt}>Cancel</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.th} onPress={() => getParams()}>
                    <Text style={styles.txt}>Save</Text>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    th: {
        height: 50,
        width: 100,
        backgroundColor: '#C6C6C6',
        borderColor: 'black',
        borderWidth: 2,
        borderStyle: 'solid',
        marginRight: 10,
        position: 'absolute', right: 0,

    },
    th1: {
        height: 50,
        width: 100,
        backgroundColor: '#C6C6C6',
        borderColor: 'black',
        borderWidth: 2,
        borderStyle: 'solid',
        marginLeft: 10,
    },
    txt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
    }
});

export default ConnectionScreen;