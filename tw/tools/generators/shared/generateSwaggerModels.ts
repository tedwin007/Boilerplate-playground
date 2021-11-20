import path = require("path");
import {codegen} from "swagger-axios-codegen";
import {ISwaggerOptions} from "swagger-axios-codegen/dist/baseInterfaces";

export const DEFAULT_SETTINGS: ISwaggerOptions = {
    serviceNameSuffix: 'Model',
    enumNamePrefix: 'Enum',
    methodNameMode: 'operationId',
    useStaticMethod: true,
    useCustomerRequestInstance: true,
    sharedServiceOptions: true,
    strictNullChecks: true,
    modelMode: 'class',
    generateValidationModel: true,
}

export async function generateSwaggerModels(libraryRoot: string, fileName: string, data: any, options: ISwaggerOptions = DEFAULT_SETTINGS) {
    try {
        let spreadElements = {
            // set all default options
            ...DEFAULT_SETTINGS,
            // overrides (some/all) options (if provided in 'options' param)
            ...options,
            outputDir: path.join(process.cwd(), libraryRoot, 'src', 'lib', 'generated'),
            fileName,
            source: data
        };
        await codegen(<ISwaggerOptions>spreadElements)
    } catch (err) {
        console.error(err);
        throw err.message
    }
}

