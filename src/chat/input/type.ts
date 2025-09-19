export enum FILE_OPERATE_TYPE {
    INPUT = 'input',
    CLICK = 'CLICK',
}
export enum FileType {
    TASK = 1, // 任务
}

export interface BaseCommandItem {
    name: string;
    description?: string;
}
// 前后端传输信息用的文件类型
export interface FileItem {
    fileId?: string | number;
    fileType: FileType;
    fileName: string;
    isCurrentFile?: boolean;
}
export interface CurrentFileItem extends FileItem {
    sqlText: string; // 当前任务内的SQL
    sinkStr?: string; // 当前任务内的最新的结果表信息，JSON字符串
    sourceStr?: string; // 当前任务内的最新的源表信息，JSON字符串
    sideStr?: string; // 当前任务内的最新的维表信息，JSON字符串
    selectedSql?: string; // 当前任务内的选中的SQL片段
    beginLine?: number; // 当前任务内的选中的SQL片段开始行号
    endLine?: number; // 当前任务内的选中的SQL片段结束行号
}
export enum CommandType {
    COMMAND = 1, // 快捷命令
    FILE_REQUEST = 2, // 文件唤起
}
export enum QuickCommand {
    FIX = 'fix',
    EXPLAIN = 'explain',
    COMMENT = 'comment',
    CLEAR = 'clear',
    HELP = 'help',
}
// 前端渲染用的文件类型
export interface FileItemRender extends BaseCommandItem {
    fileType: FileType;
    fileId?: string | number;
    insertType?: FILE_OPERATE_TYPE; // input: 输入框输入的命令，file: 从文件列表选择的命令
    isCurrentFile?: boolean; // 是否为当前文件
    extra?: any;
    sqlText: string;
    sinkStr?: string;
    sourceStr?: string;
    sideStr?: string;
    selectedSql?: string;
    beginLine?: number;
    endLine?: number;
    icon?: React.ReactNode; // 图标
}

export interface CommandListItem {
    commandContent: string;
    commandType: CommandType;
}
