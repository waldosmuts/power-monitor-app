export default function Footer() {
    const date = new Date()
    return (
        <footer className="fixed bottom-0 left-0 bg-zinc-900 dark:bg-white w-full py-px px-4 flex items-center">
            <span className="mt-1 tracking-wider font-bold uppercase text-xs text-zinc-300 dark:text-zinc-800">Waldo Smuts © {date.getFullYear()}</span>
        </footer>
    )
}