import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Button } from '../Button';

export default function LandingPage() {
  return (
    <SafeAreaView className="flex-1 bg-bg">
      <ScrollView contentContainerClassName="pb-20">
        {/* Hero Section */}
        <View className="px-6 pt-16 pb-12 items-center">
          <View className="flex-row items-center mb-4">
            <View className="w-2 h-2 rounded-full bg-purple" />
            <Text className="ml-2 font-montserrat font-bold text-purple uppercase tracking-[2px] text-[10px]">
              System Status: Active
            </Text>
          </View>
          
          <Text className="font-montserrat font-black text-[42px] leading-[48px] text-text text-center mb-6">
            The High-Authority{"\n"}
            <Text className="text-purple">Editorial System.</Text>
          </Text>
          
          <Text className="font-dmsans text-[16px] text-gray-600 text-center leading-7 mb-10 max-w-[320px]">
            A world-class architecture built for performance, scale, and sharp design aesthetics.
          </Text>
          
          <View className="flex-row w-full justify-center gap-x-4">
            <Button 
              title="Get Started" 
              className="flex-1 max-w-[160px]"
              onPress={() => console.log('Action: Get Started')}
            />
            <Button 
              title="Learn More" 
              variant="outline" 
              className="flex-1 max-w-[160px]"
              onPress={() => console.log('Action: Learn More')}
            />
          </View>
        </View>

        {/* Credibility Strip */}
        <View className="bg-text py-5 flex-row justify-center gap-x-8">
          <Text className="text-white/70 font-montserrat font-bold text-[10px] uppercase tracking-wider">Research</Text>
          <Text className="text-white/70 font-montserrat font-bold text-[10px] uppercase tracking-wider">Strategy</Text>
          <Text className="text-white/70 font-montserrat font-bold text-[10px] uppercase tracking-wider">Systems</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}