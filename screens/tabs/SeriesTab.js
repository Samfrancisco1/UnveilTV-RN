import React, { Component } from 'react';
import { TouchableOpacity, View, StyleSheet, Text, ImageBackground, Dimensions, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Toolbar from '../../components/Toolbar';
import BackgroundCarousel from '../../components/BackgroundCarousel';

import game from '../../assets/movies/game.jpeg';
import flatmate from '../../assets/movies/flatmate.jpg';
import power from '../../assets/movies/power.jpg';
import blacklist from '../../assets/movies/blacklist.jpg';

const width = Dimensions.get('window').width;
const images = [
  {
      link: 'https://cdn-africamagic.dstv.com/images/Show/2017/10/20/55944/5/1508519133-27_My_Flatmates_Show_Page_1600_x_640__3_.webp',
      name: "My Flatmates"
  },
  {
      link: 'https://www.thewrap.com/wp-content/uploads/2019/02/Game-of-Thrones.jpg',
      name: 'Game of Thrones'
  },
  {
      link: 'https://images.ladbible.com/thumbnail?type=webp&url=http://beta.ems.ladbiblegroup.com/s3/content/75b932825e11000ccaea42d003569dbb.png&quality=70&width=720',
      name: 'Power' 
  }
];

class SeriesTab extends Component {
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
              <ImageBackground source={game} style={styles.cardBackground}>
                <TouchableOpacity>
                    <Ionicons style={{marginTop: 50}} name={'ios-play-circle'} size={80} color={'#fff'} />
                </TouchableOpacity>
                <View style={{height: 30, width: width, backgroundColor: 'rgba(0, 0, 0, 0.4)', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', alignSelf: 'baseline'}}>                           
                    <Text numberOfLines={1} style={{color: '#fff', width: width }}>Game of Thrones</Text> 
                </View>
              </ImageBackground>
            </View>
            <View style={styles.card}>
            <ImageBackground source={power} style={styles.cardBackground}>
                <TouchableOpacity>
                    <Ionicons style={{marginTop: 50}} name={'ios-play-circle'} size={80} color={'#fff'} />
                </TouchableOpacity>
                <View style={{height: 30, width: width, backgroundColor: 'rgba(0, 0, 0, 0.4)', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', alignSelf: 'baseline'}}>                           
                    <Text numberOfLines={1} style={{color: '#fff', width: width }}>Power </Text> 
                </View>
              </ImageBackground>
            </View>
          </View>




          <View style={styles.content}> 
            <View style={styles.card}>
              <ImageBackground source={flatmate} style={styles.cardBackground}>
                <TouchableOpacity>
                    <Ionicons style={{marginTop: 50}} name={'ios-play-circle'} size={80} color={'#fff'} />
                </TouchableOpacity>
                <View style={{height: 30, width: width, backgroundColor: 'rgba(0, 0, 0, 0.4)', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', alignSelf: 'baseline'}}>                           
                    <Text numberOfLines={1} style={{color: '#fff', width: width }}>My Flatmates</Text> 
                </View>
              </ImageBackground>
            </View>
            <View style={styles.card}>
            <ImageBackground source={blacklist} style={styles.cardBackground}>
                <TouchableOpacity>
                    <Ionicons style={{marginTop: 50}} name={'ios-play-circle'} size={80} color={'#fff'} />
                </TouchableOpacity>
                <View style={{height: 30, width: width, backgroundColor: 'rgba(0, 0, 0, 0.4)', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', alignSelf: 'baseline'}}>                           
                    <Text numberOfLines={1} style={{color: '#fff', width: width }}>The Blacklist</Text> 
                </View>
              </ImageBackground>
            </View>
          </View>
          
      </ScrollView>
    )
  }
}

export default SeriesTab;

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