import React from 'react'
import { View, Platform,StatusBar } from 'react-native'
import AddEntry from './components/AddEntry'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import History from './components/History'
import { createMaterialTopTabNavigator,createBottomTabNavigator,createStackNavigator } from 'react-navigation'
import { purple, white ,lightPurp} from './utils/colors'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'
import EntryDetail from './components/EntryDetail'

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = createBottomTabNavigator({
  History: {
    screen: History,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
  AddEntry: {
    screen: AddEntry,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    },
  },
}, {
  navigationOptions: {
    header: null,
    initialRouteName:'History',
    tabBarPosition: Platform.OS === 'ios'? 'bottom':'top',
  },
  tabBarOptions: {
    showIcon: Platform.OS === 'ios'? true: false,
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
  }
})


const TopTabs = createMaterialTopTabNavigator({
  History: {
    screen: History,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
  AddEntry: {
    screen: AddEntry,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    },
  },
}, {
  navigationOptions: {
    header: null,
    initialRouteName:'History',
    tabBarPosition: Platform.OS === 'ios'? 'bottom':'top',
  },
  tabBarOptions: {
    showIcon: Platform.OS === 'ios'? true: false,
    showLabel: true,
    activeTintColor: Platform.OS === 'ios' ? white : purple,
    inactiveTintColor: Platform.OS === 'ios'? 'gray': 'yellow',
    style: {
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
  }
})
const MainNavigator = createStackNavigator({
  Home: {
    screen: TopTabs,
    navigationOptions:{
      title: 'Home'
    }
  },
  EntryDetail: {
    screen: EntryDetail,
  }
},{
  initialRouteName: 'Home',
  navigationOptions:{
    initialRouteName:'Home',
    headerTintColor: white,
    headerStyle:{
      backgroundColor:purple,
    }
  }
})


export default class App extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Home',
      navigationOptions:{
        headerStyle:{
          backgroundColor:purple
        }
      }
    }
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}
