import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  Animated,
  Button,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {QuestionItem} from '../components';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

const Questions = (props) => {
  const listRef = useRef(null);
  const [currentIndex, setCurrentIndex]=useState(0)
  const questionList = useSelector(state =>state.questions);
  const dispatch = useDispatch()
  
  const renderQuestions= ({item}) => (
    <QuestionItem 
      questionObject={item}
      onAnswer={answer}
    />
    )

    const answer = (result) =>{
      dispatch({type:"SET_SCORE", payload:{isTrue: result}})
      const newIndex= currentIndex + 1;
      if (newIndex === questionList.length)
        return props.navigation.navigate("Finish")

      listRef.current.scrollToIndex({index: newIndex});
      setCurrentIndex(newIndex)
    }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>

      <View style={{backgroundColor:"#3949ab", alignItems:"center"}}>
          <CountdownCircleTimer
            isPlaying
            onComplete={() => props.navigation.navigate("Finish")}
            duration={25}
            colors={[
              ['#fff176', 0.4],
              ['#ba68c8', 0.4],
              ['#ff8a65', 0.2],
            ]}
          >
            {({ remainingTime, animatedColor }) => (
              <Animated.Text style={{ color: animatedColor, fontSize:45 }}>
                {remainingTime}
              </Animated.Text>
            )}
          </CountdownCircleTimer>
        </View>
        <FlatList
          ref={listRef}
          horizontal
          scrollEnabled={false}
          keyExtractor={(_, i) => i.toString()}
          data={questionList}
          renderItem={renderQuestions}
        />
      </View>
    </SafeAreaView>
  );
};

export {Questions};
