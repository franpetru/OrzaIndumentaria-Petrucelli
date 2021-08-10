import React from "react";

const Item = ({items}) => {

    return  (
                <li className="itemsTitle">
                    {items.title}
                </li>
            )
};

export default Item;