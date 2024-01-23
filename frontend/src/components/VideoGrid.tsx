import { VideoCard } from "./VideoCard"


//this is going to come from backend
const VIDEO = [
    {
        title:"Just trying youtube clone | Using typescript",
      image:"thumbnail.png",
      channel:"thumbnail.png",
      timestamp:"1 day ago",
      views: "100M",
      author:"Krishna Mohan"
    },
    {
        title:"Just trying youtube clone | Using typescript",
      image:"thumbnail.png",
      channel:"thumbnail.png",
      timestamp:"1 day ago",
      views: "100M",
      author:"Krishna Mohan"
    },

    {
        title:"Just trying youtube clone | Using typescript",
      image:"thumbnail.png",
      channel:"thumbnail.png",
      timestamp:"1 day ago",
      views: "100M",
      author:"Krishna Mohan"
    },
    {
        title:"Just trying youtube clone | Using typescript",
      image:"thumbnail.png",
      channel:"thumbnail.png",
      timestamp:"1 day ago",
      views: "100M",
      author:"Krishna Mohan"
    },
    {
        title:"Just trying youtube clone | Using typescript",
      image:"thumbnail.png",
      channel:"thumbnail.png",
      timestamp:"1 day ago",
      views: "100M",
      author:"Krishna Mohan"
    },
    {
        title:"Just trying youtube clone | Using typescript",
      image:"thumbnail.png",
      channel:"thumbnail.png",
      timestamp:"1 day ago",
      views: "100M",
      author:"Krishna Mohan"
    },
    {
        title:"Just trying youtube clone | Using typescript",
      image:"thumbnail.png",
      channel:"thumbnail.png",
      timestamp:"1 day ago",
      views: "100M",
      author:"Krishna Mohan"
    },
    {
        title:"Just trying youtube clone | Using typescript",
      image:"thumbnail.png",
      channel:"thumbnail.png",
      timestamp:"1 day ago",
      views: "100M",
      author:"Krishna Mohan"
    },
    {
        title:"Just trying youtube clone | Using typescript",
      image:"thumbnail.png",
      channel:"thumbnail.png",
      timestamp:"1 day ago",
      views: "100M",
      author:"Krishna Mohan"
    },
    {
        title:"Just trying youtube clone | Using typescript",
      image:"thumbnail.png",
      channel:"thumbnail.png",
      timestamp:"1 day ago",
      views: "100M",
      author:"Krishna Mohan"
    },
    {
        title:"Just trying youtube clone | Using typescript",
      image:"thumbnail.png",
      channel:"thumbnail.png",
      timestamp:"1 day ago",
      views: "100M",
      author:"Krishna Mohan"
    },
    {
        title:"Just trying youtube clone | Using typescript",
      image:"thumbnail.png",
      channel:"thumbnail.png",
      timestamp:"1 day ago",
      views: "100M",
      author:"Krishna Mohan"
    },
    {
        title:"Just trying youtube clone | Using typescript",
      image:"thumbnail.png",
      channel:"thumbnail.png",
      timestamp:"1 day ago",
      views: "100M",
      author:"Krishna Mohan"
    },

    {
        title:"Just trying youtube clone | Using typescript",
      image:"thumbnail.png",
      channel:"thumbnail.png",
      timestamp:"1 day ago",
      views: "100M",
      author:"Krishna Mohan"
    },


]

export function VideoGrid ( ) {
    return <div className="grid md:grid-cols-2 lg:grid-cols-4">
        {VIDEO.map(video => <div> 
            <VideoCard title={video.title}
      image={video.image}
      channel={video.channel}
      timestamp={video.timestamp}
      views= {video.views}
      author={video.author}
      ></VideoCard>
      
        </div>)}
    </div>

}