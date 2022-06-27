import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import MainPage from './pages/MainPage/index.js';
import ContentPage from './pages/ContentPage/index';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// redux
import { useDispatch } from 'react-redux';
import { setTimer } from './redux/actions/timer';
import { setData } from './redux/actions/data';

const Stack = createNativeStackNavigator();

export default function Navigate() {
  const dispatch = useDispatch();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='MainPage' component={MainPage} options={{ title: 'Главная' }} />
        <Stack.Screen
          name='ContentPage'
          component={ContentPage}
          options={({ navigation }) => ({
            title: 'Содержание',
            headerLeft: () => (
              <TouchableOpacity
                style={styles.btnBack}
                onPress={() => {
                  dispatch(setData());
                  dispatch(setTimer(true));
                  navigation.navigate('MainPage');
                }}
              >
                <Text style={styles.btnBackText}>Назад</Text>
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  btnBack: {
    backgroundColor: 'black',
    borderColor: '#FFFFFF',
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  btnBackText: {
    color: 'white',
  },
});
