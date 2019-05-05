import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpRequest,
  HttpHeaders,
  HttpEvent
} from "@angular/common/http";
import { url } from "../../common/url";
import { Observable } from "rxjs";

@Injectable()
export class CategoryService {
  result: any;
  Authorization: string;
  constructor(private http: HttpClient) {
    this.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;
  }

  addCategory(data): Observable<any> {
    return this.http.post(url, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    });
  }

  getCategory(): Observable<any> {
    return this.http.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    });
  }

  editCategory(id): Observable<any> {
    const newUrl = `${url}/${id}`;
    return this.http.get(newUrl, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    });
  }

  updateCategory(data): Observable<any> {
    const newUrl = `${url}/${data.id}`;
    return this.http.put(newUrl, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    });
  }

  deleteCategory(id): Observable<any> {
    const newUrl = `${url}/${id}`;
    return this.http.delete(newUrl, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    });
  }
}
