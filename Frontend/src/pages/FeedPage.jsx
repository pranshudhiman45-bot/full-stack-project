import React, { useEffect, useState } from 'react';
import axios from 'axios'
const FeedPage = () => {
   
  const [posts, setPosts] = useState([
    {
      _id: '1',
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      caption: "Beautiful Scenery"
    }
  ]);
  useEffect(()=>{
     axios.get('http://localhost:3000/posts')
     .then((res)=>{
    setPosts(res.data.posts)
        
     })
  }, [])

  return (
    <section className="min-h-screen bg-gray-100 py-6 px-4">
      
      <div className="max-w-6xl mx-auto">
        
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Feed
        </h1>

        {posts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            
            {posts.map((post) => (
              <div
                key={post._id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                
                {/* Image */}
                <div className="w-full h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Caption */}
                <div className="p-4">
                  <p className="text-gray-700 text-sm">
                    {post.caption}
                  </p>
                </div>

              </div>
            ))}

          </div>
        ) : (
          <p className="text-gray-500 text-center mt-10">
            No posts yet
          </p>
        )}

      </div>
    </section>
  );
};

export default FeedPage;