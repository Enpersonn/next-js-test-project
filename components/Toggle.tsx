import { clsx } from "@/utils/classes";



type ToggleProps = {
    checked: boolean;
    toggle: () => void;
}

const Toggle = ({checked, toggle}: ToggleProps) => {
    return(
        <button onClick={() => toggle()} className={clsx(" w-10 h-5 rounded-full  flex flex-row items-center bg-", checked ? "bg-white/30" : "bg-white/10")}>
            <div className={clsx(" size-5 rounded-full bg-white transition-all", checked ? "translate-x-5" : "translate-x-0")} />
        </button>
    )
}

export default Toggle;


