import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import Video from 'react-native-video';

const {width, height} = Dimensions.get('window');

interface VideoItem {
  id: string;
  url: string;
  restaurant: string;
  description: string;
}

// Temporary mock data for the feed
const mockVideos: VideoItem[] = [
  {
    id: '1',
    url: 'https://example.com/video1.mp4', // Replace with actual video URL
    restaurant: 'Burger Palace',
    description: 'Amazing burger experience!',
  },
  {
    id: '2',
    url: 'https://example.com/video2.mp4', // Replace with actual video URL
    restaurant: 'Pizza Heaven',
    description: 'Best pizza in town!',
  },
];

const FeedScreen = () => {
  const renderVideoItem = ({item}: {item: VideoItem}) => (
    <View style={styles.videoContainer}>
      <Video
        source={{uri: item.url}}
        style={styles.video}
        resizeMode="cover"
        repeat
        paused={false}
      />
      <View style={styles.videoInfo}>
        <Text style={styles.restaurantName}>{item.restaurant}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={mockVideos}
        renderItem={renderVideoItem}
        keyExtractor={item => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToInterval={height}
        snapToAlignment="start"
        decelerationRate="fast"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  videoContainer: {
    width,
    height,
    position: 'relative',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  videoInfo: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
  },
  restaurantName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    color: '#fff',
    fontSize: 16,
  },
});

export default FeedScreen; 