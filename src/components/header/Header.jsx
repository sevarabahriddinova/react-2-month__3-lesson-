import { BiMoon } from "react-icons/bi"; 
import { BsSunFill } from "react-icons/bs"; 
import { AiOutlineSearch } from "react-icons/ai"; 
import { Container } from '../../utils';
import { useState } from 'react'
import axios from "../../api/axios";
import { useDispatch } from "react-redux";

const Header = () => {
    const dispatch = useDispatch();
    const [theme, setTheme] = useState("light");
    const [searchValue, setSearchValue] = useState("");
    
    const handleSearchCity = async (e) => {
        e.preventDefault();

        try{
            const response =  await axios(`forecast.json?key=644f6ce0ca9e401ebb891832211707&q=${searchValue}&days=7&aqi=yes&alerts=yes`);
            const data = response.data;
            dispatch({type: "SEARCH_DATA", data})
        }catch(error){
            console.log(error)
        }

        console.log(searchValue)
    }

    
  return (
    <header>
        <Container>
            <div className="flex items-center justify-between">
                <h1 className="text-indigo-700 text-2xl font-bold">Weather App</h1>
                <form onSubmit={handleSearchCity} className="border max-w-[600px] flex-1 flex border-gray-300 p-4 rounded-[30px]">
                    <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" className="flex-1 border-none outline-none text-lg" />
                    <button><AiOutlineSearch className="text-[26px]" /></button>
                </form>
                <div className="border border-gray-300 rounded-[30px] flex relative items-center">
                    <input onChange={(e) => setTheme(e.target.checked ? "dark" : "light")} id="theme-toggle" type="checkbox" className="appearance-none w-[70px] h-[30px]" />
                    <label htmlFor="theme-toggle" className="w-[35px] h-[35px] bg-indigo-700 text-white rounded-full flex items-center justify-center cursor-pointer absolute left-0 transition-all"> 
                        {
                            theme === "light" ? <BsSunFill /> :
                            <BiMoon />
                        }
                    </label>
                </div>
            </div>
        </Container>
    </header>
  )
}

export default Header