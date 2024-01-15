import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../utils/GlobalApi";
import Heading from "../../Components/Heading";
import Colors from "../../utils/Colors";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const getCategories = () => {
    GlobalApi.getCategories().then((res) => {
      setCategories(res?.categories);
    });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <View style={{ marginTop: 10 }}>
      <Heading text={"Categories"} isViewAll={true} />
      <FlatList
        data={categories}
        numColumns={4}
        renderItem={({ item, index }) =>
          index <= 3 && (
            <View key={index} style={styles.container}>
              <View style={styles.iconsContainer}>
                <Image
                  source={{ uri: item.icon.url }}
                  style={{ width: 30, height: 30 }}
                />
              </View>
              <Text style={{ fontFamily: "outfit-medium", marginTop: 5 }}>
                {item.name}
              </Text>
            </View>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  iconsContainer: {
    backgroundColor: Colors.LIGHT_GRAY,
    padding: 17,
    borderRadius: 99,
  },
});
