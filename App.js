import React from "react";
import {StyleSheet, Text, View, ScrollView} from "react-native";


const description = "this is description, very long text, jenna has been the number one support, and has been really great for fun to play as a champion, blah blah blah blab blah blah";
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
                return this.rankRow(item.info, item.selected);
            })
        )
    }

    rankRow = (info: string, selected: boolean) => {
        const backgroundColor =
            selected ? styles.backgroundColorBlue : styles.backgroundColorWhite;
        const textColor = selected ? styles.textColorWhite : styles.textColorBlue;
        return (
            <View style={[styles.rankRow, backgroundColor]}>
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

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <View style={styles.leftContainer}>
                        <View style={styles.leftTopContainer}>

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

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        ...shadow
    },
    contentContainer: {
        width: "100%",
        flexDirection: "row",
        aspectRatio: 28 / 15,
    },
    rightContainer: {
        width: "50%",
        height: "100%",
    },
    leftContainer: {
        width: "50%",
        height: "100%",
        backgroundColor: "yellow",
    },
    leftTopContainer: {
        width: "100%",
        flex: 85,
    },
    leftBottomContainer: {
        width: "100%",
        flex: 57,
        backgroundColor: "red",
        paddingTop: 10,
        paddingBottom: 10,
    },
    descriptionText: {
        color: "white",
        fontSize: 12,
        marginLeft: 10,
        marginRight: 10,
    },
    rankRow: {
        flex: 1,
        paddingLeft: 8,
        justifyContent: "center",
        ...shadow
    },
    rankText: {
        color: "blue",
        fontSize: 11,
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
    }
});
