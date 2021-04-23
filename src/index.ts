import application from "./app";
import {initDB} from './database';

async function main() {
    initDB();

    await application.listen(application.get('port'));
    console.log('listening port ', application.get('port'));

}
main();