import Axios from 'axios';
import React, {useState} from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Animated,} from 'react-native';
import {useDispatch} from "react-redux"

import { CategorySelectModal, TimerModalComponent } from '../components';
import {introPage} from './styles';



const Intro = (props) => {
  const [modalFlag, setModalFlag]=useState(false)
  const [timerFlag, setTimerFlag] = useState(false);
  const [counterFlag, setCounterFlag]=useState(false)
  const dispatch= useDispatch()
  

  const startGame = (selectedcategory) =>{
    Axios.get(`https://opentdb.com/api.php?`, {
          params:{
            amount: 10,
            category: selectedcategory.id,
            type: "boolean",
            encode: "base64"
          }
        
      })
      .then((res) => {
        const {data: {results: questions},} = res;
        dispatch({type: "SET_QUESTIONS", payload: {questions}})
      } )
  
      setModalFlag(false)
      setTimerFlag(true)
      setCounterFlag(true)
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        
        <View style={introPage.container}>
          <Text style={introPage.bannerText}>Trivia!</Text>
        </View>

        <View style={introPage.container}>
          <TouchableOpacity 
            style={introPage.buttonContainer} 
            onPress={() => setModalFlag(true)} 
            >
            <Text style={introPage.buttonText} >Start!</Text>
          </TouchableOpacity>
        </View>

        <CategorySelectModal 
          visibility={modalFlag}  
          onClose={() => setModalFlag(false)} 
          onCategorySelect={startGame}
        />

        <TimerModalComponent 
          visibility={timerFlag} 
          counterFlag={counterFlag} 
          onTimerCompleted={() =>{
            props.navigation.navigate("Questions")
            setTimerFlag(false)
          }}/>

      </View>
    </SafeAreaView>
  );
};

export {Intro};
