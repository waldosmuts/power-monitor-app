import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Navbar(props) {
    const themeIcon = props.darkMode ? "fa-solid fa-sun" : "fa-solid fa-moon"

    return (
        <nav className="px-6 py-6 flex justify-between items-center bg-white dark:bg-zinc-900">
            <a className="uppercase tracking-widest font-bold -mb-1 text-black dark:text-white" href="./index.html"><FontAwesomeIcon icon="fa-solid fa-bolt" className="mr-2" />Power Monitor</a>
            <button onClick={props.changeTheme} className="bg-black text-white dark:bg-white dark:text-zinc-900 w-8 h-8 flex justify-center items-center rounded-xl"><FontAwesomeIcon icon={themeIcon} /></button>
        </nav>
    )
}