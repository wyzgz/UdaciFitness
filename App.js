import React from 'react'
import { View, Platform,StatusBar } from 'react-native'
import AddEntry from './components/AddEntry'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import History from './components/History'
import { createMaterialTopTabNavigator } from 'react-navigation'
import { purple, white ,pink} from './utils/colors'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = createMaterialTopTabNavigator({
  History: {
    screen: History,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={40} color={tintColor} />
    },
  },
  AddEntry: {
    screen: AddEntry,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={40} color={tintColor} />
    },
  },
}, {
  navigationOptions: {
    header: null,
    initialRouteName:'History',
    tabBarPosition: Platform.OS === 'ios'? 'top':'bottom',
  },
  tabBarOptions: {
    showIcon: false,
    showLabel: true,
    activeTintColor: Platform.OS === 'ios' ? white : purple,
    inactiveTintColor: Platform.OS === 'ios'? 'gray': 'yellow',
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? purple : white,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 4,
      shadowOpacity: 3
    },
    indicatorStyle:{
      backgroundColor: purple
    },
    labelStyle: {
      fontSize:18
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <Tabs />
        </View>
      </Provider>
    )
  }
}
