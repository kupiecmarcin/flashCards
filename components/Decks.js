import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, FlatList } from 'react-native'
import DeckThumb from './DeckThumb'
import { getDecks } from '../actions/index'

class Decks extends Component {

  componentDidMount () {
    this.props.getDecks()
  }

  renderItem = ({ item }) => {
    const { navigation } = this.props
    return <DeckThumb
      deck={item}
      onPress={() => navigation.navigate(
        'Deck',
        { deckTitle: item.title }
      )}/>
  }

  render () {
    const { decks } = this.props
    return (
      <View>
        <FlatList
          data={decks}
          renderItem={this.renderItem}/>
      </View>
    )
  }
}

function mapStateToProps (state) {
  return { decks: Object.keys(state).map(deck => (state[deck])) }
}

export default connect(mapStateToProps, { getDecks })(Decks)