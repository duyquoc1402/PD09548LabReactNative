import React, { useState, useEffect } from 'react';
import { View, Text, Button, BackHandler, Alert, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import {styles} from'./style3_3'; 

const ExampleComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const backAction = () => {
      if (isModalVisible) {
        setIsModalVisible(false);
        Alert.alert('Thông báo', 'Bạn đã tắt modal bằng nút back của thiết bị');
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, [isModalVisible]);
  
  return (
    <View style={styles.container}>
      <Button title="Hiện Modal" onPress={() => setIsModalVisible(true)} />
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <Text>Đây là nội dung của modal</Text>
          <Button title="Ẩn Modal" onPress={() => setIsModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};
export default ExampleComponent;