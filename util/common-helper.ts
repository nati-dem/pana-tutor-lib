const successCodes = new Set([200, 201, 202]);

export const isSuccessHttpCode = (status:number) => {
    return successCodes.has(status);
}
