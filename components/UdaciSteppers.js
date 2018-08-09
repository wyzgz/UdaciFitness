import React from 'react'
import { View, Text,TouchableOpacity, StyleSheet} from 'react-native'
import {FontAwesome, Entypo } from '@expo/vector-icons'
import {white, gray,purple} from '../utils/colors'


export default function UdaciSteppers ({value,step,unit,onIncrement,onDecrement,max}) {
  return (
    <View style={[styles.row,{ justifyContent:'space-between'}]}>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress = {onDecrement} style={styles.iosBtn}>
          <FontAwesome name='minus' size = {30} color={'black'}/>
        </TouchableOpacity>
        <TouchableOpacity onPress = {onIncrement} style={styles.iosBtn}>
          <FontAwesome name='plus' size = {30} color={'black'}/>
        </TouchableOpacity>
      </View>
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row:{
    flexDirection:'row',
    flex:1,
    alignItems:'center'
  },
  iosBtn:{
    backgroundColor:white,
    borderColor:purple,
    borderRadius:3,
    borderWidth:1,
    padding:5,
    paddingLeft:25,
    paddingRight:25
  }
})
