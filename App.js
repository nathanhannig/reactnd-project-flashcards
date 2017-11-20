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
import { white, blue } from './utils/colors'

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
    activeTintColor: white,
    style: {
      height: 56,
      backgroundColor: blue,
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
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      }
    }
  },
  CreateCard: {
    screen: CreateCard,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      }
    }
  },
  ShowQuiz: {
    screen: ShowQuiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      }
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <StatusBarContainer backgroundColor={white} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
