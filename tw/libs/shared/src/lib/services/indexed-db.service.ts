export interface IndexedDBSettings {
  dbName: string,
  storeName: string
}

export class IndexedDBService<T = any> {

  private static _instance: IndexedDBService
  private _db!: IDBDatabase;
  private _dbName!: string
  private _storeName!: string;

  protected constructor() {
    console.log('IndexedDBService was created')
  }

  static getInstance(settings: IndexedDBSettings): IndexedDBService {
    if (!this._instance) {
      this._instance = new IndexedDBService();
      this._instance.setDBName(settings.dbName);
      this._instance.setStoreName(settings.storeName);
      IndexedDBService._instance.create();
    }
    return this._instance
  }

  public add(key: string, value: T): void {
    const transaction: IDBTransaction = this._db.transaction([this._storeName], 'readwrite');
    const store: IDBObjectStore = transaction.objectStore(this._storeName);
    store.add(value, key);
  }

  public get(key: string): Promise<T> {
    return new Promise((resolve, reject) => {
      const transaction: IDBTransaction = this._db.transaction([this._storeName]);
      const store: IDBObjectStore = transaction.objectStore(this._storeName);
      const request: IDBRequest = store.get(key);
      request.onsuccess = () => resolve(request.result)
      request.onerror = () => reject(request.error);
    });
  }

  public delete(key: string): void {
    const transaction: IDBTransaction = this._db.transaction([this._storeName], 'readwrite');
    const store: IDBObjectStore = transaction.objectStore(this._storeName);
    store.delete(key);
  }

  private setStoreName(value: string): void {
    this._storeName = value;
  }

  private setDBName(dbName: string): void {
    this._dbName = dbName;
  }

  private create(): void {
    const request: IDBOpenDBRequest = indexedDB.open(this._dbName);
    request.onerror = () => console.log('IndexedDB error: ' + request.error)
    request.onsuccess = () => this._db = request.result;
    request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      this._db = (event.target as IDBOpenDBRequest).result;
      this._db.createObjectStore(this._storeName);
    };
  }
}
