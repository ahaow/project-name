export interface result {
    code: number;
    success: boolean;
    msg: string;
    data?: any;
}

function resultCommonFn(code, success, msg, data?): result {
    return {
        code,
        success,
        msg,
        data
    }
}

export function resultSuccessFn(msg, data) {
    return resultCommonFn(200, true, msg, data)
}

export function resultFailFn(code, msg) {
    return resultCommonFn(code, false, msg, null)
}
