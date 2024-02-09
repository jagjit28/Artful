import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, StyleSheet, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomHeader = () => {

  return (
    <SafeAreaView style={{ backgroundColor: 'transparent' }}>
      {/* <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleToggleSidebar}>
          <Image source={require('../media/hamburger.png')} style={styles.hamburgerIcon} />
        </TouchableOpacity>
        <Text style={styles.logoText}>Your Logo</Text>
        <View style={styles.placeholder}></View>
      </View>

      <View style={styles.container}>
        <Animated.View style={[styles.backdrop, { opacity: animatedValue }]}></Animated.View>
        <Animated.View style={[styles.sidebar, sidebarStyles]}>
        <TouchableOpacity onPress={handleToggleSidebar} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>×</Text>
          </TouchableOpacity>
          <Text style={styles.sidebarItem}>Welcome User</Text>
          <TouchableOpacity onPress={() => handleNavigation('UserPage')} style={styles.sidebarItem}>
            <Text>QR Code</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigation('Login')} style={styles.sidebarItem}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </Animated.View>
      </View> */}
    </SafeAreaView>
  );
};

export default CustomHeader;
