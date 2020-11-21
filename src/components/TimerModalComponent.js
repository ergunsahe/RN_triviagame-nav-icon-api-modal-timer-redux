import React from "react";
import {View, Animated} from "react-native"
import Modal from "react-native-modal"
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

const TimerModalComponent =(props) =>{
    return(
        <Modal
            backdropOpacity={0.2}
            isVisible={props.visibility}
        >
           <View style={{backgroundColor:"#3949ab", alignItems:"center", padding:20, borderRadius:10}}>
              <CountdownCircleTimer
                isPlaying= {props.counterFlag}
                onComplete={() => props.onTimerCompleted()}
                duration={5}
                colors={[
                    ['#fff176', 0.4],
                    ['#ba68c8', 0.4],
                    ['#ff8a65', 0.2],
                ]}>
                {({ remainingTime, animatedColor }) => (
                    <Animated.Text style={{ color: animatedColor, fontSize:65, fontFamily:"Pacifico-Regular" }}>
                        {remainingTime}
                    </Animated.Text>
                )}
              </CountdownCircleTimer>
            </View>
        
        </Modal>
    )
}
export {TimerModalComponent}