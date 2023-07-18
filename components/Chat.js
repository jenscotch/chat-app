import { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Chat = ({ route, navigation }) => {

    const { name, color } = route.params;

    useEffect(() => {
        navigation.setOptions({ title: name, color: color });
    }, []);

    return (
        <View style={[styles.container, {backgroundColor: color}]}>
            <Text>Hello Screen2!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Chat;