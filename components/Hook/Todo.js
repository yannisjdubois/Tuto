import { SafeAreaView, StyleSheet, Text, View, FlatList, Button } from 'react-native'
import React, { useState } from 'react';
import AfficheTodo from '../AfficheTodo'

const initTask = [
    {id:1, tache:"Réussir"},
    {id:2, tache:"Faire le meilleur"}
]

const Todo = () => {
    const [ tasks, setTasks]=useState(initTask)

    const HeaderTodo=()=>{
        return (<Text>Message</Text>)
    }

    const ajouter =()=>{
        console.log("test console.log", tasks.length),

        setTasks([...tasks,

            {id:tasks.length+1,
            tache:"Salut"
        }])
      }

  return (
    <SafeAreaView>
        <Button
        title="Ajouter"
        onPress={(ajouter)}
      />
        <FlatList
        data={tasks}
        renderItem={({item})=><Text>{item.tache}</Text>}
        keyExtractor={item => item.id}
        ListHeaderComponent={HeaderTodo}
      />
    </SafeAreaView>
  )
}

export default Todo

const styles = StyleSheet.create({})