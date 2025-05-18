import LoginListener from "./generated/LoginListener.js";

export class CustomListener extends LoginListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}