import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../utils/GlobalApi";
import Heading from "../../Components/Heading";
import Colors from "../../utils/Colors";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const navigation = useNavigation();
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
            <TouchableOpacity
              key={index}
              style={styles.container}
              onPress={() =>
                navigation.push("business-list", {
                  category: item.name,
                })
              }
            >
              <View style={styles.iconsContainer}>
                <Image
                  source={{ uri: item.icon.url }}
                  style={{ width: 30, height: 30 }}
                />
              </View>
              <Text style={{ fontFamily: "outfit-medium", marginTop: 5 }}>
                {item.name}
              </Text>
            </TouchableOpacity>
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
