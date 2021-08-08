//how to clone entire obj 

const obj = {
    a: {
        b: {
            c: 1
        }
    }
};
const clone = JSON.parse(JSON.stringify(obj))


// cont newclone = {...obj}
clone.a.b.c = 2 ;


console.log(obj.a.b.c)