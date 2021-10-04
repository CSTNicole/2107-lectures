// const { MongoClient } = require('mongodb');
import { MongoClient } from 'mongodb';

// const uri = 'mongodb+srv://yoonseo:yoonseo@cluster123.8reyn.mongodb.net?retryWrites=true&w=majority"';
const uri = 'mongodb+srv://flamingo:Xp92tRG2rgmSHTkC@cluster0.ketvc.mongodb.net/sample_mflix?retryWrites=true&w=majority?retryWrites=true&w=majority';

export function getFlamingos() {
    const client = new MongoClient(uri);

    return new Promise(
        (resolve, reject) => {
            client.connect(async error => {
                // guard programming, exit early
                // catch errors and invalid states early
                if (error) {
                    reject(error);
                    return;
                }

                // from the cluster we are connected to
                // connect to the database named test and get
                // the collection named devices
                const collection = client.db().collection('flamingo');
                const cursor = collection.find();
                const data = await cursor.toArray();
                console.log(data);

                // perform actions on the collection object
                client.close();

                resolve(data);
            });
        }
    )
};

export function createFlamingo(name, age, colour) {
    const client = new MongoClient(uri);

    return new Promise(
        (resolve, reject) => {
            client.connect(async error => {
                // guard programming, exit early
                // catch errors and invalid states early
                if (error) {
                    reject(error);
                    return;
                }

                // from the cluster we are connected to
                // connect to the database named test and get
                // the collection named devices
                const collection = client.db().collection('flamingo');
                function insertOneFlamingo() {
                    return new Promise(
                        (resolve, reject) => {
                            collection.insertOne(
                                {
                                    name,
                                    age,
                                    colour
                                },
                                () => {
                                    resolve('success');
                                    console.log("successfully saved Fluffles");
                                }
                            );
                        }
                    );
                }
                await insertOneFlamingo();

                // perform actions on the collection object
                client.close();

                resolve('success');
            });
        }
    )
};