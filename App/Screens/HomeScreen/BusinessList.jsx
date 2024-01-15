import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import Heading from "../../Components/Heading";
import GlobalApi from "../../utils/GlobalApi";
import BusinessListItemSmall from "./BusinessListItemSmall";

export default function BusinessList() {
  const [businessList, setBusinessList] = useState([]);
  const getBusinessList = () => {
    GlobalApi.getBusinessList().then((res) =>
      setBusinessList(res.businessLists)
    );
  };

  useEffect(() => {
    getBusinessList();
  }, []);

  return (
    <View style={{ marginTop: 20 }}>
      <Heading text={"Latest Business"} isViewAll={true} />
      <FlatList
        data={businessList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View key={index} style={{ marginRight: 10 }}>
            <BusinessListItemSmall business={item} />
          </View>
        )}
      />
    </View>
  );
}
