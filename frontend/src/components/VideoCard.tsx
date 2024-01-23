export  function VideoCard(){
    return <div>
        <img src="/thumbnail.png" alt="a"  className="rounded-lg"/>
        <div className="grid grid-cols-12 pt-2 ">
            <div className="col-span-1 ">
                <img className="rounded-full  w-12 h-12 " src="/thumbnail.png" alt="a"  />
            </div>
            <div className="col-span-11 "> 
                <div className="text-lg">
                Thumbnail title 
                </div>
            <div className="col-span-11 text-gray-600 text-sm"> 
               Krishna Mohan
            </div>
            <div className="col-span-11  text-gray-600 text-sm"> 
                100M  | 1 day ago 
            </div>
                
            </div>
        </div>
    </div>
}