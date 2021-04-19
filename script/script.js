/*********************************************************************************
 * ICON DISPLAY
**********************************************************************************/

// SET ICON 
const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
];

// Colors
const colors = [
    "red",
    "pink",
    "blue",
];


// Icons container 
 
const container = document.querySelector(".icons");
console.log(container);

// Print Icons

printIcons(icons, container);


// 2nd part

const coloredIcons = colorIcons(icons);







/*********************************************************
 *          FUNCTIONS
 *********************************************************/

function printIcons(icons, container){
   // console.log(icons);
   // console.log(container);

   let html = "";
   icons.forEach( (icon) => {
       const {family, prefix, name} = icon;
       html += 
       `<div class="icon p-20">
            <i class="${family} ${prefix}${name}" style="color: #333"></i>
            <div class="title">${name}</div>
       </div>`;
   });

 //  console.log(html);
   container.innerHTML = html;
}; 


// Return color icons collection by type

function colorIcons(icons, colors) {
    const types = getType(icons);

}

const coloredIcons = icons.map(() =>{
    const indexType = types.indexOf(icon.type)
    return {
        ...icon
        color: colors[indexType]:
    }
})
return coloredIcons;


//Get icons type unique

function getType(icons) {
    const types = [];
    icons.forEach((icon) => {
        if(! types.includes(icon.type)){
            types.push(icon.type);
        }
    });
    return types
}
