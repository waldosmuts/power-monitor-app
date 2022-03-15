import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function History(props) {
    function handleClick(i) {
        if (document.querySelectorAll(".history--detailed")[i].style.display === "none") {
            document.querySelectorAll(".history--detailed")[i].style.display = "flex"
            document.querySelectorAll(".history--arrow")[i].style.transform = "rotate(180deg)"
        } else {
            document.querySelectorAll(".history--detailed")[i].style.display = "none"
            document.querySelectorAll(".history--arrow")[i].style.transform = "rotate(0deg)"
        }
    }

    const powerData = props.data.map((data, index) => {
        return (
            <h4 key={index} className="text-xl flex flex-col justify-between items-center text-black dark:text-white">
                <div className="w-full flex justify-between items-center">
                    <span className="shrink-0">{`${new Date(data.date).toLocaleString("default", { month: "short" })} ${new Date(data.date).getFullYear()}`}</span>
                    <div className="w-full h-px bg-black dark:bg-white mx-4 opacity-25"></div>
                    <span className="shrink-0">{props.data[index + 1] ? data.power - props.data[index + 1].power : "--"}</span>
                    <button onClick={() => handleClick(index)} className="ml-2 text-xs"><FontAwesomeIcon className="history--arrow pointer-events-none" icon="fa-solid fa-chevron-down" /></button>
                </div>
                <div className="history--detailed w-full flex justify-between items-center mb-4" style={{ display: "none" }}>
                    <span className="shrink-0">Total</span>
                    <div className="w-full h-px bg-black dark:bg-white mx-4 opacity-25"></div>
                    <span className="shrink-0">{data.power}u</span>
                </div>
            </h4>
        )
    })

    return (
        <section>
            <h3 className="mt-12 mb-3 text-sm uppercase opacity-50 text-black dark:text-white">History</h3>
            {powerData}
        </section>
    )
}