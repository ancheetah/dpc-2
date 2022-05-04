import { Builder } from "@builder.io/react";
import { SearchBox } from "@components/SearchBox/SearchBox";

Builder.registerComponent(SearchBox, {
   name: "SearchBox",
   inputs: [
      {
         name: "title",
         type: "text",
         defaultValue: "Search Box",
      },
      {
         name: "Search Text",
         type: "string",
         defaultValue: "enter search content",
      },
      {
         name: "searchIndex",
         type: "text",
         defaultValue: "builder-pages",
      },
   ],
   defaultStyles: {
      color: "black",
      backgroundColor: "black",
   },
});
