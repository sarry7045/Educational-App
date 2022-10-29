import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';

const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}> Suraj Anil Yadav </Text>
      <Text style={styles.paraStyle}> I am a Front-end developer 😀 </Text>

      <View>
        <Image
          style={styles.imgStyle}
          source={{
            uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          }}
        />
      </View>

      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}> About me </Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit. Aenean commodo ligula eget dolor.
        </Text>
      </View>

      <Text style={styles.mainHeader}> Follow me on</Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL('https://www.instagram.com/suraj.28_11/')
          }>
          <Image
            style={styles.iconStyle}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL('https://github.com/sarry7045')}>
          <Image
            style={styles.iconStyle}
            source={require('./Images/github.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL(
              'https://www.linkedin.com/in/suraj-yadav-01752b222/',
            )
          }>
          <Image
            style={styles.iconStyle}
            source={require('./Images/linkedin.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  mainHeader: {
    fontSize: 18,
    color: '#344055',
    textTransform: 'uppercase',
    fontWeight: '500',
    marginTop: 50,
    marginBottom: 10,
    fontFamily: 'JosefinSans_700Bold',
  },
  paraStyle: {
    fontSize: 17,
    color: '#7d7d7d',
    paddingBottom: 30,
  },
  aboutLayout: {
    backgroundColor: '#4c5dab',
    paddingHorizontal: 30,
    marginVertical: 30,
  },
  aboutSubHeader: {
    fontSize: 18,
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: '500',
    marginVertical: 15,
    fontFamily: 'JosefinSans_700Bold',
    alignSelf: 'center',
  },
  aboutPara: {
    color: '#fff',
  },
  menuContainer: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  iconStyle: {
    width: '100%',
    height: 40,
    aspectRatio: 1,
  },
});

export default About;
