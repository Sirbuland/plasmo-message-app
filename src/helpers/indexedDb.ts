const dbName = 'plasmoApp';
const objectStoreName = 'users';


interface UserData {
  id: number;
  username: string;
  email: string;
}

let db: IDBDatabase | null = null

const request: IDBOpenDBRequest = indexedDB.open(dbName, 1);

request.onsuccess = (event: Event) => {
  db = (event.target as IDBOpenDBRequest)?.result;
  // checkAndAddMockUser(db);
};

export const getDatabase = (): IDBDatabase | null => {
  return db;
}



// Handle database opening error
request.onerror = (event: Event) => {
  console.error('Error opening database:', (event.target as IDBOpenDBRequest).error);
};


// Handle database upgrade needed
request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
  const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;

  // Create object store if it doesn't exist
  if (!db.objectStoreNames.contains(objectStoreName)) {
    const objectStore = db.createObjectStore(objectStoreName, { keyPath: 'id', autoIncrement: true });
    // You can add more configurations or indexes if needed
  }
};

function checkAndAddMockUser(db: IDBDatabase) {
  // Create a transaction and access the object store
  const transaction: IDBTransaction = db.transaction([objectStoreName], 'readwrite');
  const objectStore: IDBObjectStore = transaction.objectStore(objectStoreName);

  // Check if a user with ID 1 exists
  const getRequest: IDBRequest = objectStore.get(1);

  getRequest.onsuccess = (event: Event) => {
    const existingUser: UserData = (event.target as IDBRequest)?.result;

    // If user with ID 1 doesn't exist, add the mock user
    if (!existingUser) {
      addMockUser(objectStore);
    } else {
      console.log('User with ID 1 already exists. Skipping mock user addition.');
      db.close();
    }
  };

  getRequest.onerror = (errorEvent: Event) => {
    console.error('Error checking for existing user:', (errorEvent.target as IDBRequest).error);
    db.close();
  };
}

function addMockUser(objectStore: IDBObjectStore) {
  // Add mock user data
  const mockUserData: UserData = { id: 1, username: 'mockuser', email: 'mockuser@example.com' };
  const addRequest: IDBRequest = objectStore.add(mockUserData);

  // Handle the addition success
  addRequest.onsuccess = () => {
    console.log('Mock user added successfully');
  };

  // Handle the addition error
  addRequest.onerror = (errorEvent: Event) => {
    console.error('Error adding mock user:', (errorEvent.target as IDBRequest).error);
  };
}
