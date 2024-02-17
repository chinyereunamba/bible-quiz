import { createContext, useState } from "react";

const qContext = createContext({});

export function QuestionContextProvider(props) {
    const [q, setQ] = useState([]);
    return (
        <qContext.Provider value={{ q, setQ }}>
            {props.children}
        </qContext.Provider>
    );
}

export default qContext;