import React from 'react';
import {SafeAreaView, View, TouchableOpacity,  Text, } from 'react-native';

import {useSelector} from "react-redux";

import {finishPage} from './styles';

const Finish = (props) => {
  const score = useSelector(state => state.score)
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={finishPage.container}>
        <Text style={finishPage.text}>Your score is {score}</Text>
      </View>
      <View style={finishPage.buttonContainer}>
        <TouchableOpacity style={finishPage.button} onPress={() => props.navigation.navigate("Intro")}>
          <Text style={finishPage.buttonText}>Again!!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export {Finish};
