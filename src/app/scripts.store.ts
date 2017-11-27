export interface Scripts {
    name: string;
    src: string;
}  
export const ScriptStore: Scripts[] = [
    {name: 'filepicker', src: 'https://api.filestackapi.com/filestack.js'},
    {name: 'module1', src: './externals/module1'},
    {name: 'jquery', src: "https://code.jquery.com/jquery-1.12.4.min.js"}
];