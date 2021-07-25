import { useState, createContext } from "react"

export const ThemeContext = createContext(undefined, undefined)

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme( state => state === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
