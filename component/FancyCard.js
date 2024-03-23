import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
        <View style={[styles.card,styles.cardElevated]}>
        <Image
        source={{
            uri:'https://imageio.forbes.com/specials-images/imageserve/61cc6c0bfa195592fa55465d/Peyto-Lake-in-Banff-National-Park-most-beautiful-place-in-the-world/960x0.jpg?height=473&width=711&fit=bounds'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text  style={styles.cardTitle}>
                Some Mountain

            </Text>
            <Text  style={styles.cardLabel}>
                Some Place,Some City

</Text>
<Text  style={styles.cardDescription}>
    A big description : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, explicabo corrupti quam fugiat molestias totam odit consequatur earum id nulla pariatur saepe? Quis in.

</Text>
<Text  style={styles.cardFooter}>
12 mins away
</Text>
        </View>
        </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 8
        
    },
    card:{
        width: 300,
        height: 360,
        borderRadius: 10,
        marginVertical: 12,
        marginHorizontal: 16,
        

    },
    cardElevated:{
        backgroundColor: 'black',
        elevation:3,
        shadowOffset:{
            width:1,
            height: 1
        }
        

    },
    cardImage:{
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody:{
        flex: 1,
        flexGrow:1,
        paddingHorizontal: 12

    },
    cardTitle:{
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4

    },
    cardLabel:{
        color: 'white',
        fontSize: 16,
        marginBottom: 6

    },
    cardDescription:{
        color: 'white',
        fontSize: 12,
        marginTop: 6,
        marginBottom: 12,
        flexShrink: 1

    },
    cardFooter:{
        color: 'white'

    }
})