var fs = require("fs");
const path = require("path");

let categorys = [];

export const SaveCategory = props => {
  console.log()
  if (props.title.length > 0) {
    const NewCategory = {
      name: props.title
    };
    categorys.push(NewCategory);
    const file = path.join(__dirname, "../src/data/categories.json");
    console.log(categorys);
    fs.writeFile(file, JSON.stringify(categorys), err => { });
  }
};
