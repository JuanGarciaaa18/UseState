import React, { useState } from "react";
import "./LikesDislikes.css";

export const LikesDislikes = () => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    return (
        <div className="likes-container">
            <button className="like-button" onClick={() => setLikes(likes + 1)}>Like {likes}</button>
            <button className="dislike-button" onClick={() => setDislikes(dislikes + 1)}>Dislike {dislikes}</button>
        </div>
    );
};
