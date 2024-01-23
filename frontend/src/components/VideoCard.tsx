export  function VideoCard(props:any){
    return <div className="ml-2 mb-10 mr-2">
        <img src={props.image} alt="a"  className="rounded-lg"/>
        <div className="grid grid-cols-12 pt-2 ">
            <div className="col-span-1 ">
                <img className="rounded-full  w-12 h-12 lg:w-10 lg:h-10" src={props.channel} alt="a"  />
            </div>
            <div className="col-span-11 ml-1 "> 
                <div className="text-base">
                {props.title}
                </div>
            <div className="col-span-11 text-gray-600 text-sm"> 
               {props.author}
            </div>
            <div className="col-span-11  text-gray-600 text-sm"> 
               {props.views} • {props.timestamp}
            </div>
                
            </div>
        </div>
    </div>
}