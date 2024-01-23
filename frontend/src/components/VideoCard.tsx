export  function VideoCard(props:any){
    return <div>
        <img src={props.image} alt="a"  className="rounded-lg"/>
        <div className="grid grid-cols-12 pt-2 ">
            <div className="col-span-1 ">
                <img className="rounded-full  w-12 h-12 " src={props.channel} alt="a"  />
            </div>
            <div className="col-span-11 "> 
                <div className="text-lg">
                {props.title}
                </div>
            <div className="col-span-11 text-gray-600 text-sm"> 
               {props.author}
            </div>
            <div className="col-span-11  text-gray-600 text-sm"> 
               {props.views} | {props.timestamp}
            </div>
                
            </div>
        </div>
    </div>
}