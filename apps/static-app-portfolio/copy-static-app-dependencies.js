import fs from "fs-extra";
import path from "path";
import chalk from "chalk";

const currDir = path.resolve(path.dirname(""));

try {
  const packageInput = fs.readFileSync("./package.json", "utf8");
  const packageJSON = JSON.parse(packageInput);
  const dependencies = packageJSON.dependencies;

  const staticProjects = [];

  for (const [project, declaration] of Object.entries(dependencies)) {
    if (declaration.match(/workspace:\*/)) {
      staticProjects.push(project);
    }
  }

  staticProjects.forEach(copyProjectDist);
} catch (err) {
  console.error(err);
}

function copyProjectDist(project) {
  const dependencyDir = "node_modules/";

  console.log(
    `${chalk.bold.red("| copying")}: (${chalk.bold.yellow(
      project
    )}/dist) -> (${chalk.bold.blue("static-app-portfolio")}/dist)`
  );

  fs.copy(
    `${currDir}/${dependencyDir}/${project}/dist`,
    `${currDir}/dist/${project}`
  ).catch((err) => console.error(err));

  console.log(
    `${chalk.bold.green("|-> COMPLETED")}: copied (${chalk.bold.yellow(
      project
    )}/dist) -> (${chalk.bold.blue("static-app-portfolio")}/dist)`
  );
}
