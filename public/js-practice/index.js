let object = {
    name: "aasif",
    lastname: "maniyar",
    getIntro: function(){
        console.log(this.name + " " + this.lastname);
    }
}

let object2 = {
    name : "sabiha"
}

object2.__proto__ = object;
