"use client"
import CodeView from "@/components/Code.view";
import Button from "@/components/input/Button";
import Toggle from "@/components/Toggle";
import { clsx } from "@/utils/classes";
import { X } from "lucide-react";
import { useRef, useEffect, useCallback, useState, useReducer, useMemo } from "react";



export default function ScriptStructure() {
    const [state, dispatch] = useReducer((s: boolean) => !s, false);
    const DivRef = useRef<HTMLDivElement>(null);
    const [todos, setTodos] = useState<string[]>([]);
    const [filter, setFilter] = useState("");
    const [codeView, dispatchCodeView] = useReducer((s: boolean) => !s, false);
    const [codeimg, setCodeimg] = useState<string[]>([]);
    
    useEffect(() => {
        if (DivRef.current) {
            DivRef.current.innerHTML = "ref div";
        }
    }, []);

    const handleClick = useCallback(() => {
        if (DivRef.current) {
            DivRef.current.style.backgroundColor = "red";
        }
    }, []);
  
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const input = form.elements.namedItem('todoInput') as HTMLInputElement;
        if (input && input.value.trim() !== '') {
            const toDoList = [...todos, input.value.trim()];
            setTodos(toDoList);
          input.value = '';
        }
      }

      const filteredTodos = useMemo(() => {
        return todos.filter(todo => todo.toLowerCase().includes(filter.toLowerCase()));
      }, [todos, filter]);

    const removeTodo = (index: number) => {
        setTodos((t) => t.filter((_, i) => i !== index));
    }
      

    const handleCodeView = ({src}: {src: string[]}) => {
        if (!codeView) return;
        setCodeimg(src);
    }
    return(
        <div>
            {state && (
                <div className=" absolute top-0 left-0 z-50 w-[100vw] h-[100vh] overflow-hidden">
                    <button onClick={() => dispatch()} className=" absolute w-[100vw] h-[100vh] bg-black/50"></button>
                    <div className=" relative w-fit overflow-y-auto h-fit -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 bg-black border border-white/10 rounded-md">
                        <button onClick={() => dispatch()} className=" absolute top-4 right-4"><X /></button>
                        <CodeView src={["/img/pagehtml.png"]} />
                    </div>
                </div>
            )}
            {codeimg.length > 0 && (
                <div className=" absolute top-0 left-0 z-50 w-[100vw] h-[100vh] overflow-hidden">
                    <button onClick={() => setCodeimg([])} className=" absolute w-[100vw] h-[100vh] bg-black/50"></button>
                    <div className=" relative w-fit overflow-y-auto h-fit -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 bg-black border border-white/10 rounded-md">
                        <button onClick={() => setCodeimg([])} className=" absolute top-4 right-4"><X /></button>
                        <CodeView src={codeimg} />
                    </div>
                </div>
            )}
            <div className=" flex items-center justify-between ">
                <h1>Script Structure</h1>
                <div className=" flex flex-col items-center gap-2">
                    <Toggle checked={codeView} toggle={() => dispatchCodeView()} />
                    <label>Code view</label>
                </div>
            </div>
            <div className=" flex flex-col gap-10 mt-10">
                <div onClick={() => handleCodeView({src: ["/img/dispatch-code.png", "/img/modal-code.png"]})} className={clsx("CodeView-Button w-full", codeView ? "CodeView-Button-hover" : "CodeView-Button-disabled ")}>
                    <Button disabled={codeView} onClick={() => setCodeimg(["/img/pagehtml.png"])} className="w-full">view page html</Button>
                </div>
                <div onClick={() => handleCodeView({src: ["/img/ref-code.png"]})} className={clsx("CodeView-Button flex flex-row items-center gap-2", codeView ? "CodeView-Button-hover" : "CodeView-Button-disabled ")}>
                    <Button disabled={codeView} onClick={handleClick}>Ref test</Button>
                    <div ref={DivRef} className=" border border-white/10 p-4 rounded-md">
                        Hello
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <div onClick={() => handleCodeView({src: ["/img/usestate-code.png"]})} className={clsx("CodeView-Button flex items-center w-full gap-2", codeView ? "CodeView-Button-hover" : "CodeView-Button-disabled ")}>
                        <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full">
                            <input 
                                disabled={codeView}
                                type="text" 
                                required 
                                className="border border-gray-300 bg-transparent rounded-md p-2 w-full"
                                name="todoInput"
                                placeholder="Add a todo item"
                            />
                        <button disabled={codeView} className="Button w-fit text-nowrap"  type="submit">Submit item</button>
                        </form>
                    </div>
                    <div onClick={() => handleCodeView({src: ["/img/filter-code.png"]})} className={clsx("CodeView-Button flex justify-end", codeView ? "CodeView-Button-hover" : "CodeView-Button-disabled ")}>
                        <input 
                            type="text" 
                            placeholder="Filter todos" 
                            className="border border-gray-300 bg-transparent rounded-md p-2 w-fit"
                            onChange={(e) => setFilter(e.target.value)}
                            />
                    </div>
                    <div className="flex flex-col gap-2">
                        { filteredTodos.map((todo, index) => (
                            <div key={index} className="Todo">
                                <p>{todo}</p>
                                <button onClick={() => removeTodo(index)}><X /></button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
