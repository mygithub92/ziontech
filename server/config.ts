export const config = {
    db: {
        name: 'ziontech',
        dialect: 'mysql',
        username: 'root',
        passowrd: '1234',
        modelPaths: [__dirname + "/model"]
    },
    qr: (id: number) => {
        // return `/../ng-client/dist/assets/qr/qr${id}.png`;
        return `ng-client/src/assets/qr/qr${id}.png`;
    }
};
