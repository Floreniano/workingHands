import { StyleSheet } from 'react-native';
import MainStack from './navigate';

import { Provider } from 'react-redux';
import { store } from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
