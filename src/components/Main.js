import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import History from "./History"

export default function Main() {
    const powerDataStorage = window.localStorage.getItem("powerDataStorage") ? JSON.parse(window.localStorage.getItem("powerDataStorage")) : []
    window.localStorage.setItem("powerDataStorage", JSON.stringify(powerDataStorage))

    const [powerData, setPowerData] = useState(powerDataStorage)
    const [addPowerData, setAddPowerData] = useState({
        power: 0,
        date: "2022-01-01"
    })

    function displayForm() {
        document.getElementById("inputForm").style.display = "flex"
        setAddPowerData({
            power: 0,
            date: "2022-01-01"
        })
    }

    function hideForm() {
        document.getElementById("inputForm").style.display = "none"
    }

    function submitForm(e) {
        e.preventDefault()
        hideForm()
        setPowerData((prevPowerData) => ([
            {
                power: Number(addPowerData.power),
                date: addPowerData.date
            },
            ...prevPowerData
        ]))
    }

    function handleChange(e) {
        const { value, name } = e.target
        setAddPowerData((prevAddPowerData) => ({
            ...prevAddPowerData,
            [name]: value
        }))
    }

    useEffect(() => {
        window.localStorage.setItem("powerDataStorage", JSON.stringify(powerData))
    }, [powerData])

    return (
        <main className="px-6 mt-12 pb-32 bg-zinc-300 dark:bg-zinc-800">
            <h3 className="text-sm uppercase opacity-50 text-black dark:text-white">Latest Reading</h3>
            <h4 className="mt-3 text-xl flex justify-between items-center text-black dark:text-white">
                <span className="shrink-0">Since Last</span>
                <div className="w-full h-px bg-black dark:bg-white mx-4 opacity-25"></div>
                <span className="shrink-0">
                    {powerData[0] && powerData[1] ?
                        powerData[0].power - powerData[1].power :
                        "--"
                    }u
                </span>
            </h4>
            <h4 className="text-xl flex justify-between items-center text-black dark:text-white">
                <span className="shrink-0">Total</span>
                <div className="w-full h-px bg-black dark:bg-white mx-4 opacity-25"></div>
                <span className="shrink-0">
                    {powerData[0] ? powerData[0].power : "--"}u
                </span>
            </h4>
            <h3 className="mt-12 text-sm uppercase opacity-50 text-black dark:text-white">Past 30 Days</h3>
            <h4 className="text-xl flex justify-between items-center mt-3 text-black dark:text-white">
                <span className="shrink-0">Average</span>
                <div className="w-full h-px bg-black dark:bg-white mx-4 opacity-25"></div>
                <span className="shrink-0">
                    {
                        powerData[0] ?
                            powerData[1] ?
                                Math.ceil((powerData[0].power - powerData[1].power) / 30) :
                                "--" :
                            "--"
                    }u/Day
                </span>
            </h4>
            <h4 className="text-xl flex justify-between items-center text-black dark:text-white">
                <span className="shrink-0">Total</span>
                <div className="w-full h-px bg-black dark:bg-white mx-4 opacity-25"></div>
                <span className="shrink-0">
                    {
                        powerData[0] ?
                            powerData[1] ?
                                Math.ceil((powerData[0].power - powerData[1].power)) :
                                "--" :
                            "--"
                    }u
                </span>
            </h4>
            {powerData && <History data={powerData} />}
            <button onClick={displayForm} className="bg-zinc-900 text-zinc-300 dark:bg-white dark:text-zinc-800 w-12 h-12 rounded-full font-josefin text-xl fixed right-4 bottom-4 flex justify-center items-center ring-4 ring-zinc-300 dark:ring-zinc-800 z-10"><FontAwesomeIcon icon="fa-solid fa-bolt" /></button>
            <div id="inputForm" style={{ display: "none" }} className="fixed top-0 left-0 w-full h-full justify-center items-center z-20">
                <div onClick={hideForm} className="bg-black opacity-75 w-full h-full absolute top-0 left-0"></div>
                <div className="bg-zinc-300 dark:bg-zinc-900 w-full pt-4 pb-12 mx-10 rounded-lg flex flex-col justify-center items-center z-30 relative">
                    <button onClick={hideForm} className="absolute -right-2 -top-2 bg-black dark:bg-white text-white dark:text-black rounded-md px-3 pt-px pb-1 text-xl">x</button>
                    <h3 className="mt-6 text-sm uppercase opacity-50 text-black dark:text-white">Add Reading</h3>
                    <form onSubmit={submitForm} className="mt-6 mx-6 flex flex-col">
                        <input onChange={handleChange} value={addPowerData.date ? addPowerData.date : "2022-01-01"} type="month" name="date" className="border border-black dark:border-white border-b-0 rounded-t-md w-full px-4 py-2" required />
                        <div className="flex">
                            <input onChange={handleChange} value={addPowerData.power} className="border border-black dark:border-white rounded-bl-md w-full pl-4 py-2" name="power" type="number" placeholder="Power (Units)" required />
                            <button className="bg-black text-white dark:bg-white dark:text-black rounded-br-md px-4">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}