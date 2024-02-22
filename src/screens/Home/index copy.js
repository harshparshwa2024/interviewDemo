import React, {useEffect, useState} from 'react';
import {Button, FlatList, Text, TouchableOpacity, View} from 'react-native';

export default function Home({navigation}) {
  const [apiData, setApiData] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [tableData, setTableData] = useState([]);
  const getData = async () => {
    let result = await fetch('https://jsonplaceholder.typicode.com/todos').then(
      res => res.json(),
    ); 

    if (result?.length > 0) {
      setApiData(result);
      setTableData(result.splice(0, pageSize));
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const onChangeStatus = (item, index) => {
    let arr = tableData;
    arr[index].completed = !arr[index].completed;
    setTableData([...arr]);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 100,
      }}>
      <FlatList
        data={tableData}
        onEndReached={() => {
          setTableData([...tableData, ...apiData.splice(pageSize, pageSize+10)]);
          setPageSize(pageSize+9)
        }}
        renderItem={({item, index}) => { 
          return (
            <TouchableOpacity
              onPress={() => {
                onChangeStatus(item, index);
              }}
              key={item.id}
              style={{
                borderWidth: 1,
                marginBottom: 5,
                backgroundColor: item.completed == true ? 'lightgreen' : 'rgba(255,0,0,0.5)',
              }}>
              <Text style={{fontSize:18}}>{item.id + '  :-  ' + item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
