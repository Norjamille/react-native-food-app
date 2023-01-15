import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import HomeFiltersItem from './HomeFiltersItem'

const HomeFilters = () => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            <HomeFiltersItem title="All" />
            <HomeFiltersItem title="Pizza" icon="pizza-slice" />
            <HomeFiltersItem title="Burger" icon="hamburger" />
            <HomeFiltersItem title="Coffee" icon="mug-hot" />
            <HomeFiltersItem title="Ice Cream" icon="ice-cream" />
        </ScrollView>
    )
}

export default HomeFilters