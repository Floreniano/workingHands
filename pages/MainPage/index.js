import { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import classNames from 'classnames';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { updateData } from '../../redux/actions/data';
import { setTimer } from '../../redux/actions/timer';

export default function MainPage({ navigation }) {
  const { data, timer } = useSelector(({ data, timer }) => {
    return {
      data: data.currentData,
      timer: timer.timerState,
    };
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateData());
  }, []);

  const [timerNumber, setTimerNumber] = useState(60000);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const update = setInterval(() => {
      if (timer === true && scroll === false) dispatch(updateData());
    }, timerNumber);
    return () => clearInterval(update);
  }, [timer, scroll]);

  const [secondsUpdate, setSecondsUpdate] = useState(15);
  useEffect(() => {
    const timer = setInterval(() => {
      if (secondsUpdate > 0) {
        setSecondsUpdate(secondsUpdate - 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsUpdate]);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={secondsUpdate !== 0}
        style={secondsUpdate !== 0 ? styles.btnUpdateListButton : styles.btnUpdateListButtonActive}
        onPress={() => {
          dispatch(updateData());
          setTimerNumber(60000);
          setSecondsUpdate(15);
        }}
      >
        <Text style={styles.btnUpdateListText}>Обновить список</Text>
      </TouchableOpacity>
      <FlatList
        data={data.slice(0, 25)}
        onScrollBeginDrag={() => setScroll(true)}
        onScrollEndDrag={() => {
          setScroll(false);
          setTimerNumber(60000);
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemList}
            onPress={() => {
              dispatch(setTimer(false));
              navigation.navigate('ContentPage', { item });
            }}
          >
            <Text style={styles.itemListText}>{item.actor.display_login}</Text>
          </TouchableOpacity>
        )}
      ></FlatList>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  itemList: {
    textAlign: 'center',
    width: '100%',
    height: 50,
    marginTop: 20,
  },
  itemListText: {
    textAlign: 'center',
  },
  btnUpdateListButton: {
    textAlign: 'center',
    marginBottom: 30,
    backgroundColor: 'gray',
    paddingVertical: 10,
  },
  btnUpdateListButtonActive: {
    textAlign: 'center',
    marginBottom: 30,
    backgroundColor: 'black',
    paddingVertical: 10,
  },
  btnUpdateListText: {
    color: 'white',
    textAlign: 'center',
  },
});
