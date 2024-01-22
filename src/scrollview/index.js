import { run } from 'jest';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';


const Abc = () => {
    
    const [data , setdata] = useState([]);
    const [isLoading , setisLoading] = useState(true);

    useEffect(() =>{
        getListPhotos();
        return() =>{
        
        }
    },[])

    getListPhotos = () =>{
    const apiURL = 'https://jsonplaceholder.typicode.com/photos';
    fetch(apiURL)
    .then((res) =>res.json())
    .then((resJson) => {
    setdata(resJson)
    }).catch((error) =>{
    console.log('Error: ' ,error);
    })
    }

    renderItem =({item ,index}) =>{
        return
        <View>
            <Text>{item.title}</Text>
        </View>
    }

    return (
        <SafeAreaView style ={styles.container}>
            <FlatList
                style = {styles.list}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => `key-${item.id}`}
            />
        </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
        flex :1
    },
    list: {
        flex: 1,
        padding: 8
    }
  });

  export default Abc;