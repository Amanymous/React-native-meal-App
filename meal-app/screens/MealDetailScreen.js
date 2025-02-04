import React from 'react';
import { View,Text,StyleSheet,Button } from 'react-native';
// import { Button } from 'react-native-paper';

const MealDetailScreen = props =>{
    return (
        <View style={styles.screen}>
            <Text>The Meal detail Screen!</Text>
            <Button title="Go Back To Categories"
            onPress={()=>{
                props.navigation.popToTop()
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default MealDetailScreen;