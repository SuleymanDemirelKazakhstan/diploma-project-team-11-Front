import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistenseService {
  set(key: string, data: any) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  get(key: string) {
    try {
      let item = localStorage.getItem(key);
      if (item) {
        try {
          return JSON.parse(item);
        } catch (err) {
          console.error('LocalStorage is empty', err);
          return null;
        }
      }
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }
}
