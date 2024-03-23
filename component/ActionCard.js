import { StyleSheet, Text, View ,Linking,Image, TouchableOpacity} from 'react-native'
import React from 'react'

export default function ActionCard() {

    function openWebsite(websiteLink){
      Linking.openURL(websiteLink)
        
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      {/* <View style={[styles.card,styles.elevatedCard]}></View> */}
    <View style={[styles.card,styles.elevatedCard]}>
    <Text style={[styles.headerText,styles.headingContainer]}>
      Let's see what is new 
    </Text>
    <Image
     source = {{uri:'https://miro.medium.com/v2/resize:fit:700/1*C3kxjCrJy-aWSMpe2chfaA.png'}}

     style={styles.cardImage}
     />
     <View style={styles.bodyContainer}>
      <Text style={styles.bodyContainer}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatem, accusantium obcaecati, distinctio quam quaerat laborum .</Text>

      <View style={styles.footerContainer}>
      <TouchableOpacity
      onPress={()=> openWebsite('https://www.google.com')}>
        <Text style={styles.socialLinks}>Read more(google)</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=> openWebsite('https://www.youtube.com')}>
        <Text style={styles.socialLinks}>Youtube</Text>
      </TouchableOpacity>
     </View>

     </View>
    
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText:{
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10
    

  },
  card:{
    width: 350,
    height:360,
    borderRadius : 10,
    marginVertical: 12,
    marginHorizontal: 16,
    color: 'white',
   
  },
  elevatedCard:{
    color:'white',
    

    backgroundColor: 'black',
    elevation: 3,
    shadowOffset:{
      width:1,
      height: 1
  },
  shadowColor: '#333',
  shadowOpacity: 0.4

  },
  headingContainer:{

    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    height: 20,
    
   

  },
  headerText:{
    textAlign: 'center',
    color:'white',
    fontSize: 16,
    fontWeight: '600'

  },
  cardImage:{
    height:200
  },
  bodyContainer:{
    color: 'white'

  },
  footerContainer:{
    color:'white',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal : 5

  },
  socialLinks:{
    color:'grey',
    fontSize: 16,
    backgroundColor : 'white',
    marginTop: 15,
    marginBottom:20,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 5



  }

})