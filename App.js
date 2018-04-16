import React from "react";
import {StyleSheet, Text, View, ScrollView, Image, Dimensions} from "react-native";
import champion from "./champion.png";
import rank from "./rank.png";

const description = "Draven gains his fans' Adoration when he catches a Spinning Axe or kills a minion, monster, or tower. Killing enemy champions grants Draven bonus gold based on how much Adoration he has.";
import EStyleSheet from 'react-native-extended-stylesheet';

let entireScreenWidth = Dimensions.get('window').width;

EStyleSheet.build({$rem: entireScreenWidth / 380});
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
            <Image resizeMode="contain" style={styles.championImage} source={champion} />
        )
    }

    renderScore = () => {
        return (
            <View style={styles.scoreContainer}>
                <Image source={rank} style={styles.logoImage} resizeMode="cover" resizeMethod="scale"/>
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
        justifyContent: "center",
        padding: 8
    },
    contentContainer: {
        width: "100%",
        aspectRatio: 2,
        flexDirection: "row",
        ...shadow,
        backgroundColor: "white",
    },
    rightContainer: {
        flex: 17,
        height: "100%",
    },
    leftContainer: {
        flex: 11,
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
        paddingTop: "10rem",
        paddingBottom: "10rem",
        backgroundColor: "#013360",
    },
    descriptionText: {
        color: "white",
        fontSize: "12rem",
        marginLeft: "10rem",
        marginRight: "10rem"
    },
    rankRow: {
        flex: 1,
        paddingLeft: "8rem",
        justifyContent: "center",
        ...shadow
    },
    rankText: {
        fontSize: "12rem",
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
        height: "60rem",
        width: "60rem",
        borderColor: "#0d6f70",
        borderRadius: "30rem",
        borderWidth: "2rem"
    },
    logoImage: {
        height: "26%",
        aspectRatio: 25/22
    },
    championName: {
        color: "#013360",
        fontWeight: "bold",
        fontSize: "11rem"
    },
    rankNumber: {
        fontSize: "10rem",
        color: "#555550"
    }
});
