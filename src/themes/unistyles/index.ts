import { StyleSheet } from 'react-native-unistyles'

const lightTheme = {
    colors: {
        red: '#ff0000',
    },
    spacing: {
        xs: 5,
        s: 10,
        m: 16,
        l: 24,
        xl: 40,
      },
    gap: (v: number) => v * 8
}

const appThemes = {
    light: lightTheme
}

const breakpoints = {
    xs: 0,
    sm: 300,
    md: 500,
    lg: 800,
    xl: 1200
}

type AppBreakpoints = typeof breakpoints
type AppThemes = typeof appThemes

declare module 'react-native-unistyles' {
    export interface UnistylesThemes extends AppThemes {}
    export interface UnistylesBreakpoints extends AppBreakpoints {}
}

StyleSheet.configure({
    settings: {
        initialTheme: 'light',
    },
    breakpoints,
    themes: appThemes
})