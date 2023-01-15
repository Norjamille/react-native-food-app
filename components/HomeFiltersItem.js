import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import FontAwesome from "@expo/vector-icons/FontAwesome5"

const HomeFiltersItem = ({ title, icon }) => {
    return (
        <TouchableOpacity className="border flex-row items-center space-x-3 mx-1.5  border-gray-300  bg-white px-3 rounded-xl py-1.5">
            {icon && <FontAwesome name={icon} size={12} />}
            <Text className="text-lg text-gray-600">
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default HomeFiltersItem