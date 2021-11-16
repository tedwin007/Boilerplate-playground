import path = require("path");
import {codegen} from "swagger-axios-codegen";
import {ISwaggerOptions} from "swagger-axios-codegen/dist/baseInterfaces";

export const DEFAULT_SETTINGS = {
    serviceNameSuffix: 'Model',
        enumNamePrefix: 'Enum',
        methodNameMode: 'path',
        useStaticMethod: true,
        useCustomerRequestInstance: true,
        sharedServiceOptions: true,
        strictNullChecks: true,
        modelMode: 'class',
        generateValidationModel: true,
}

export async function generateSwaggerModels(libraryRoot:string,fileName: string, data: any) {
    try {
        let spreadElements = {
            ...DEFAULT_SETTINGS,
            outputDir: path.join(process.cwd(), libraryRoot, 'src', 'lib', 'generated'),
            fileName,
            source: data
        };
        await codegen(<ISwaggerOptions>spreadElements)
    } catch (err) {
        console.error(err);
        debugger;
    }
}

