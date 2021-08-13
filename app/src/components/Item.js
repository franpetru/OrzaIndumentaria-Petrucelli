import React from "react";

const Item = ({items}) => {

    return  (
                <article className="itemCard">
                    <h3 className="itemTitle">{items.title}</h3>
                    <img className="itemImg" src={items.pictureUrl} alt="" />
                </article>
            )
};

export default Item;