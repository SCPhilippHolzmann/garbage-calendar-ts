import * as React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


export const GarbageStreet = () => {
    const selectRef = React.useRef<HTMLSelectElement>(null);
    let navigate = useNavigate();
    function onSubmit(e:React.FormEvent){
        e.preventDefault();
        const val = selectRef.current?.value;
        console.log(val);
        navigate("/calendar/"+val);
    }
    return (
        <form onSubmit={onSubmit}>
            <select  ref={selectRef}>
                <option value="1">Hamburger Allee</option>
                <option value="2">Borsigstraße</option>
                <option value="3">Horchheimer Straße</option>
            </select>
            <button type="submit">senden</button>
        </form>
    );
}