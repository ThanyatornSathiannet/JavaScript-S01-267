const cat = {
    name: "pipepy",
    age: 8,
    WhatName() {
        return this.name;
    },
};

console.log(cat.WhatName());

cat.name = "Nezzar";
console.log(cat.WhatName());