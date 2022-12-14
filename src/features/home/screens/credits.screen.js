import { SafeArea } from "../../../utility/safe-area";
import React from "react";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer";
import { Feather } from "@expo/vector-icons";

import { Header, EditIcon, BackIcon } from "../components/home.styles";
import { Text } from "../../../components/text";
import { View, ScrollView, ImageBackground } from "react-native";
import { Button, Divider } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";

export default function Credits({ navigation }) {
  return (
    <SafeArea style={{ backgroundColor: "white" }}>
      <Header>
        <BackIcon onPress={() => navigation.goBack()} />
        <Text>Credits</Text>
        <EditIcon />
      </Header>
      <View style={{padding:10, display:"flex",alignItems:"center",flexDirection:"column-reverse"}}>
        <Text variant="h2">
          Developed with <Feather name="code" size={25}/> and <Feather name="heart" size={25}/> <Text variant="caption">@Mayur</Text>
        </Text>
        <Spacer size="xl"/>
      </View>
    </SafeArea>
  );
}
