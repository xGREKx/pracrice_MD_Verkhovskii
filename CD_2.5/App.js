import React, {useState, useRef} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  Button,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const {width} = Dimensions.get('window');
const SPACING = 12;
const THUMB_SIZE = 83;

const IMAGES = {
  image1: require('./assets/images/1.jpg'),
  image2: require('./assets/images/2.jpg'),
  image3: require('./assets/images/3.jpg'),
  image4: require('./assets/images/4.jpg'),
  image5: require('./assets/images/5.jpg'),
  image6: require('./assets/images/6.jpg'),
  image7: require('./assets/images/7.jpg'),
};

const App = () => {
  const carouselRef = useRef();
  const flatListRef = useRef();
  const [images, setImages] = useState([
    {id: '1', image: IMAGES.image1},
    {id: '2', image: IMAGES.image2},
    {id: '3', image: IMAGES.image3},
    {id: '4', image: IMAGES.image4},
    {id: '5', image: IMAGES.image5},
    {id: '6', image: IMAGES.image6},
    {id: '7', image: IMAGES.image7},
  ]);
  const [indexSelected, setIndexSelected] = useState(0);

  const onSelect = (indexSelected) => {
    setIndexSelected(indexSelected);

    flatListRef?.current?.scrollToOffset({
      offset: indexSelected * THUMB_SIZE,
      animated: true,
    });
  };

  const onTouchThumbnail = (touched) => {
    if (touched === indexSelected) return;

    carouselRef?.current?.snapToItem(touched);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'black', alignItems: 'center'}}>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          fontFamily: 'Georgia',
          fontSize: 14,
          marginTop: 90,
          marginBottom: 25
          }}>
          Верховский Григорий ПИ20-4
      </Text>
      <View style={{flex: 1 / 2, marginTop: 100, bottom: -25, position: 'relative'}}>
        <Carousel
          ref={carouselRef}
          layout="default"
          data={images}
          sliderWidth={width}
          itemWidth={width}
          onSnapToItem={(index) => onSelect(index)}
          renderItem={({item, index}) => (
            <Image
              key={index}
              style={{width: '100%', height: '100%', borderRadius: 5,}}
              source={item.image}
            />
          )}
        />
        <Pagination
          inactiveDotColor="gray"
          dotColor={'white'}
          activeDotIndex={indexSelected}
          dotsLength={images.length}
          animatedDuration={150}
          inactiveDotScale={1}
        />
      
      <FlatList
        ref={flatListRef}
        horizontal={true}
        data={images}
        style={{position: 'absolute', bottom: -90}}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: SPACING,
        }}
        keyExtractor={(item) => item.id}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => onTouchThumbnail(index)}
            activeOpacity={0.9}>
            
            <Image
              style={{
                width: THUMB_SIZE,
                height: THUMB_SIZE,
                marginRight: SPACING,
                borderRadius: 90,
                borderWidth: index === indexSelected ? 4 : 0.75,
                borderColor: index === indexSelected ? 'white' : 'grey',
              }}
              source={item.image}
            />
          </TouchableOpacity>
        )}
        />
      </View>
      </View>
  );
  };

export default App;