import React from "react";
import {StyleSheet, Text, View, ScrollView, Image, Dimensions} from "react-native";
import {CircleImage} from "./CircleImage";

const description = "this is description, very long text, jenna has been the number one support, and has been really great for fun to play as a champion, blah blah blah blab blah blah";
const championSource= "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BRA371156.png";
const logoSource = "https://nflcdns.nfl.com/static/site/img/logos/png-500x500/teams/JAX.png";
import EStyleSheet from 'react-native-extended-stylesheet';

let {width} = Dimensions.get('window');

EStyleSheet.build({$rem: width / 40});
const rankData = [
    {
        info: "jena"
    },
    {
        info: "jena"
    },
    {
        info: "jena",
        selected: true
    },
    {
        info: "jena"
    },
    {
        info: "jena"
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
            <CircleImage style={styles.championImage} imageSource={championSource}/>
        )
    }

    renderScore = () => {
        return (
            <View style={styles.scoreContainer}>
                <Image source={{uri: logoSource}} style={styles.logoImage} resizeMode="cover" resizeMethod="scale"/>
                <Text style={styles.championName}>Jenna</Text>
                <Text style={styles.rankNumber}>#57</Text>
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
        height: 0.5
    },
    shadowRadius: 1,
    shadowOpacity: 0.3
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
        flexDirection: "row",
        flex: 85,
        alignItems: "center",
        justifyContent: "center"
    },
    leftBottomContainer: {
        width: "100%",
        flex: 55,
        backgroundColor: "red",
        paddingTop: "1rem",
        paddingBottom: "1rem"
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
        backgroundColor: "blue"
    },
    backgroundColorWhite: {
        backgroundColor: "white"
    },
    textColorBlue: {
        color: "blue"
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
        height: "59%"
    },
    logoImage: {
        height: "26%",
        aspectRatio: 25/22
    },
    championName: {
        fontWeight: "bold",
        fontSize: "1.1rem"
    },
    rankNumber: {
        fontSize: "1rem"
    }
});
