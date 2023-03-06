import { useEffect, useState } from "react"


export default function useTheme() {
    const storedTheme = localStorage.getItem('theme')
    const [theme, setTheme] = useState('light')
    useEffect(() => {
        const mq = window.matchMedia('(prefers-color-scheme: dark)')
        if (mq.matches && theme !== 'dark' && !storedTheme) {
            setTheme('dark')
            document.body.setAttribute('data-theme', 'dark')
            localStorage.setItem('theme', theme)
        }
        if (theme === 'dark' || storedTheme === 'dark') {
            document.body.setAttribute('data-theme', 'dark')
            localStorage.setItem('theme', theme)
        } else {
            if (theme === 'light' || storedTheme === 'light') {
                document.body.setAttribute('data-theme', 'light')
                localStorage.setItem('theme', theme)
            }

            return;
        }
    }, [theme])

    return [theme, setTheme]
}