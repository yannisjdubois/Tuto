import { StyleSheet, FlatList, SafeAreaView } from 'react-native'
import React from 'react'

// import GetStart from './pages/GetStart'
import Lundi from './components/Lundi'
import JourDeLaSemaine from './components/JourDeLaSemaine'
import AfficheStagiaires from './components/AfficheStagiaires'
import { jours } from './Variables/constante'
import { stagiaires } from './Variables/constante'


// const Stack = createNativeStackNavigator();

const App = () => {
  return ( <SafeAreaView style={{flex:1}}>
    <FlatList
      data={jours}
      renderItem={({item})=><JourDeLaSemaine jour={item.jour}/>}
      keyExtractor={(item) => item.id}

    />

    <FlatList
          data={stagiaires}
          renderItem={({item})=><AfficheStagiaires nom={item.nom} prenom={item.prenom}/>}
          keyExtractor={(item) => item.id}

        />
    </SafeAreaView>

  )
}

export default App

const styles = StyleSheet.create()