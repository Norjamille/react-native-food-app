import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import PopularListItem from './PopularListItem'
import image1 from '../assets/popular/alaundra-alford-BmRbJBoudDw-unsplash.jpg'
import image2 from '../assets/popular/alex-munsell-Yr4n8O_3UPc-unsplash.jpg'
import image3 from '../assets/popular/joseph-gonzalez-QaGDmf5tMiE-unsplash.jpg'
import image4 from '../assets/popular/junior-reis-48YwNFr2UmE-unsplash.jpg'
import image5 from '../assets/popular/thomas-tucker-MNtag_eXMKw-unsplash.jpg'
const PopularList = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <PopularListItem image={image1} name="Chicken Wings" deliveryDuration="40-45 mins" rating="4.5" />
            <PopularListItem image={image3} name="Fancy Toast" deliveryDuration="20-22 mins" rating="4.5" />
            <PopularListItem image={image4} name="King Burgers" deliveryDuration="40-45 mins" rating="4.5" />
            <PopularListItem image={image5} name="Pizza" deliveryDuration="40-45 mins" rating="4.5" />
            <PopularListItem image={image2} name="Pork Chop Dinner" deliveryDuration="40-45 mins" rating="4.5" />
        </ScrollView>
    )
}

export default PopularList