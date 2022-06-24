import { StyleSheet, Text, View } from 'react-native';

export default function ContentPage({ route }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.contentText, styles.contentActor]}>
        Actor: {route.params.item.actor.display_login}
      </Text>
      <Text style={[styles.contentText, styles.contentRepo]}>
        Repo: {route.params.item.repo.name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentText: {
    width: '100%',
    textAlign: 'center',
    marginTop: 25,
  },
  contentActor: {
    color: 'red',
    fontSize: 32,
  },
  contentRepo: {
    color: 'blue',
    fontSize: 18,
  },
});
