import React from "react";
import defaultImage from "../default-image.jpeg";

const Item = ({ id, fields }) => {
  const { Headline = "" } = fields;
  const SubHeadline = fields["Sub-headline"] ? fields["Sub-headline"] : "";
  const imageUrl =
    fields["Header image"]?.length > 0
      ? fields["Header image"][0].url
      : defaultImage;

  return (
    <div className="item h-64 w-full" key={id}>
      <img className="image w-full" src={imageUrl} />
      <div class="w-full flex flex-col p-2">
        <div class="h-12 w-11/12"> {Headline}</div>
        <div class="h-10 w-10/12">{SubHeadline}</div>
      </div>
    </div>
  );
};

export default Item;
