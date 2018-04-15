import React from "react";
import {StyleSheet, Text, View, ScrollView, Image, Dimensions} from "react-native";
import {CircleImage} from "./CircleImage";

const description = "Draven gains his fans' Adoration when he catches a Spinning Axe or kills a minion, monster, or tower. Killing enemy champions grants Draven bonus gold based on how much Adoration he has.";
const championSource= "https://raw.githubusercontent.com/shanerudolfworktive/ScalableLayoutTutorial/master/champion.png";
const logoSource = "https://raw.githubusercontent.com/shanerudolfworktive/ScalableLayoutTutorial/master/rank.png";
import EStyleSheet from 'react-native-extended-stylesheet';

let {width} = Dimensions.get('window');

EStyleSheet.build({$rem: width / 38});
const rankData = [
    {
        info: "1st Janna wining 5000 games"
    },
    {
        info: "2nd Draven wining lck",
        selected: true
    },
    {
        info: "3rd Lucien wining 2018"
    },
    {
        info: "4th WuKong wining 3000 games"
    },
    {
        info: "5th Diana wining 200 games"
    },
]
export default class App extends React.Component {

    renderRank = (rankInfos: *) => {
        return (
            rankInfos.map((item, index) => {
                const key = `RankRow-${index}`
                return this.rankRow(item.info, item.selected, key);
            })
        )
    }

    rankRow = (info: string, selected: boolean, key?:string, hasShadow?: boolean) => {
        const backgroundColor =
            selected ? styles.backgroundColorBlue : styles.backgroundColorWhite;
        const textColor = selected ? styles.textColorWhite : styles.textColorBlue;
        return (
            <View key={key} style={[styles.rankRow, backgroundColor]}>
                <Text style={[styles.rankText, textColor]}>{info}</Text>
            </View>
        )
    }

    renderInfo = () => {
        return (
            <ScrollView>
                <Text style={styles.descriptionText}>
                    {description}
                </Text>
            </ScrollView>
        )
    }

    renderChampionImage = () => {
        return (
            <CircleImage borderColor="#0d6f70" style={styles.championImage} imageSource={championSource} />
        )
    }

    renderScore = () => {
        return (
            <View style={styles.scoreContainer}>
                <Image source={{uri: logoSource}} style={styles.logoImage} resizeMode="cover" resizeMethod="scale"/>
                <Text style={styles.championName}>Draven</Text>
                <Text style={styles.rankNumber}>#3</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <View style={styles.leftContainer}>
                        <View style={styles.leftTopContainer}>
                            {this.renderChampionImage()}
                            {this.renderScore()}
                        </View>
                        <View style={styles.leftBottomContainer}>
                            {this.renderInfo()}
                        </View>
                    </View>

                    <View style={styles.rightContainer}>
                        {this.renderRank(rankData)}
                    </View>
                </View>
            </View>
        );
    }
}

const shadow = {
    shadowColor: '#000000',
    shadowOffset: {
        width: 0,
        height: 0.35
    },
    shadowRadius: 1,
    shadowOpacity: 0.6
}

const styles = EStyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    contentContainer: {
        width: "100%",
        flexDirection: "row",
        aspectRatio: 2,
        ...shadow,
        backgroundColor: "white",
    },
    rightContainer: {
        flex: 4,
        height: "100%",
    },
    leftContainer: {
        flex: 3,
        height: "100%",
    },
    leftTopContainer: {
        width: "100%",
        backgroundColor: "#f6f6f6",
        flexDirection: "row",
        flex: 85,
        alignItems: "center",
        justifyContent: "center"
    },
    leftBottomContainer: {
        width: "100%",
        flex: 55,
        paddingTop: "1rem",
        paddingBottom: "1rem",
        backgroundColor: "#013360",
    },
    descriptionText: {
        color: "white",
        fontSize: "1.2rem",
        marginLeft: "1rem",
        marginRight: "1rem"
    },
    rankRow: {
        flex: 1,
        paddingLeft: "0.8rem",
        justifyContent: "center",
        ...shadow
    },
    rankText: {
        fontSize: "1.2rem",
        fontWeight: "bold",
    },
    backgroundColorBlue: {
        backgroundColor: "#013360"
    },
    backgroundColorWhite: {
        backgroundColor: "white"
    },
    textColorBlue: {
        color: "#013360"
    },
    textColorWhite: {
        color: "white"
    },
    scoreContainer: {
        height: "100%",
        marginLeft: "7%",
        justifyContent: "center"
    },
    championImage: {
        height: "59%",
        borderWidth: "0.2rem"
    },
    logoImage: {
        height: "26%",
        aspectRatio: 25/22
    },
    championName: {
        color: "#013360",
        fontWeight: "bold",
        fontSize: "1.1rem"
    },
    rankNumber: {
        fontSize: "1rem",
        color: "#555550"
    }
});
