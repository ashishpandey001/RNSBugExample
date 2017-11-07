import React, { Component } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import Sound from 'react-native-sound';
export default class App extends Component<{}> {
  playSound = filename => {
    let soundObject = new Sound(filename, Sound.MAIN_BUNDLE, err => {
      if (err) {
        Alert.alert(
          'Failed to play sound file',
          'Could not play the sound file',
          [{ text: 'OK', onPress: () => console.log() }],
          { cancelable: false }
        );
      } else {
        Alert.alert(
          'Successfully played the sound file',
          'Started playing bells.mp3',
          [{ text: 'OK', onPress: () => console.log() }],
          { cancelable: false }
        );
        soundObject.play();
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Button
            title={'Bells sound Button'}
            onPress={() => this.playSound('bells.mp3')}
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Button
            title={'Invalid file Button'}
            onPress={() => this.playSound('beels.mp3')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
