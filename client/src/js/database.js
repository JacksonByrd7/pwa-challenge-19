import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });


      export const putDb = async (data) => {
    const jateDb = await openDB('jateDb', 1);
    const tx = jateDb.transaction('jate', 'readwrite');
    const store = tx.objectStore('jate');
    await store.put({ id: 1, value: data });
      };

    export const getDb = async () => {
    const jateDb = await openDB('jateDb', 1);
    const tx = jateDb.transaction('jate', 'readonly');
    const store = tx.objectStore('jate');
    const result = await store.get(1);
    return result?.value;
    };

initdb();