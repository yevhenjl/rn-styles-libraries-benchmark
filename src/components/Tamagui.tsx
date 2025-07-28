import { defaultConfig } from '@tamagui/config/v4';
import { Stack, TamaguiProvider, Text, View, createTamagui } from "tamagui";
import { COUNT } from "../constants";

const config = createTamagui(defaultConfig)

export const Tamagui = () => {
    return (
        <TamaguiProvider config={config}>
            <View
                flexDirection="row"
                flexWrap="wrap"
                justifyContent="space-around"
            >
                {new Array(COUNT).fill(0).map((_, i) => (
                    <Stack
                        key={i}
                        borderColor="red"
                        borderWidth={2}
                        padding={10}
                        justifyContent="center"
                        alignItems="center"
                        backgroundColor={i % 2 === 0 ? "blue" : "gray"}
                        onPress={() => alert(`Item ${i} clicked!`)}
                        pressStyle={{ backgroundColor: 'lightgray' }}
                        style={styles.pressable}
                    >
                        <Text style={styles.title}>Item {i}</Text>
                        <Text style={styles.body}>This is static content</Text>
                    </Stack>
                ))}
            </View>
        </TamaguiProvider>
    );
};

const styles = {
    pressable: {
        margin: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    body: {
        fontSize: 16,
        lineHeight: 24,
        color: 'black',
    },
};