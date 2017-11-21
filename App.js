import React from 'react';
import { View, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import ShowDecks from './components/ShowDecks'
import CreateDeck from './components/CreateDeck'
import ShowDeck from './components/ShowDeck'
import CreateCard from './components/CreateCard'
import ShowQuiz from './components/ShowQuiz'
import { setLocalNotification } from './utils/helpers'

const store = createStore(reducer)

function StatusBarContainer({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  ShowDecks: {
    screen: ShowDecks,
    navigationOptions: {
      tabBarLabel: 'Decks',
    },
  },
  CreateDeck: {
    screen: CreateDeck,
    navigationOptions: {
      tabBarLabel: 'Create Deck',
    },
  },
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: '#fff',
    style: {
      height: 56,
      backgroundColor: '#007aff',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  ShowDeck: {
    screen: ShowDeck,
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#007aff',
      }
    }
  },
  CreateCard: {
    screen: CreateCard,
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#007aff',
      }
    }
  },
  ShowQuiz: {
    screen: ShowQuiz,
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#007aff',
      }
    }
  }
})

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBarContainer backgroundColor={'#fff'} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
