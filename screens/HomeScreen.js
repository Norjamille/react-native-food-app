import { View, Text, Button, TouchableOpacity, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome5"
import HomeFilters from "../components/HomeFilters";
import PopularList from "../components/PopularList";

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <SafeAreaView className="pt-5">
            <View className="flex-row items-center justify-between px-3 py-2">
                <TouchableOpacity className="flex-row items-center space-x-3">
                    <FontAwesome name="map-marker-alt" size={23} color="#475569" />
                    <Text className="text-sm font-semibold text-gray-400">Poblacion, Tacurong Sultan Kudarat</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome name="search" size={23} color="#475569" />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View className="px-3 mt-10 space-y-1">
                    <Text className="text-4xl font-bold text-gray-800">Fast & Delicious</Text>
                    <Text className="text-4xl font-bold text-gray-800">Food</Text>
                </View>
                <View className="mt-8">
                    <HomeFilters />
                </View>
                <View className="mt-8 ">
                    <Text className="mb-1 ml-4 text-2xl font-bold">Features</Text>
                    <Text className="mb-5 ml-4 text-gray-500">Paid placements from our partners</Text>
                    <PopularList />
                </View>
                <View className="mt-8 mb-20">
                    <Text className="mb-1 ml-4 text-2xl font-bold">Offers Near You</Text>
                    <Text className="mb-5 ml-4 text-gray-500">Why not support your local restaurant tonight</Text>
                    <PopularList />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


export default HomeScreen;
