// import { useEffect, useState } from "react"
// export default function useTheme() {
//     const storedTheme = localStorage.getItem('theme')
//     const [theme, setTheme] = useState('light')
//     useEffect(() => {
//         const mq = window.matchMedia('(prefers-color-scheme: dark)')
//         if (mq.matches && theme !== 'dark') {
//             console.log(storedTheme, 'hello');
//             setTheme('dark')
//             document.body.classList.add('dark')
//             localStorage.setItem('theme', theme)
//         }
//         if (theme === 'dark' || storedTheme === 'dark') {
//             console.log(storedTheme);
//             document.body.classList.add('dark')
//             localStorage.setItem('theme', theme)
//         } else {
//             if (theme === 'light' || storedTheme === 'light') {
//                 console.log(storedTheme);
//                 document.body.classList.remove('dark')
//                 localStorage.setItem('theme', theme)
//             }
//             return;
//         }
//     }, [theme])
//     return [theme, setTheme]
// }


import { useEffect, useState } from "react"
export default function useSystemTheme() {
    const storedTheme = localStorage.getItem('theme')
    const [theme, setTheme] = useState(storedTheme)
    useEffect(() => {
        const mq = window.matchMedia('(prefers-color-scheme: dark)')
        if (theme === 'dark') {
            document.body.classList.add('dark')
            localStorage.setItem('theme', theme)
        } else if (theme === 'light') {
            document.body.classList.remove('dark')
            localStorage.setItem('theme', theme)
        } else if (mq.matches) {
            setTheme('dark')
            document.body.classList.add('dark')
        }
    }, [theme])
    return [theme, setTheme]
}