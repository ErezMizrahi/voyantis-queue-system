import { app } from "./app";

const start = async () => {
    try {
        app.listen(3000, () => {
            console.log('listening on port 3000');
        });
    } catch (e) {
        console.error(e)
    }
}


start();