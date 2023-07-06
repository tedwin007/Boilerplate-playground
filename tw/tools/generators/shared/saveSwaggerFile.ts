import * as fs from "fs";
import * as path from "path";

export async function saveSwaggerFile(folderPath: string, data: any) {
    try {
        if (!fs.existsSync(folderPath)) {
            throw new Error('Could not find dest path in: ' + folderPath);
        }
        const destPath = path.join(folderPath, 'swagger.json');
        fs.writeFileSync(destPath, data, {encoding: 'utf8'});
    } catch (err) {
        console.error(err);
    }
}

