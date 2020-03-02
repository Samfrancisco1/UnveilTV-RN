import React, { Component } from 'react';
import { TouchableOpacity, View, StyleSheet, Text, ImageBackground, Dimensions, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Toolbar from '../../components/Toolbar';
import BackgroundCarousel from '../../components/BackgroundCarousel';

import think from '../../assets/movies/think1.jpg';
import terminator from '../../assets/movies/terminator1.jpg';
import pirate from '../../assets/movies/pirate1.jpg';
import chief from '../../assets/movies/chief.jpg';

const width = Dimensions.get('window').width;
const images = [
  {
      link: 'https://cdn3-www.superherohype.com/assets/uploads/2019/03/Arnold-Schwarzenegger-Terminator-Genisys.jpg',
      name: "Terminator - Genisys"
  },
  {
      link: 'https://i1.wp.com/www.hypehair.com/wp-content/uploads/2014/06/Think-LIke-a-Man-Too.jpg',
      name: 'Think Like a Man'
  },
  {
      link: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Finsertcoin%2Ffiles%2F2017%2F05%2Fpirates-5.jpg',
      name: 'Pirate of the Carribean - Dead men tell no tales' 
  }
];

class MovieTab extends Component {
  constructor(props){
    super(props);  
  }
  render() {
    
    return (
      <ScrollView style={styles.container}>
          <Toolbar { ...this.props } />
          <View style={styles.carousel }>
            <BackgroundCarousel  images={images} />
          </View>
          <View style={styles.content}> 
            <View style={styles.card}>
              <ImageBackground source={think} style={styles.cardBackground}>
                <TouchableOpacity>
                    <Ionicons style={{marginTop: 50}} name={'ios-play-circle'} size={80} color={'#fff'} />
                </TouchableOpacity>
                <View style={{height: 30, width: width, backgroundColor: 'rgba(0, 0, 0, 0.4)', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', alignSelf: 'baseline'}}>                           
                    <Text numberOfLines={1} style={{color: '#fff', width: width }}>Think Like a Man 2</Text> 
                </View>
              </ImageBackground>
            </View>
            <View style={styles.card}>
            <ImageBackground source={terminator} style={styles.cardBackground}>
                <TouchableOpacity>
                    <Ionicons style={{marginTop: 50}} name={'ios-play-circle'} size={80} color={'#fff'} />
                </TouchableOpacity>
                <View style={{height: 30, width: width, backgroundColor: 'rgba(0, 0, 0, 0.4)', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', alignSelf: 'baseline'}}>                           
                    <Text numberOfLines={1} style={{color: '#fff', width: width }}>Terminator</Text> 
                </View>
              </ImageBackground>
            </View>
          </View>




          <View style={styles.content}> 
            <View style={styles.card}>
              <ImageBackground source={pirate} style={styles.cardBackground}>
                <TouchableOpacity>
                    <Ionicons style={{marginTop: 50}} name={'ios-play-circle'} size={80} color={'#fff'} />
                </TouchableOpacity>
                <View style={{height: 30, width: width, backgroundColor: 'rgba(0, 0, 0, 0.4)', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', alignSelf: 'baseline'}}>                           
                    <Text numberOfLines={1} style={{color: '#fff', width: width }}>Pirates of the Carribean</Text> 
                </View>
              </ImageBackground>
            </View>
            <View style={styles.card}>
            <ImageBackground source={chief} style={styles.cardBackground}>
                <TouchableOpacity>
                    <Ionicons style={{marginTop: 50}} name={'ios-play-circle'} size={80} color={'#fff'} />
                </TouchableOpacity>
                <View style={{height: 30, width: width, backgroundColor: 'rgba(0, 0, 0, 0.4)', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', alignSelf: 'baseline'}}>                           
                    <Text numberOfLines={1} style={{color: '#fff', width: width }}>Chief Daddy</Text> 
                </View>
              </ImageBackground>
            </View>
          </View>
          
      </ScrollView>
    )
  }
}

export default MovieTab;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  content: {
      flexDirection: 'row',
    },
    card: {
      height: 250,
      width: 160,
      backgroundColor: 'red',
      margin: 10      
    },
    cardBackground: {
      width: '100%',
      height: '100%',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
});