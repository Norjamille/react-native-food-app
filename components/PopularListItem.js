import { View, Text, Image } from 'react-native'
import React from 'react'
import FontAwesome from "@expo/vector-icons/FontAwesome5"

const PopulatListItem = ({ image, name, price, rating, deliveryDuration }) => {
    return (
        <View className="mx-2">
            <Image source={image} style={{
                width: 300,
                height: 200,
            }} className="rounded-2xl" />
            <Text className="my-2 text-lg font-semibold">
                {name}
            </Text>
            <View className="flex-row space-x-3">
                <View className="border px-2 flex-row space-x-2 items-center py-1 rounded-md border-gray-300">
                    <FontAwesome name="clock" size={14} />
                    <Text>
                        {deliveryDuration}
                    </Text>
                </View>
                <View className="border px-2 flex-row space-x-2 items-center py-1 rounded-md border-gray-300">
                    <FontAwesome name="star" size={14} />
                    <Text>
                        {rating}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default PopulatListItem