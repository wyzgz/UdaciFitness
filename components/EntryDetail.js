import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native'
import TextButton from './TextButton'
import { connect } from 'react-redux'
import MetricCard from './MetricCard'
import { removeEntry} from '../utils/api'
import { addEntry } from '../actions'
import { white } from '../utils/colors'
import { timeToString , getDailyReminderValue} from '../utils/helpers'
/**
 * EntryDetail
 */
 class EntryDetail extends Component {
   static navigationOptions = ({ navigation }) => {
    const { entryId } = navigation.state.params

    const year = entryId.slice(0, 4)
    const month = entryId.slice(5,7)
    const day = entryId.slice(8)

    return {
      title: `${month}/${day}/${year}`
    }
  }
  shouldComponentUpdate(nextProps){
    return nextProps.metrics !== null && !nextProps.metrics.today
  }
  reset = () => {
    const {remove,goBack,entryId}  = this.props

    remove()
    goBack()
    removeEntry(entryId)

  }
  render() {
    const {params} = this.props.navigation.state
    const {entryId,metrics} = this.props
    return (
      <View style={styles.container}>
        <MetricCard entryId={entryId} metrics = {metrics} style = {styles.metrics}/>
        <TextButton style = {{margin:20}} onPress = {this.reset}>
          RESET
        </TextButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 15,
  },
})

function mapDispatchToProps(dispatch,{navigation}){
  const {entryId} = navigation.state.params

  return {
    remove: ()=>dispatch(addEntry({
      [entryId]:timeToString() === entryId
        ? getDailyReminderValue()
        : null
    })),
    goBack: ()=> navigation.goBack()
  }
}

function mapStateToProps(state,{navigation}){
  const {entryId} = navigation.state.params

  return {
    entryId,
    metrics:state[entryId]
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EntryDetail)
