import * as fs from "fs";

export function readSwaggerFile(filePath: string): { swaggerData: object } {
    try {
        console.log("filePath",filePath);
        if (!fs.existsSync(filePath)) {
            throw new Error('Could not find swagger`s file in : '+ filePath);
        }
        let swaggerData = JSON.parse((fs.readFileSync(filePath, "utf-8")));
        console.log(swaggerData)
        return {swaggerData};
    } catch (err) {
        console.error(err);
        debugger;
    }
}
