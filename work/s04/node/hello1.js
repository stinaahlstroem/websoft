/**
 * A sample of a main function stating the famous Hello World.
 *
 * @returns void
 */
function main() {
    let a = 1;
    let b;
    let range = "";

    b = a + 20;

    for (let i=0; i < 9; i++) {
        range += i + ", ";
    }

    while(a < b) {
        if(a % 3 ==0) {
            console.info(a)

        } 
        a++;
    }

    console.info("Hello World");
    console.info(range.substring(0, range.length - 2));
    console.info(a, b);
    console.info(new Date().toLocaleString());
}

main();

