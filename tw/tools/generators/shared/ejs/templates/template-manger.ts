import * as fs from "fs";
import * as path from "path";
import * as ejs from "ejs";
import {camelize, capitalize, classify, dasherize} from "@nrwl/workspace/src/utils/strings";

const TEMPLATE_DIR_PATH = path.join(process.cwd(), 'tools', 'generators', 'shared', 'ejs', 'templates');
const SUFFIX_TYPES = ['scss', 'html', 'ts'];

export enum TemplateOption {
    Form = 'form',
    Interface = 'interface',
    Class = 'class'
}

export class TemplateManger {

    static makeInterfaceFiles(rootPath: string, data: any) {
        data = {...data, classify, camelize, capitalize, dasherize, definitions: data.swaggerData.definitions}
        Object.keys(data.definitions).forEach((entityName: string) => {
            const destFolder: string = path.join(rootPath, 'src', 'lib', 'models', 'interfaces');
            const fileName = `${dasherize(entityName)}.${TemplateOption.Interface}.ts`;
            const tmplPath = path.join(TEMPLATE_DIR_PATH, TemplateOption.Interface, `${TemplateOption.Interface}-template.ts`);
            this.generateSingleFile(tmplPath, fileName, {...data}, entityName, destFolder)
        })
        return TemplateManger;
    }

    static makeClassFiles(rootPath: string, data: any) {
        data = {...data, classify, camelize, capitalize, dasherize, definitions: data.swaggerData.definitions}
        Object.keys(data.definitions).forEach((entityName: string) => {
            const destFolder: string = path.join(rootPath, 'src', 'lib', 'models', 'classes');
            const fileName = `${dasherize(entityName)}.${TemplateOption.Class}.ts`;
            const tmplPath = path.join(TEMPLATE_DIR_PATH, TemplateOption.Class, `${TemplateOption.Class}-template.ts`);
            this.generateSingleFile(tmplPath, fileName, {...data, dirPath: __dirname}, entityName, destFolder)
        })
        return TemplateManger;
    }

    static makeFormFiles(rootPath: string, data: any): TemplateManger {
        data = {...data, classify, camelize, capitalize, dasherize, definitions: data.swaggerData.definitions}
        Object.keys(data.definitions).forEach((entityName: string) => {
            const destFolder = path.join(rootPath, 'src', 'lib', 'components', `${dasherize(entityName)}-form`);
            this.generateComponentFiles(entityName, data, destFolder);
        })
        return TemplateManger;
    }

    static generateComponentFiles(entityName: string, data: any, destFolder: string,compType?:string) {
        for (let suffix of SUFFIX_TYPES) {
            const tmplPath = path.join(TEMPLATE_DIR_PATH,compType ?? TemplateOption.Form, `${compType ?? TemplateOption.Form}-template.${suffix}`);
            const fileName = `${dasherize(entityName)}.component.${suffix}`;
            this.generateSingleFile(tmplPath, fileName, data, entityName, destFolder)
        }
        return TemplateManger
    }

    private static generateSingleFile(tmplPath, fileName, data: any, entityName: string, destFolder: string) {
        const ejsTemplate = TemplateManger.getPureEJSTemplate(tmplPath);
        const templateData = {...data, properties: data.definitions[entityName].properties, entityName};
        const content = TemplateManger.getRenderedEJS(ejsTemplate, templateData);
        TemplateManger.writeTemplateFileFn(destFolder, content, fileName);
    }

    private static getPureEJSTemplate(templateFilePath: string): string {

        if (!this.isTemplateFileExist(templateFilePath)) {
            throw new Error('getPureEJSTemplate failed')
        }
        return fs.readFileSync(templateFilePath, {encoding: 'utf8'});
    }

    private static getRenderedEJS(ejsTemplate: string, templateData): string {
        return ejs.render(ejsTemplate, {...templateData});
    }

    private static writeTemplateFileFn(destFolder: string, content: string, fileName: string) {
        if (!fs.existsSync(destFolder)) {
            fs.mkdirSync(destFolder);
        }
        fs.writeFileSync(path.join(destFolder, fileName), content);
    }

    private static isTemplateFileExist(templateFilePath: string) {
        if (!fs.existsSync(templateFilePath)) {
            console.error(`There is no template file in`, templateFilePath);
            return false;
        }
        return true;
    }
}