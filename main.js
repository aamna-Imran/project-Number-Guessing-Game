import inquirer from "inquirer";
import chalk from "chalk";
let myName = await inquirer.prompt({
    type: "input",
    name: "userName",
    message: chalk.cyan(" Enter your name :")
});
let readyForPlay = await inquirer.prompt({
    type: "input",
    name: " wantsToPlay",
    message: chalk.bold.italic.white.bgMagenta(" Hi " + myName.userName + "!") + " Are you ready to guess the Right Number?"
});
for (let i = 1; i <= 3; i++) {
    let generatedNo = Math.floor(Math.random() * 6);
    console.log(chalk.gray(` Attempt No : ${i}`));
    let ans = await inquirer.prompt({
        type: "list",
        name: "guessNumber",
        choices: ["0", "1", "2", "3", "4", "5"],
        message: chalk.bold.greenBright("Select Your Number :")
    });
    if (generatedNo === parseInt(ans.guessNumber)) {
        console.log(chalk.bold.blue(` Quite Smart! You Guessed it Right ${myName.userName}`));
    }
    else {
        console.log(chalk.bold.red(` Oops! ${myName.userName} You Guessed it Wrong.Correct Answer Was `) + chalk.bold.yellow(generatedNo));
    }
}
