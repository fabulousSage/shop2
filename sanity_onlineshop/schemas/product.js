export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "discount",
      title: "Discount(%)",
      type: "number",
    },
    {
      name: "details",
      title: "Details",
      type: "object",
      fields: [
        

        {
          name: "colors",
          title: "Colors",
          type: "array",
          of: [{type: "string"}],
        },
        {
          name: "sizes",
          title: "Sizes",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "material",
          title: "Material",
          type: "string",
        },

        { name: "gender",
        title: "Gender",
        type: "string",
        options: {
          list:[
            {title: "Men", value: "men"},
            {title: "Women", value: "women"},
            { title: "Unisex", value: "unisex"}
            ],
        },
        },
       
        {
          name: "occasion",
          title: "Occasion",
          type: "string",
        },
       
      ],
    },
    {
      name: "brand",
      title: "Brand",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "isOffer",
      title: "IsOffer",
      type: "boolean",
    },
    {
      name: "registerDate",
      title: "RegisterDate",
      type: "datetime",
    },
    {
      name: "starRating",
      title: "Star Rating",
      type: "number",
    },
  ],
};