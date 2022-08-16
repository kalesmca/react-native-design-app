import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { dataList } from './config/mock_data';


const FlatListComponent = () =>{
    console.log(dataList)
    return(
        <View>
            {/* {
                dataList.map((data, dataIndex)=>{
                    return(
                        <Text key={dataIndex}>{data.name}</Text>
                    )
                })
            } */}
            <FlatList 
                data={dataList}
                renderItem={({item})=>{
                    return(
                        <View style={styles.list}>
                            <Text>{item.name} myData</Text>
                        </View>
                    )
                }}
            />
            <Text>FlatList Sample screen</Text>
        </View>
    )
}

export default FlatListComponent;

const styles = StyleSheet.create({
    list:{
        marginVertical: 25,
        backgroundColor:"green",
        height:40
        
    }
})