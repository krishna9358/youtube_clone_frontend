import { SearchBar } from "./SearchBar";

export function AppBar(){
    return <div className="flex justify-between p-5 ">
        <div >Youtube</div>
        <div >   
        <SearchBar></SearchBar>
        </div>
        <div className="p-2 hover:cursor-pointer border rounded-full text-blue-600 border-black-400 flex  ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
<div className="">
 Sign in
</div>
 </div>
    </div>
}