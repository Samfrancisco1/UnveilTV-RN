import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, ImageBackground, TouchableOpacity, ScrollView, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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

class BackgroundCarousel extends Component {
    scrollRef = React.createRef();
    constructor(){
        super();

        this.state = {
            selectedIndex: 0
        }
    }

    
    componentDidMount = () => {

        setInterval(() => {
            this.setState( prev => ({ selectedIndex: prev.selectedIndex === this.props.images.length - 1 ? 0 : prev.selectedIndex + 1}),
                () => {
                    this.scrollRef.current.scrollTo({
                        animated: true,
                        x: 0,
                        x: width * this.state.selectedIndex
                    })
                }
            );
        }, 3000);
    }

    setSelectedIndex = event => {
        const viewSize = event.nativeEvent.layoutMeasurement.width;

        const contentOffset = event.nativeEvent.contentOffset.x;

        const selectedIndex = Math.floor(contentOffset / viewSize);
        this.setState({selectedIndex});
    }

    render() {
        const { selectedIndex } = this.state;
        return (
        <View style={styles.container}>
            <ScrollView horizontal={true} pagingEnabled={true} ref={this.scrollRef} onMomentumScrollEnd={this.setSelectedIndex}>
            { this.props.images.map(image => {
                
                 
                return <ImageBackground key={image.link} source={{uri: image.link}} style={styles.slider} >
                            <TouchableOpacity>
                                <Ionicons style={{marginTop: 50}} name={'ios-play-circle'} size={125} color={'#fff'} />
                            </TouchableOpacity>
                            <View style={{height: 30, width: width, backgroundColor: 'rgba(0, 0, 0, 0.4)', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', alignSelf: 'baseline'}}>                           
                                <Text numberOfLines={1} style={{color: '#fff', width: width - 80, }}>{image.name}</Text>
                                <Text style={{color: '#fff'}}>120 MINS</Text>
                            </View>
                        </ImageBackground>
                    ;
            }) }
                      
            </ScrollView>
        </View>
        )
    }
}

export default BackgroundCarousel;
const styles = StyleSheet.create({
    container: {

    },
    slider: {
      width: width,
      height: 250,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'green'
    },

});
